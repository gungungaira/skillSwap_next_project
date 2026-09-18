"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [limit, setLimit] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    setLimit({
      ...limit,
      [e.target.name]: e.target.value,
    });
  };
  const getUser = async () => {
    const token = localStorage.getItem("token");
    const getServer = await fetch("", {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await getServer.json();
    console.log(data);
  };
  const checkMyError = () => {
    const setErr = {};
    if (limit.email === "") {
      setErr.email = "please enter email here";
    } else if (!limit.email.includes("@")) {
      setErr.email = "please check your email";
    }
    if (limit.password === "") {
      setErr.password = "please enter your password";
    } else if (limit.password.length < 6) {
      setErr.password = "please enter your password length should be six digit";
    }
    setError(setErr);
    return Object.keys(setErr).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const myErr = checkMyError();
    if (!myErr) return;
    setLoading(true);
    try {
      const server = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(limit),
      });
      const data = await server.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        await getUser;
        router.push("/home");
      }
    } catch {
      setErr({ form: data.message || "invalid email and password" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles["head-of-login"]}>
      <div className={styles["in-head-1"]}>
        <div className={styles["login-text"]}>LOGIN PAGE </div>
        <div style={{ marginTop: "43px" }}>
          <form className={styles["inner-comp"]} onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Enter your name "
              onChange={handleChange}
              className={styles["inner-comp-input"]}
              value={limit.email}
            />
            {error.email && <p style={{ fontSize: "10px" }}>{error.email}</p>}
            <input
              name="password"
              type="password"
              placeholder="Enter password "
              onChange={handleChange}
              className={styles["inner-comp-input"]}
              value={limit.password}
            />
            {error.password && (
              <p style={{ fontSize: "10px" }}>{error.password}</p>
            )}
            <button
              type="submit"
              className={styles["inner-comp-input-button"]}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            {/* <Link to="/registration" style={{fontSize:"16px"}}> REGISTER HERE</Link> */}
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LoginPage;

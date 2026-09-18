"use client";
import React, { useState} from "react";
import { useRouter} from "next/navigation";
import Link from "next/link";
import styles from "./createProfile.module.css";

const CreateProfile = () => {
  const [inputData,setInputData]=useState({
    name:"",
    address:"",
    language:"",
    experience:"",
    availability:""


  })
  const [error,setError]=useState({})
  const router =useRouter()
const handleChange=(e)=>{
  setInputData({
    ...inputData,
    [e.target.name]:e.target.value
  })

}

const checkError=()=>{
  const setErr={}
  if (inputData.name.trim()){
    setErr.name=" name  field is required"
  }
  if (inputData. address.trim()){
    setErr. address="  address  field is required"
  }
   if (inputData. language.trim()){
    setErr. language=" language field is required"
  }
   if (inputData.experience.trim()){
    setErr. experience=" experience  field is required"
  }
   if (inputData.availability.trim()){
    setErr.availability=" availability  field is required"
  }
  setError(setErr)
  return Object.keys(setErr).length > 0
}
const handleNext=(e)=>{
  e.preventDefault()
  const myError=checkError()
  if(myError){
   router.push('/createProfile/addSkills')
  }
  
}

  return (
    <div className={styles["profile_head"]}>
      <div className={styles["profile_head2"]}>
        <div className={styles["profile_head3"]}>
          <div className={styles["create-text"]}>Create Profile here </div>
          <div className={styles["profile-form-wrapper"]}>
            <form className={styles["inner-comp"]} onSubmit={handleNext}>
              <input
                name="name"
                type="text"
                placeholder="Enter your name "
                className={styles["inner-comp-input"]}
                value={inputData.name}
                onChange={handleChange}
              />
              {error.name && <p>{error.name}</p>}
              <textarea
                name="address"
                placeholder="Enter your address"
                className={styles["inner-comp-input"]}
                value={inputData.address}
                onChange={handleChange}
              />
              {error.address && <p>{error.address}</p>}
              <select
                name="language"
                value={inputData.language}
                onChange={handleChange}
              >
                <option value="">Select language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="punjabi">Punjabi</option>
                <option value="bengali">Bengali</option>
                <option value="marathi">Marathi</option>
                <option value="gujarati">Gujarati</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="kannada">Kannada</option>
                <option value="malayalam">Malayalam</option>
                <option value="odia">Odia</option>
                <option value="assamese">Assamese</option>
                <option value="urdu">Urdu</option>
                <option value="nepali">Nepali</option>
                <option value="sanskrit">Sanskrit</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="spanish">Spanish</option>
                <option value="italian">Italian</option>
                <option value="portuguese">Portuguese</option>
                <option value="russian">Russian</option>
                <option value="japanese">Japanese</option>
                <option value="korean">Korean</option>
                <option value="chinese">Chinese</option>
              </select>
              {error.language && <p>{error.language}</p>}
              <input
                name="experience"
                type="text"
                placeholder="Enter your experience "
                className={styles["inner-comp-input"]}
                value={inputData.experience}
                onChange={handleChange}
              />
              {error.experience && <p>{error.experience}</p>}
              <input
                name="availability"
                type="text"
                placeholder="Enter your  Availability "
                className={styles["inner-comp-input"]}
                value={inputData.availability}
                onChange={handleChange}
              />
              {error.availability && <p>{error.availability}</p>}
              

              <button
                type="submit"
                style={{
                  fontSize: "16px",
                  padding: "10px 25px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
              <Link href="/home" style={{ fontSize: "16px" }}>
                Back
              </Link>
            </form>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;



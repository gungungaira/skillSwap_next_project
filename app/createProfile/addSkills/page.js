"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import styles from "./addSkills.module.css";

const skills = [
  "Cooking",
  "Baking",
  "Indian Cooking",
  "Chinese Cooking",
  "Italian Cooking",
  "Healthy Cooking",
  "Meal Preparation",
  "Photography",
  "Photo Editing",
  "Videography",
  "Video Editing",
  "Graphic Design",
  "UI Design",
  "UX Design",
  "Web Design",
  "Drawing",
  "Sketching",
  "Painting",
  "Watercolor Painting",
  "Digital Art",
  "Calligraphy",
  "Crafting",
  "Sewing",
  "Stitching",
  "Embroidery",
  "Knitting",
  "Crochet",
  "Woodworking",
  "Gardening",
  "Home Gardening",
  "Interior Design",
  "Dancing",
  "Singing",
  "Guitar",
  "Piano",
  "Keyboard",
  "Drums",
  "Violin",
  "Music Production",
  "Music Theory",
  "Acting",
  "Public Speaking",
  "Storytelling",
  "Creative Writing",
  "Blogging",
  "Poetry",
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Korean",
  "Yoga",
  "Meditation",
  "Fitness",
  "Workout Training",
  "Running",
  "Cycling",
  "Chess",
  "Badminton",
  "Football",
  "Cricket",
  "Table Tennis",
  "Swimming",
  "Programming",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Java",
  "C",
  "C++",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Data Structures",
  "Algorithms",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Analysis",
  "Excel",
  "Microsoft Word",
  "PowerPoint",
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Content Creation",
  "Copywriting",
  "Business",
  "Entrepreneurship",
  "Sales",
  "Communication",
  "Leadership",
  "Time Management",
  "Personal Finance",
  "Investing",
  "Budgeting",
  "Makeup",
  "Hair Styling",
  "Fashion Design",
  "First Aid",
  "Driving",
  "Travel Planning",
  "Teaching",
  "Tutoring",
  "Career Guidance",
  "Resume Writing",
  "Interview Preparation",
];

const fuse = new Fuse(skills, {
  threshold: 0.3,
  distance: 100,
});

const SkillAutocomplete = () => {
  const router = useRouter();

  const [teachInput, setTeachInput] = useState("");
  const [learnInput, setLearnInput] = useState("");

  const [teachSuggestions, setTeachSuggestions] = useState([]);
  const [learnSuggestions, setLearnSuggestions] = useState([]);

  const [teachingSkills, setTeachingSkills] = useState([]);
  const [learningSkills, setLearningSkills] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const onFileChange = (event) => {};

  const handleTeachChange = (e) => {
    const value = e.target.name;
    setTeachInput(value);
    if (value.trim() === "") {
      setTeachSuggestions([]);
      return;
    }
    const FuseCheck = fuse.search(value);
    const sliceValue = FuseCheck.slice(0, 6).map((item) => item.item);
    setTeachSuggestions(sliceValue);
  };

  const handleLearnChange = (e) => {
    const value = e.target.name;
    setLearnInput(value);
    if (value.trim() === "") {
      setLearnSuggestions([]);
      return;
    }
    const FuseCheck = fuse.search(value);
    const sliceValue = FuseCheck.slice(0, 6).map((item) => item.item);
    setLearnSuggestions(sliceValue);
  };

  const selectTeachSkill = (skill) => {
    if (!teachingSkills.includes(skill)) {
      setTeachingSkills(...teachingSkills, skill);
    }
    setTeachInput("");
    setLearnSuggestions([]);
  };

  const selectLearnSkill = (skill) => {
    if(!setLearnSuggestions.includes(skill)){
      setLearningSkills(...learningSkills,skill)
    }
    setLearnInput("");
    setLearnSuggestions([]);
  };

  const removeTeachSkill = (skill) => {
   setTeachingSkills(...teachingSkills.filter((item)=> item!==skill))
  };

  const removeLearnSkill = (skill) => {
     setLearningSkills(...learningSkills.filter((item)=>item !==skill))
  };

  const onFileUpload = async () => {
    
  };

  useEffect(() => {}, []);

  const handleSubmit = async () => {};

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Add Your Skills</h1>

        <p className={styles.subtitle}>
          Select skills you can teach and skills you want to learn.
        </p>

        <h3 className={styles.heading}>Skills I Can Teach</h3>

        <input
          type="text"
          value={teachInput}
          onChange={handleTeachChange}
          placeholder="Search skill..."
          className={styles.input}
        />

        {teachSuggestions.length > 0 && (
          <div className={styles.suggestions}>
            {teachSuggestions.map((skill) => (
              <div
                key={skill}
                onClick={() => selectTeachSkill(skill)}
                className={styles.suggestion}
              >
                {skill}
              </div>
            ))}
          </div>
        )}

        <div className={styles.skillsContainer}>
          {teachingSkills.map((skill) => (
            <span key={skill} className={styles.teachSkill}>
              {skill}

              <button
                onClick={() => removeTeachSkill(skill)}
                className={styles.removeButton}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <h3 className={styles.heading}>Skills I Want To Learn</h3>

        <input
          type="text"
          value={learnInput}
          onChange={handleLearnChange}
          placeholder="Search skill..."
          className={styles.input}
        />

        {learnSuggestions.length > 0 && (
          <div className={styles.suggestions}>
            {learnSuggestions.map((skill) => (
              <div
                key={skill}
                onClick={() => selectLearnSkill(skill)}
                className={styles.suggestion}
              >
                {skill}
              </div>
            ))}
          </div>
        )}

        <div className={styles.skillsContainer}>
          {learningSkills.map((skill) => (
            <span key={skill} className={styles.learnSkill}>
              {skill}

              <button
                onClick={() => removeLearnSkill(skill)}
                className={styles.removeButton}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <h3 className={styles.heading}>Profile Photo</h3>

        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className={styles.fileInput}
        />

        {previewUrl && (
          <img
            src={previewUrl}
            alt="Profile preview"
            className={styles.preview}
          />
        )}

        <button
          onClick={onFileUpload}
          disabled={uploading}
          className={styles.uploadButton}
        >
          {uploading ? "Uploading..." : "Upload Photo"}
        </button>

        <button onClick={handleSubmit} className={styles.createButton}>
          Create Profile
        </button>

        <div className={styles.backContainer}>
          <Link href="/home" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillAutocomplete;

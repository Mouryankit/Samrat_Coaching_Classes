
import "./Course.css";
import { FaBookOpen, FaClock, FaChalkboardTeacher } from "react-icons/fa";

const coursesData = [
  {
    title: "Class 9 & 10 Foundation",
    duration: "1 Year",
    mode: "Offline",
    highlights: ["Strong Basics", "Weekly Tests", "Doubt Sessions"],
  },
  {
    title: "Class 11 & 12 Science",
    duration: "2 Years",
    mode: "Offline",
    highlights: ["Concept Clarity", "Board + Competitive Focus", "Expert Faculty"],
  },
  {
    title: "JEE / NEET Preparation",
    duration: "2 Years",
    mode: "Offline",
    highlights: ["Advanced Problems", "Mock Tests", "Result Oriented"],
  },
];

const Courses = () => {
  return (
    <section className="courses-section" id="courses">
      <h2 className="section-title">Our Courses</h2>
      <p className="section-subtitle">
        Structured programs designed for academic excellence
      </p>

      <div className="courses-container">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-icon">
              <FaBookOpen />
            </div>

            <h3>{course.title}</h3>

            <div className="course-meta">
              <span>
                <FaClock /> {course.duration}
              </span>
              <span>
                <FaChalkboardTeacher /> {course.mode}
              </span>
            </div>

            <ul>
              {course.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button className="course-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

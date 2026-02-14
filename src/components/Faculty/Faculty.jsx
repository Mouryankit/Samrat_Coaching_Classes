import FacultyImage from "../../assets/images/person.png"; 

import "./Faculty.css";

const facultyData = [
  {
    name: "Mr. Rajesh Sharma",
    subject: "Mathematics",
    experience: "10 Years",
    img: FacultyImage,
  },
  {
    name: "Ms. Anjali Verma",
    subject: "Physics",
    experience: "8 Years",
    img: FacultyImage,
  },
  {
    name: "Mr. Amit Singh",
    subject: "Chemistry",
    experience: "9 Years",
    img: FacultyImage,
  },
  {
    name: "Ms. Priya Kapoor",
    subject: "Biology",
    experience: "7 Years",
    img: FacultyImage,
  },
];

const Faculty = () => {
  return (
    <section className="faculty-section" id="faculty">
      <h2 className="section-title">Meet Our Faculty</h2>
      <p className="section-subtitle">
        Experienced educators shaping your success
      </p>

      <div className="faculty-container">
        {facultyData.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <div className="faculty-image">
              <img src={faculty.img} alt={faculty.name} />
            </div>
            <h3>{faculty.name}</h3>
            <p>{faculty.subject}</p>
            <span>{faculty.experience}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;

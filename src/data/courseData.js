import CoursePrimaryImg from "../assets/images/course_primary.png";
import CourseMiddleImg from "../assets/images/course_middle.png";
import CourseHighImg from "../assets/images/course_high.png";
import CourseSeniorImg from "../assets/images/course_senior.png";

export const coursesData = [
  {
    id: 1,
    category: "Primary (1-5)",
    image: CoursePrimaryImg,
    tag: "Early Start",
    title: "Primary Foundation",
    subtitle: "Nurturing curiosity & cognitive skills",
    duration: "1 Year",
    mode: "Offline",
    seats: "25 Seats",
    fee: "₹4,000 / yr",
    color: "var(--color-primary-light)",
    highlights: [
      "Arithmetic & Reading skills",
      "Creative Science activities",
      "Weekly progress reviews",
    ],
  },
  {
    id: 2,
    category: "Middle (6-8)",
    image: CourseMiddleImg,
    tag: "Booster",
    title: "Middle School Booster",
    subtitle: "Developing critical & analytical thinking",
    duration: "1 Year",
    mode: "Offline",
    seats: "30 Seats",
    fee: "₹6,000 / yr",
    color: "#0288d1",
    highlights: [
      "Conceptual math & science deep dive",
      "Logical reasoning workshops",
      "Personalized homework support",
    ],
  },
  {
    id: 3,
    category: "High (9-10)",
    image: CourseHighImg,
    tag: "Popular",
    title: "High School Boards Prep",
    subtitle: "Board exam excellence & core subjects",
    duration: "1 Year",
    mode: "Offline",
    seats: "35 Seats",
    fee: "₹9,000 / yr",
    color: "var(--color-accent-gold)",
    highlights: [
      "Strict NCERT syllabus coverage",
      "Regular mock tests & sample papers",
      "Dedicated doubt clearance sessions",
    ],
  },
  {
    id: 4,
    category: "Senior Secondary (11-12)",
    image: CourseSeniorImg,
    tag: "Top Rated",
    title: "Senior Secondary Mastery",
    subtitle: "Comprehensive board syllabus & prep",
    duration: "1-2 Years",
    mode: "Offline",
    seats: "40 Seats",
    fee: "₹12,000 / yr",
    color: "var(--color-accent-orange)",
    highlights: [
      "Science & Commerce streams",
      "Physics, Chemistry, Maths & Biology",
      "Daily Practice Problems (DPPs)",
    ],
  },
];

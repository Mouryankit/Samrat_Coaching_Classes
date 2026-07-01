import personImg from "../assets/images/person.PNG";
import { FaGraduationCap, FaChartLine, FaTrophy, FaMedal } from "react-icons/fa";

export const statsData = [
  { label: "Students Mentored", value: 5000, suffix: "+", icon: FaGraduationCap },
  { label: "Board Success Rate", value: 98.5, suffix: "%", icon: FaChartLine },
  { label: "Students Scoring > 75%", value: 380, suffix: "+", icon: FaTrophy },
  { label: "Parent Satisfaction", value: 98, suffix: "%", icon: FaMedal },
];

export const rankersData = [
  { id: 1, name: "Rahul Sharma", score: "99.4%", class: "Class 12", year: "2025", badge: "Science Topper", highlight: "Scored perfect 100 in Physics and Mathematics.", img: personImg },
  { id: 2, name: "Priya Patel", score: "98.8%", class: "Class 10", year: "2025", badge: "School Topper", highlight: "Scored 99 in Science and Social Studies.", img: personImg },
  { id: 3, name: "Sneha Gupta", score: "97.6%", class: "Class 10", year: "2024", badge: "Merit Holder", highlight: "Consistent academic performer with 99 in English.", img: personImg },
  { id: 4, name: "Aryan Singh", score: "97.2%", class: "Class 12", year: "2025", badge: "Commerce Topper", highlight: "Top scorer in Accountancy and Economics.", img: personImg },
  { id: 5, name: "Ananya Verma", score: "96.4%", class: "Class 10", year: "2025", badge: "Excellent Growth", highlight: "Remarkable improvement from 75% in mid-terms.", img: personImg },
  { id: 6, name: "Vikram Malhotra", score: "95.8%", class: "Class 12", year: "2024", badge: "Science Merit", highlight: "Scored 98 in Chemistry and Computer Science.", img: personImg },
  { id: 7, name: "Rohan Mehta", score: "95.2%", class: "Class 10", year: "2025", badge: "Maths Merit", highlight: "Top scorer in Mathematics with a score of 98.", img: personImg },
  { id: 8, name: "Neha Roy", score: "94.6%", class: "Class 12", year: "2025", badge: "Humanities Topper", highlight: "Excelled in English and History with top grades.", img: personImg },
  { id: 9, name: "Kabir Joshi", score: "93.8%", class: "Class 10", year: "2024", badge: "Merit Badge", highlight: "Scored perfect A1 grades in all subjects.", img: personImg },
  { id: 10, name: "Diya Kapoor", score: "93.2%", class: "Class 12", year: "2025", badge: "Science Merit", highlight: "Top performer in Biology and English.", img: personImg },
];

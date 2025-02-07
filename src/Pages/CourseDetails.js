import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import Error404 from "./Error404";
import "../styles/CourseDetails.css";



const courses = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the fundamentals of React.",
    image: "${process.env.PUBLIC_URL}/Assets/Reactjs.jpg",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master advanced JavaScript concepts.",
    image: "${process.env.PUBLIC_URL}/Assets/JavaScript.jpg",
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    description: "Get started with Node.js.",
    image: "${process.env.PUBLIC_URL}/Assets/NodeJs.png",
  },
];


const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <Error404 />;
  }

  return (
    <div className="course-details">
      {/* Course Info */}
      <div className="course-info">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <Link to="/courses" className="back-button">← Back to Courses</Link>
      </div>

      {/* Video Placeholder (Image with Play Button) */}
      <div className="video-preview">
        <img src={course.image} alt={course.title} />
        <div className="play-button">
          <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

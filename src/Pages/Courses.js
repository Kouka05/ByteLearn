import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Courses.css";

const courses = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the fundamentals of React.",
    image: "/Assets/Reactjs.jpg",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master advanced JavaScript concepts.",
    image: "/Assets/JavaScript.jpg",
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    description: "Get started with Node.js.",
    image: "/Assets/NodeJs.png",
  },
];


const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Our Courses</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="course-card">
              <Link to={`/courses/${course.id}`}>
                <img src={course.image} alt={course.title} />
                <div className="course-info">
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Courses;

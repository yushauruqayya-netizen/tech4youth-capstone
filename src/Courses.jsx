import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Courses.css';

const coursesData = [
  {
    title: 'HTML Fundamentals',
    description: 'Learn how to create website structures.',
  },
  {
    title: 'CSS & Web Design',
    description: 'Learn how to style beautiful websites.',
  },
  {
    title: 'JavaScript',
    description: 'Learn how to make websites interactive.',
  },
  {
    title: 'React Development',
    description: 'Learn how to build websites with React.',
  },
  {
    title: 'Node.js',
    description: 'Learn how to build backend applications.',
  },
  {
    title: 'MongoDB',
    description: 'Learn how to store and manage data.',
  },
  {
    title: 'Git',
    description: 'Learn how to track changes in your code.',
  },
  {
    title: 'GitHub',
    description: 'Learn how to upload and share your projects.',
  },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <header className="courses-header">
        <h1>Explore Our Learning Hub</h1>
        <p>Learn the skills you need to become a professional software developer.</p>
      </header>

      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="watch-btn">
              Watch Lessons <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2026 Tech for Youth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Courses;
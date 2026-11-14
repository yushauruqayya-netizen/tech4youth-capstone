import React from 'react';
import './Courses.css';

const coursesList = [
  {
    id: 1,
    title: 'HTML Fundamentals',
    description: 'Learn how to create website structures.',
    videoUrl: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
  },
  {
    id: 2,
    title: 'CSS & Web Design',
    description: 'Learn how to style beautiful websites.',
    videoUrl: 'https://www.youtube.com/watch?v=1PnVor36_40',
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Learn how to make websites interactive.',
    videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
  },
  {
    id: 4,
    title: 'React Development',
    description: 'Learn how to build websites with React.',
    videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
  },
  {
    id: 5,
    title: 'Node.js',
    description: 'Learn how to build backend applications.',
    videoUrl: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
  },
  {
    id: 6,
    title: 'MongoDB',
    description: 'Learn how to store and manage data.',
    videoUrl: 'https://www.youtube.com/watch?v=-56x56UppqQ',
  },
  {
    id: 7,
    title: 'Git',
    description: 'Learn how to track changes in your code.',
    videoUrl: 'https://www.youtube.com/watch?v=8JJ101D3knE',
  },
  {
    id: 8,
    title: 'GitHub',
    description: 'Learn how to upload and share your projects.',
    videoUrl: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
  },
];

function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Explore Our Learning Hub</h1>
        <p>Learn the skills you need to become a professional software developer.</p>
      </div>

      <div className="courses-grid">
        {coursesList.map((course) => (
          <div key={course.id} className="course-card">
            <div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
            <a
              href={course.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-btn"
              style={{ textDecoration: 'none' }}
            >
              Watch Lessons →
            </a>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tech 4 Youth. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Courses;
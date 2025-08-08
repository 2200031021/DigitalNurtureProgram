import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState("");

  const books = [
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Alchemist", author: "Paulo Coelho" },
  ];

  const blogs = [
    { title: "React Best Practices", category: "Web Dev" },
    { title: "Cybersecurity 101", category: "Security" },
  ];

  const courses = [
    { name: "Full Stack Development", duration: "3 Months" },
    { name: "Blockchain Basics", duration: "2 Months" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App</h1>

      <div>
        <button onClick={() => setSelected("books")}>Show Books</button>
        <button onClick={() => setSelected("blogs")}>Show Blogs</button>
        <button onClick={() => setSelected("courses")}>Show Courses</button>
      </div>

      <hr />

      {/* Conditional Rendering using if-else style */}
      {selected === "books" && <BookDetails books={books} />}

      {/* Ternary operator style */}
      {selected === "blogs" ? <BlogDetails blogs={blogs} /> : null}

      {/* Another way using ternary */}
      {selected === "courses" ? (
        <CourseDetails courses={courses} />
      ) : (
        <p>Select a section to view details</p>
      )}
    </div>
  );
}

export default App;

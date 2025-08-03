import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [view, setView] = useState("book");

  const books = [
    { title: "React Basics", author: "Dan Abramov" },
    { title: "Learning React", author: "Alex Banks" }
  ];

  const blogs = [
    { name: "React Explained", category: "Frontend" },
    { name: "JS Tips", category: "JavaScript" }
  ];

  const courses = [
    { name: "React Crash Course", duration: "3h" },
    { name: "Advanced React", duration: "6h" }
  ];

  // Conditional JSX with variable
  let details;
  if (view === "book") {
    details = <BookDetails books={books} />;
  } else if (view === "blog") {
    details = <BlogDetails blogs={blogs} />;
  } else {
    details = <CourseDetails courses={courses} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>BloggerApp</h1>
      <button onClick={() => setView("book")}>Show Books</button>
      <button onClick={() => setView("blog")}>Show Blogs</button>
      <button onClick={() => setView("course")}>Show Courses</button>
      <hr />
      {/* Render using JSX variable */}
      {details}

      {/* Render using ternary operator */}
      <div style={{ marginTop: "20px" }}>
        {view === "book"
          ? <p>You're viewing Books</p>
          : view === "blog"
          ? <p>You're viewing Blogs</p>
          : <p>You're viewing Courses</p>}
      </div>

      {/* Render using logical && */}
      {view === "blog" && <p style={{ color: "purple" }}>Blogs are amazing!</p>}
    </div>
  );
}

export default App;

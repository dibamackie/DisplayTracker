// src/pages/Home.jsx
import "./Home.css";

function Home() {
  const categories = [
    { name: "Living Room", icon: "🛋️" },
    { name: "Work Space", icon: "💻" },
    { name: "Kitchen", icon: "🧊" },
    { name: "Bedroom", icon: "🛏️" },
    { name: "Kids", icon: "🧸" },
  ];

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="logo">Display Tracker</h1>
        <button className="logout-btn">⎋</button>
      </header>

      <main>
        <h2 className="section-title">Find by Category</h2>

        <div className="category-list">
          {categories.map((cat) => (
            <div key={cat.name} className="category-card">
              <span className="icon">{cat.icon}</span>
              <span className="label">{cat.name}</span>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

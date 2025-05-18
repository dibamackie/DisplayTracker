import "./Home.css";
import { Armchair, LampDesk, Refrigerator, BedDouble, Baby } from 'lucide-react';
import { motion } from "framer-motion";


function Home() {
  const categories = [
    { name: "Living Room",icon: <Armchair size={48} strokeWidth={3} /> },
    { name: "Work Space", icon: <LampDesk size={48} strokeWidth={3} /> },
    { name: "Kitchen", icon: <Refrigerator size={48} strokeWidth={3} /> },
    { name: "Bedroom", icon: <BedDouble size={48} strokeWidth={3} /> },
    { name: "Kids", icon: <Baby size={48} strokeWidth={3} /> },
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
        {categories.map(({ name, icon }, index) => (
  <motion.div
    key={name}
    className="category-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.4 }}
  >
    <span className="icon">{icon}</span>
    <span className="label">{name}</span>
    <span className="arrow">→</span>
  </motion.div>
))}


        </div>
      </main>
    </div>
  );
}

export default Home;
<Baby size={48} strokeWidth={3} />
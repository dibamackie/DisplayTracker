import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Home } from "lucide-react";
import "./CategoryPage.css";

function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = {
    "living room": [
      { title: "SÖDERHAMN Sofa", article: "192.334.10" },
      { title: "VIMLE Armchair", article: "184.221.88" },
    ],
    "kitchen": [
      { title: "RÅSKOG Cart", article: "502.403.09" },
      { title: "KUNGSFORS Rack", article: "903.349.31" },
    ],
    "kids": [
      { title: "FLISAT Table", article: "502.735.96" },
      { title: "DUKTIG Toy Kitchen", article: "603.199.73" },
    ],
    "work space": [
      { title: "LÅNGFJÄLL Chair", article: "804.204.73" },
      { title: "SKARSTA Desk", article: "504.707.35" },
    ],
    "bedroom": [
      { title: "HEMNES Bed Frame", article: "703.666.30" },
      { title: "MALM Dresser", article: "803.604.67" },
    ],
  };

  const products = allProducts[name.toLowerCase()] || [];

  const filteredProducts = products.filter((item) =>
    `${item.title} ${item.article}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <header className="header">
        <div className="nav-buttons">
          <button className="icon-button" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <button className="icon-button" onClick={() => navigate("/")}>
            <Home />
          </button>
        </div>
      </header>

      <main>
        <h2 className="section-title">{name.toUpperCase()}</h2>

        <div className="search-bar">
          <label htmlFor="search">Search by Name or Number</label>
          <input id="search" type="text" placeholder="Search..." />
        </div>

        <div className="product-list">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">⬛</div>
              <div className="product-info">
                <p className="product-title">{item.title}</p>
                <p className="product-article">{item.article}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CategoryPage;

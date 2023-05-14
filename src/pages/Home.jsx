import marvel from "../assets/marvel.png";
import "../pages/home.css";

const Home = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src={marvel} alt="logo marvel" />
      </div>
      <div className="searchbar">
        <input type="text" value="search character" />
      </div>

      <div className="main">
        <button>Characters</button>
        <button>Comics</button>
        <button>Favorits</button>
      </div>
    </header>
  );
};

export default Home;

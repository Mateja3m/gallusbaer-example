import Banner from "../img/main-banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-banner">
      <img className="banner" src={Banner} alt="balgach Banner" />
    </div>
  );
};

export default Home;

import Balgach from "../img/balgach1.png";
import "./Projekte.css";

const Projekte = () => {
  return (
    <section>
      <div className="container">
        <div className="title-container">
          <h3 className="projekte-title3">PROJEKTE</h3>
          <h2 className="projekte-title2">
            Möchten Sie hier wohnen? Kommen Sie näher, sehen Sie selbst.
          </h2>
          <div className="row-img">
            <img src={Balgach} alt="img" />
            <div className="text">
              <p>
                <strong>Balgach</strong>
              </p>
              <p>Eigentumswohnung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projekte;

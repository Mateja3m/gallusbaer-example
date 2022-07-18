import Balgach from "../../img/balgach1.png";
import "./Styles.scss";
import { Link } from "react-router-dom";

const Projekte = () => {
  return (
    <section className="projekte">
      <div className="container2">
        <div className="title-container">
          <h3 className="projekte-title3">PROJEKTE</h3>
          <h2 className="projekte-title2">
            Möchten Sie hier wohnen? Kommen Sie näher, sehen Sie selbst.
          </h2>
          <div className="row-img">
            <img src={Balgach} alt="img" />
            <Link to="/">
              <div className="text">
                <p>
                  <strong>Balgach</strong>
                </p>
                <p>Eigentumswohnung</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projekte;

import "./Losungen.css";
import LogoSM from "../img/baer_gb.png";

const Losungen = () => {
  return (
    <div className="losungen">
      <div className="container">
        <section className="title-container">
          <h3 className="los-heading">IHR ZIEL IST DAS ZIEL.</h3>
          <h2 className="los-text">
            Vom Suchen, Finden und <br />
            Vermitteln der
            <br /> Traumimmobilien.
          </h2>
        </section>
        <section className="wrapper">
          {/* first line */}
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">360°-Prioritäten</p>
              <p className="circle-txt">
                Wir sind Ansprechpartner für alle Themen rund um schöne
                Immobilien.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">Für alle Wünsche</p>
              <p className="circle-txt">
                Investoren, Käufer oder Verkäufer – wir vermitteln zwischen den
                Interessen.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">Technologien</p>
              <p className="circle-txt">
                In Zeiten von digital first ist alles anders. Das nutzen wir zu
                Ihrem Vorteil.
              </p>
            </div>
          </div>
          {/* second line */}
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">29 Jahre Know-how</p>
              <p className="circle-txt">
                Zusammen kennen wir drei die Finanz- und Immobilienwelt in- und
                auswendig.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">Single Point of Contact</p>
              <p className="circle-txt">
                Sie haben einen Ansprechpartner für alle Themen rund um
                Immobilien.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">Weniger ist mehr</p>
              <p className="circle-txt">
                Sie bekommen genau die Services, die zu Ihren Vorstellungen und
                Zielen passen.
              </p>
            </div>
          </div>
          {/* third line */}
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">Nach Budget</p>
              <p className="circle-txt">
                Ob Sie selber, zum Fixpreis oder mit Provision verkaufen
                möchten, wir richten uns nach Ihnen.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="container-circle">
              <img className="circle-img" src={LogoSM} alt="baer" />
              <p className="circle-heading">Crème de la Crème</p>
              <p className="circle-txt">
                Erfolgskurs heisst für uns, die Stärke vieler zu nutzen, um
                Ihnen das Maximum zu bieten.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Losungen;

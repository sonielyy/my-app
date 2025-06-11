import './CitizenshipByDescent.css';
import descentImage from '../assets/ancestor-map.svg'; // Örnek görsel

function CitizenshipByDescent() {
  return (
    <section className="descent-section">
      <div className="descent-container">
        <div className="descent-text">
          <h2>What is Citizenship by Descent?</h2>
          <p>
            Twenty-seven European countries allow non-citizens—whether from the Americas, Australia, Oceania, or even other European countries—to acquire their citizenship if they descend from one of their nationals.
          </p>

          <p>
            Unlike other pathways to citizenship—such as investment-based programs—acquiring citizenship through descent depends primarily on proving direct ancestry (parent, grandparent, great-grandparent, or even further back, depending on the country).
            No financial investment is required, as long as your lineage can be documented.
          </p>

          <div className="descent-points">
            <h4>Why this path stands out:</h4>
            <ul>
              <li><span className="dot" /> No investment or residency requirements—just documented ancestry.</li>
              <li><span className="dot" /> Grants full EU rights: live, work, study, and travel freely across 27 countries.</li>
              <li><span className="dot" /> A personal and powerful way to reclaim your heritage and identity.</li>
            </ul>
          </div>
        </div>

        <div className="descent-image-container">
          <img src={descentImage} alt="European ancestry map" />
          <div className="caption">EU citizenship through descent is your legal path home.</div>
        </div>
      </div>
    </section>
  );
}

export default CitizenshipByDescent;

// Import CSS
import "./Particles-dark.css";
import "./Particles.css";

const Background = () => {
  return (
    <>
      <div className="Particulas">
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <div className="animation-container">
          <div className="particle-dark particle-01"></div>
          <div className="particle-dark particle-02"></div>
          <div className="particle-dark particle-03"></div>
          <div className="particle-dark particle-04"></div>
        </div>
      </div>
    </>
  );
};

export default Background;

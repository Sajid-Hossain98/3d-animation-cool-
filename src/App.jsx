import { useRef } from "react";
import "./App.scss";
import me2 from "./assets/me-2.png";

function App() {
  const cardRef = useRef(null);
  const nameRef = useRef(null);
  const meRef = useRef(null);
  const contactRef = useRef(null);
  const descriptionRef = useRef(null);
  const experiencesRef = useRef(null);

  function handleMouseMove(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }

  function handleMouseEnter() {
    cardRef.current.style.transition = "none";
    nameRef.current.style.transform = "translateZ(150px)";
    meRef.current.style.transform = "translateZ(200px)";
    descriptionRef.current.style.transform = "translateZ(125px)";
    experiencesRef.current.style.transform = "translateZ(100px)";
    contactRef.current.style.transform = "translateZ(75px)";
  }

  function handleMouseLeave() {
    cardRef.current.style.transition = "all 0.5s ease";
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    nameRef.current.style.transform = "translateZ(0px)";
    meRef.current.style.transform = "translateZ(0px) rotateZ(0deg)";
    descriptionRef.current.style.transform = "translateZ(0px)";
    experiencesRef.current.style.transform = "translateZ(0px)";
    contactRef.current.style.transform = "translateZ(0px)";
  }

  return (
    <>
      <div className="app">
        <div
          className="container"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card" ref={cardRef}>
            <div className="myself">
              <div className="circle"></div>
              <img src={me2} alt="me" ref={meRef} />
            </div>
            <div className="info">
              <h1 ref={nameRef}>B M Sajid Hossain</h1>
              <p ref={descriptionRef}>
                I am a web developer, currently focused on frontend development.
              </p>

              <div className="experiences" ref={experiencesRef}>
                <span>HTML</span>
                <span>SASS</span>
                <span>JAVASCRIPT</span>
                <span>REACT</span>
              </div>
              <div className="contact" ref={contactRef}>
                <button>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

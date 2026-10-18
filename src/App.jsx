
import './App.css';

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <a className="logo" href="#home">Asma Sultani</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#introduction">Introduction</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="dots">•••</span>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <span className="eyebrow">
            CREATIVE DESIGNER & WEB DEVELOPER
          </span>

          <h1>
            Hello, I'm
            <br />
            Asma Sultani
          </h1>

          <p>
            I design beautiful things and build
            <br />
            web experiences. Passionate about
            <br />
            creativity, technology and growth.
          </p>

          <a className="hero-button" href="#introduction">
            Explore My Work <span>→</span>
          </a>
        </div>

        <div className="hero-image">
          <img src="/profile.jpg" alt="Asma Sultani" />
        </div>

        <div className="hero-note">
          Design
          <br />
          Build
          <br />
          Grow
        </div>

        <a className="scroll-note" href="#introduction">
          SCROLL DOWN ↓
        </a>
      </section>

      <section className="content-section intro-section" id="introduction">
        <div className="section-decoration">01</div>

        <div className="intro-image">
          <img src="/workspace.jpg" alt="Creative workspace" />
        </div>

        <div className="section-content">
          <span className="eyebrow">ABOUT ME</span>
          <h2>Introduction</h2>

          <p>
            Hello! I'm Asma Sultani, a graphic designer
            and aspiring web developer.
          </p>

          <p>
            I enjoy creating visual designs, building
            websites, and learning new technologies.
          </p>

          <p>
            My goal is to combine creativity and technology
            to create meaningful digital experiences.
          </p>
        </div>
      </section>

      <section className="content-section education-section" id="education">
        <div className="section-content">
          <span className="eyebrow">MY JOURNEY</span>
          <h2>Education</h2>

          <div className="education-item">
            <span className="number">01</span>
            <div>
              <h3>School Education</h3>
              <p>
                Continuing my academic journey through online education.
              </p>
            </div>
          </div>

          <div className="education-item">
            <span className="number">02</span>
            <div>
              <h3>Graphic Design</h3>
              <p>
                Learning and teaching graphic design, branding,
                and visual communication.
              </p>
            </div>
          </div>

          <div className="education-item">
            <span className="number">03</span>
            <div>
              <h3>Web Development</h3>
              <p>
                Learning HTML, CSS, JavaScript, and React.
              </p>
            </div>
          </div>
        </div>

        <div className="education-image">
          <img src="/workspace.jpg" alt="Books and creative learning" />
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-left">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Let's Connect</h2>

          <p>
            Have a project in mind or want to work together?
            <br />
            I'd love to hear from you.
          </p>

          <a className="contact-email" href="mailto:YOUR_EMAIL@example.com">
            ✉ Email Me <span>→</span>
          </a>
        </div>

        <div className="contact-right">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn <span>↗</span>
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub <span>↗</span>
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram <span>↗</span>
          </a>

          <p className="copyright">
            © 2026 Asma Sultani. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;

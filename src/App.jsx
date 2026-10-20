
import './App.css';

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a className="logo" href="#home">Asma Sultani</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#introduction">Introduction</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="dots">•••</span>
      </nav>

      {/* HERO */}
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

      {/* INTRODUCTION */}
      <section
        className="content-section intro-section"
        id="introduction"
      >
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

      {/* EDUCATION */}
      <section
        className="content-section education-section"
        id="education"
      >
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

      {/* MY PROJECTS */}
      <section className="projects-section" id="projects">

        <div className="projects-heading">
          <span className="eyebrow">MY CREATIVE WORK</span>

          <h2>
            Selected Projects<span>.</span>
          </h2>

          <p>
            A collection of projects where creativity meets technology.
            Explore my work and the ideas behind each project.
          </p>
        </div>

        <div className="projects-grid">

          {/* PROJECT 1: CLOCK */}
          <article className="project-card">
            <div className="project-number">01 / WEB PROJECT</div>

            <div className="project-preview clock-preview">
              <span className="clock-symbol">◷</span>
              <h3>TIMELESS</h3>
              <p>EVERY SECOND MATTERS</p>
            </div>

            <div className="project-info">
              <h3>Clock</h3>

              <p>
                A clock web project designed to present time
                through a clean and user-friendly interface.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/Asmasultani/clock"
                target="_blank"
                rel="noreferrer"
              >
                Explore on GitHub <span>↗</span>
              </a>
            </div>
          </article>

          {/* PROJECT 2: ZEYAFAT RESTAURANT */}
          <article className="project-card">
            <div className="project-number">02 / WEBSITE</div>

            <div className="project-preview zeyafat-preview">
              <span>ZEYAFAT</span>
              <h3>Made with Taste.</h3>
              <p>A PLACE FOR EVERY FLAVOR</p>
            </div>

            <div className="project-info">
              <h3>Zeyafat Restaurant</h3>

              <p>
                A restaurant website project focused on presenting
                food, restaurant information, and a welcoming experience.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>Tailwind CSS</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/Asmasultani/FIFA-final-project-2"
                target="_blank"
                rel="noreferrer"
              >
                Explore on GitHub <span>↗</span>
              </a>
            </div>
          </article>

          {/* PROJECT 3: SKYWINGS */}
          <article className="project-card">
            <div className="project-number">03 / REACT APP</div>

            <div className="project-preview skywings-preview">
              <span>✈ SKYWINGS</span>
              <h3>Travel Beyond.</h3>
              <p>YOUR JOURNEY STARTS HERE</p>
            </div>

            <div className="project-info">
              <h3>SkyWings</h3>

              <p>
                An airline web application project designed around
                flight search, bookings, destinations, and a dashboard.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/frozanhakimi/SkyWings-React"
                target="_blank"
                rel="noreferrer"
              >
                Explore on GitHub <span>↗</span>
              </a>
            </div>
          </article>

        </div>

        <a
          className="all-projects-link"
          href="https://github.com/Asmasultani"
          target="_blank"
          rel="noreferrer"
        >
          Explore My GitHub Profile ↗
        </a>

      </section>

      {/* CONTACT */}
      <footer className="contact-section" id="contact">
        <div className="contact-left">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Let's Connect</h2>

          <p>
            Have a project in mind or want to work together?
            <br />
            I'd love to hear from you.
          </p>

          <a
            className="contact-email"
            href="mailto:YOUR_EMAIL@example.com"
          >
            ✉ Email Me <span>→</span>
          </a>
        </div>

        <div className="contact-right">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>

          <a
            href="https://github.com/Asmasultani"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
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

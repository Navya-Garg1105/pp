import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <div className="hero">
        <span className="badge">AI Powered Resume Builder</span>

        <h1>
          Build a professional resume
          <span> in minutes.</span>
        </h1>

        <p>
          Create a clean and professional resume with the help of AI.
          Enter your information, improve your content and preview your
          resume instantly.
        </p>

        <Link to="/create" className="primaryButton">
          Create My Resume
        </Link>
      </div>

      <section className="features">
        <div className="featureCard">
          <h3>Easy to Use</h3>
          <p>Enter your details using our simple resume form.</p>
        </div>

        <div className="featureCard">
          <h3>AI Assistance</h3>
          <p>Improve your professional summary and project descriptions.</p>
        </div>

        <div className="featureCard">
          <h3>Live Preview</h3>
          <p>See your resume update instantly while you type.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
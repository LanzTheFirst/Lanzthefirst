import "./Portfolio.css";

const projects = [
  { name: "VirtuallyherVA", category: "Business Website", url: "https://virtuallyherVA.netlify.app" },
  { name: "InsurSite", category: "Company Landing Page", url: "https://insursite.netlify.app" },
  { name: "NFT Shoe Store", category: "Online Store", url: "https://nftshoe.netlify.app" },
  { name: "Movie Matcher", category: "Web Application", url: "https://moviematcherr.netlify.app" },
  { name: "Social Proof", category: "Marketing Page", url: "https://socialprooff.netlify.app" },
  { name: "Fyloa", category: "Small Business Site", url: "https://fyloa.netlify.app" },
  { name: "Trending Anime", category: "Content Platform", url: "https://trendinganime.netlify.app" },
  { name: "Personal Brand Site", category: "Portfolio", url: "https://lanzthefirst.netlify.app" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h2>Selected Work</h2>
        <p className="portfolio-intro">
          A collection of projects built with a focus on <strong>speed, ease of use,</strong> and <strong>professional design.</strong>
        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
              <div className="card-tag">{project.category}</div>
              <div className="card-content">
                <h3>{project.name}</h3>
                <p className="card-description">View live project <span>→</span></p>
              </div>
            </a>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Looking for something specific?</p>
          <a href="#contact" className="secondary-btn">Let's discuss your idea</a>
        </div>
      </div>
    </section>
  );
}
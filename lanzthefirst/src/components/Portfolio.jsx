import "./Portfolio.css";

const projects = [
  { name: "My personal website", url: "https://lanzthefirst.netlify.app" },
  { name: "VirtuallyherVA", url: "https://virtuallyherVA.netlify.app" },
  { name: "Movie Matcher", url: "https://moviematcherr.netlify.app" },
  { name: "NFT Shoe", url: "https://nftshoe.netlify.app" },
  { name: "Social Proof", url: "https://socialprooff.netlify.app" },
  { name: "InsurSite", url: "https://insursite.netlify.app" },
  { name: "Fyloa", url: "https://fyloa.netlify.app" },
  { name: "Trending Anime", url: "https://trendinganime.netlify.app" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>My Work</h2>

      <p className="portfolio-intro">
        Here are some websites and web interfaces I’ve built.
        Each project focuses on clean UI, responsiveness, and a smooth user experience.
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
            <div className="card-content">
              <h3>{project.name}</h3>
              <span className="visit">Visit Website →</span>
            </div>
          </a>
        ))}
      </div>

      <p className="portfolio-note">
        More projects available on request.
      </p>
    </section>
  );
}


export const metadata = {
  title: "Research Team & Faculty",
  description:
    "Meet the researchers, engineers, and students working on integrated circuit design, verification, and embedded systems at DICEL, DeKUT.",
};

type TeamMember = {
  name: string;
  role: string;
  category: "Laboratory Director" | "Postgraduate Researchers" | "Undergraduate Researchers";
  initials: string;
  image?: string;
  github?: string;
  linkedin?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Prof. Jean Ndichu, Ph.D.",
    role: "Lab Director & Principal Investigator",
    category: "Laboratory Director",
    initials: "JN",
  },
  {
    name: "Dr. Kelvin Mwai, Ph.D.",
    role: "Co-Director & Lead Systems Architect",
    category: "Laboratory Director",
    initials: "KM",
  },
  {
    name: "Eng. Brenda Wanjiku, M.Sc.",
    role: "Senior IC Verification Engineer",
    category: "Laboratory Director",
    initials: "BW",
  },
  {
    name: "Caleb Kiprop, B.Sc.",
    role: "Postgraduate Researcher (Analog & RF)",
    category: "Postgraduate Researchers",
    initials: "CK",
  },
  {
    name: "Faith Muthoni, B.Sc.",
    role: "Postgraduate Researcher (Digital Systems)",
    category: "Postgraduate Researchers",
    initials: "FM",
  },
  {
    name: "Dennis Ochieng",
    role: "Undergraduate Research Assistant",
    category: "Undergraduate Researchers",
    initials: "DO",
  },
  {
    name: "Grace Wambui",
    role: "Undergraduate Research Assistant",
    category: "Undergraduate Researchers",
    initials: "GW",
  },
];

export default function TeamPage() {
  return (
    <main id="main" tabIndex={-1} className="content-page team-page">
      <header className="page-hero">
        <div className="container page-hero-inner">
          <h1>Meet the team</h1>
        </div>
      </header>

      <section className="section team-section">
        <div className="container">
          {(["Laboratory Director", "Postgraduate Researchers", "Undergraduate Researchers"] as const).map((category) => (
            <div className="team-category" key={category}>
              <h2 className="team-category-title">{category}</h2>
              <div className="team-grid">
                {teamMembers.filter((person) => person.category === category).map((person) => (
                  <article className="team-card" key={person.name}>
                    <div className="team-avatar" role="img" aria-label={person.image ? `Portrait of ${person.name}` : `Profile placeholder for ${person.name}`}>
                      {person.image ? (
                        <img src={person.image} alt="" />
                      ) : (
                        <span className="avatar-monogram">{person.initials}</span>
                      )}
                    </div>
                    <div className="team-card-copy">
                      <div className="team-card-text">
                        <h3 className="team-name">{person.name}</h3>
                        <p className="team-role">{person.role}</p>
                      </div>
                      {(person.github || person.linkedin) && (
                        <div className="team-socials" aria-label={`${person.name} profile links`}>
                          {person.github && (
                            <a href={person.github} target="_blank" rel="noreferrer" aria-label={`${person.name} on GitHub`} title="GitHub">
                              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
                            </a>
                          )}
                          {person.linkedin && (
                            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label={`${person.name} on LinkedIn`} title="LinkedIn">
                              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.34 7.9A2.45 2.45 0 1 0 5.34 3a2.45 2.45 0 0 0 0 4.9ZM3.2 21h4.28V9.3H3.2V21ZM9.08 9.3h4.1v1.6h.06c.57-1.08 1.96-2.22 4.04-2.22 4.32 0 5.12 2.84 5.12 6.54V21h-4.28v-5.13c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21H10.18V9.3H9.08Z"/></svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

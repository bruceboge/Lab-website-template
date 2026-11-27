import Image from "next/image";

export const metadata = {
  title: "Research Team & Faculty",
  description:
    "Meet the researchers, engineers, and students working on integrated circuit design, verification, and embedded systems at DeICE, DeKUT.",
};

type TeamMember = {
  name: string;
  role: string;
  category: "Laboratory Director" | "Postgraduate Researchers" | "Undergraduate Researchers";
  initials: string;
  image?: string;
  github: string;
  linkedin: string;
};

const LAB_GITHUB_URL = "https://github.com/dekut-dicel";
const DEKUT_LINKEDIN_URL =
  "https://www.linkedin.com/school/dedan-kimathi-university-of-technology/";

const teamMembers: TeamMember[] = [
  {
    name: "Prof. Jean Ndichu, Ph.D.",
    role: "Lab Director & Principal Investigator",
    category: "Laboratory Director",
    initials: "JN",
    github: LAB_GITHUB_URL,
    linkedin: DEKUT_LINKEDIN_URL,
  },
  {
    name: "Dr. Kelvin Mwai, Ph.D.",
    role: "Co-Director & Lead Systems Architect",
    category: "Laboratory Director",
    initials: "KM",
    github: LAB_GITHUB_URL,
    linkedin: DEKUT_LINKEDIN_URL,
  },
  {
    name: "Eng. Brenda Wanjiku, M.Sc.",
    role: "Senior IC Verification Engineer",
    category: "Laboratory Director",
    initials: "BW",
    github: LAB_GITHUB_URL,
    linkedin: DEKUT_LINKEDIN_URL,
  },
  {
    name: "Caleb Kiprop, B.Sc.",
    role: "Postgraduate Researcher · Analog & RF",
    category: "Postgraduate Researchers",
    initials: "CK",
    github: LAB_GITHUB_URL,
    linkedin: DEKUT_LINKEDIN_URL,
  },
  {
    name: "Faith Muthoni, B.Sc.",
    role: "Postgraduate Researcher · Digital Systems",
    category: "Postgraduate Researchers",
    initials: "FM",
    github: LAB_GITHUB_URL,
    linkedin: DEKUT_LINKEDIN_URL,
  },
  {
    name: "Dennis Ochieng",
    role: "Undergraduate Research Assistant",
    category: "Undergraduate Researchers",
    initials: "DO",
    github: LAB_GITHUB_URL,
    linkedin: DEKUT_LINKEDIN_URL,
  },
  {
    name: "Grace Wambui",
    role: "Undergraduate Research Assistant",
    category: "Undergraduate Researchers",
    initials: "GW",
    github: LAB_GITHUB_URL,
    linkedin: DEKUT_LINKEDIN_URL,
  },
];

export default function TeamPage() {
  return (
    <main id="main" tabIndex={-1} className="content-page team-page">
      <header className="team-hero">
        <div className="container">
          <h1>Meet the team</h1>
        </div>
      </header>

      <section className="team-section" aria-label="Laboratory team directory">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((person) => (
              <article
                className="team-card"
                key={person.name}
                tabIndex={0}
                aria-label={`${person.name} — ${person.role}`}
              >
                <div className="team-media">
                  <div className="team-avatar">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={`Portrait of ${person.name}`}
                        fill
                        sizes="(max-width: 760px) 50vw, 25vw"
                        unoptimized
                      />
                    ) : (
                      <span className="avatar-monogram" aria-hidden="true">
                        {person.initials}
                      </span>
                    )}
                  </div>
                  <div className="team-role-overlay" aria-hidden="true">
                    <p className="team-role-title">{person.role}</p>
                  </div>
                </div>

                <div className="team-card-bar">
                  <h2 className="team-name" title={person.name}>
                    {person.name}
                  </h2>
                  <div
                    className="team-socials"
                    aria-label={`${person.name} profile links`}
                  >
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} on GitHub`}
                      title="GitHub"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                      </svg>
                    </a>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      title="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

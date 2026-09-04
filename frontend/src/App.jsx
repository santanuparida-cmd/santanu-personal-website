import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState(null);
  const [researchInterests, setResearchInterests] = useState([]);
  const [researchProjects, setResearchProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [resources, setResources] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [cvDocuments, setCvDocuments] = useState([]);
  const [academicLinks, setAcademicLinks] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [teachingCourses, setTeachingCourses] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const API_BASE_URL = "https://santanu-personal-backend.onrender.com";

  useEffect(() => {
    // Profile
    fetch(`${API_BASE_URL}/api/profile/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setProfile(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error loading profile:", error);
      });

    // Research Interests
    fetch(`${API_BASE_URL}/api/research-interests/`)
      .then((response) => response.json())
      .then((data) => {
        setResearchInterests(data);
      })
      .catch((error) => {
        console.error("Error loading research interests:", error);
      });

    // Research Projects
    fetch(`${API_BASE_URL}/api/research-projects/`)
      .then((response) => response.json())
      .then((data) => {
        setResearchProjects(data);
      })
      .catch((error) => {
        console.error("Error loading research projects:", error);
      });

    // Publications
    fetch(`${API_BASE_URL}/api/publications/`)
      .then((response) => response.json())
      .then((data) => {
        setPublications(data);
      })
  .catch((error) => {
    console.error("Error loading publications:", error);
  });
    // Teaching Resources
    fetch(`${API_BASE_URL}/api/teaching-resources/`)
      .then((response) => response.json())
      .then((data) => {
        

        setResources(data);
      })
      .catch((error) => {
        console.error("Error loading resources:", error);
      });

    // Gallery
    fetch(`${API_BASE_URL}/api/gallery/`)
      .then((response) => response.json())
      .then((data) => {
      setGalleryItems(Array.isArray(data) ? data : []);
          })
      .catch((error) => {
        console.error("Error loading gallery:", error);
      });

    // CV
    fetch(`${API_BASE_URL}/api/cv/`)
      .then((response) => response.json())
      .then((data) => {
        setCvDocuments(data);
      })
      .catch((error) => {
        console.error("Error loading CV:", error);
      });

    // Academic Links
    fetch(`${API_BASE_URL}/api/academic-links/`)
      .then((response) => response.json())
      .then((data) => {
        setAcademicLinks(data);
      })
      .catch((error) => {
        console.error("Error loading academic links:", error);
      });

    // Achievements
    fetch(`${API_BASE_URL}/api/achievements/`)
      .then((response) => response.json())
      .then((data) => {
        setAchievements(data);
      })
      .catch((error) => {
        console.error("Error loading achievements:", error);
      });

    // Teaching Courses
    fetch(`${API_BASE_URL}/api/teaching/`)
      .then((response) => response.json())
      .then((data) => {
        setTeachingCourses(data);
      })
      .catch((error) => {
        console.error("Error loading teaching courses:", error);
      });

  }, []);
  if (!profile) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="site">
      {/* NAVIGATION */}
  <header className="navbar">
  <div className="brand">
    <div className="brand-name">{profile.name}</div>
    <div className="brand-subtitle">{profile.designation}</div>
  </div>

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
    aria-expanded={menuOpen}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav className={menuOpen ? "nav-menu nav-menu-open" : "nav-menu"}>
    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <div className="nav-dropdown">
      <button className="nav-dropdown-button">
        Research
      </button>

      <div className="nav-dropdown-menu">
        <a
          href="#research-interests"
          onClick={() => setMenuOpen(false)}
        >
          Research Interests
        </a>

        {researchProjects.length > 0 && (
  <a
    href="#projects"
    onClick={() => setMenuOpen(false)}
  >
    Projects
  </a>
)}
      </div>
    </div>

    <a href="#publications" onClick={() => setMenuOpen(false)}>
      Publications
    </a>

    <a href="#teaching" onClick={() => setMenuOpen(false)}>
      Teaching
    </a>

    <a href="#resources" onClick={() => setMenuOpen(false)}>
      Resources
    </a>

    <a href="#achievements" onClick={() => setMenuOpen(false)}>
      Achievements
    </a>

    {galleryItems.length > 0 && (
  <a
    href="#gallery"
    onClick={() => setMenuOpen(false)}
  >
    Gallery
  </a>
)}

<a href="#contact" onClick={() => setMenuOpen(false)}>
  Contact
</a>

  </nav>
</header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="eyebrow">
              Academic Profile
            </p>

            <h1>{profile.name}</h1>

            <h2>{profile.designation}</h2>

            <p className="institution">
              {profile.institution}
            </p>

            {profile.short_bio && (
              <p className="intro">
                {profile.short_bio}
                </p>
                    )}

            <div className="hero-buttons">
              <a
                className="primary-btn"
                href="#research-interests"
              >
                Explore Research
              </a>

              <a
                className="secondary-btn"
                href="#publications"
              >
                View Publications
              </a>

              {cvDocuments
                .filter((cv) => cv.active)
                .slice(0, 1)
                .map((cv) => (
                  <a
                    key={cv.id}
                    className="secondary-btn"
                    href={cv.file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                ))}
            </div>

            {academicLinks.length > 0 && (
              <div className="academic-links">
                {academicLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="hero-photo-wrapper">
            {profile.profile_photo && (
              <img
                src={profile.profile_photo}
                alt={profile.name}
                className="hero-photo"
              />
            )}
          </div>
        </section>

        {/* ABOUT */}
<section
  className="section about-section"
  id="about"
>
  <div className="about-grid">

    <div className="about-main">
      <p className="section-label">
        About
      </p>

      <h2 className="section-title">
        Academic Profile
      </h2>

      {profile.full_bio ? (
        <div className="about-content">
          {profile.full_bio
            .split("\n")
            .filter((paragraph) => paragraph.trim() !== "")
            .map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
        </div>
      ) : (
        <p className="section-text">
          Academic profile information will be updated here.
        </p>
      )}
    </div>

    <aside className="about-focus">
      <p className="about-focus-label">
        Academic Focus
      </p>

      <h3>
        Research & Teaching
      </h3>

      <div className="focus-list">
        <div className="focus-item">
          <span>01</span>
          <p>Materials Physics</p>
        </div>

        <div className="focus-item">
          <span>02</span>
          <p>Semiconductor Materials</p>
        </div>

        <div className="focus-item">
          <span>03</span>
          <p>Lead-Free Perovskites</p>
        </div>

        <div className="focus-item">
          <span>04</span>
          <p>Energy Materials</p>
        </div>
      </div>
    </aside>

  </div>
</section>

        {/* RESEARCH INTERESTS */}
        <section
          className="section soft-section"
          id="research-interests"
        >
          <p className="section-label">
            Research
          </p>

          <h2 className="section-title">
            Research Interests
          </h2>

          <div className="cards">
            {researchInterests.map((interest) => (
              <div
                className="card"
                key={interest.id}
              >
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </section>

{/* RESEARCH PROJECTS */}
{researchProjects.length > 0 && (
  <section
    className="section"
    id="projects"
  >
    <p className="section-label">
      Research
    </p>

    <h2 className="section-title">
      Research Projects
    </h2>

    <div className="cards">
      {researchProjects.map((project) => (
        <div
          className="card"
          key={project.id}
        >
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          {project.funding_agency && (
            <p>
              <strong>
                Funding Agency:
              </strong>{" "}
              {project.funding_agency}
            </p>
          )}

          {project.grant_amount && (
            <p>
              <strong>
                Grant Amount:
              </strong>{" "}
              ₹
              {Number(
                project.grant_amount
              ).toLocaleString("en-IN")}
            </p>
          )}

          <p>
            <strong>Status:</strong>{" "}
            {project.status === "ongoing"
              ? "Ongoing"
              : "Completed"}
          </p>

          {project.project_url && (
            <p>
              <a
                href={project.project_url}
                target="_blank"
                rel="noreferrer"
              >
                Project Details →
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
)}

        {/* PUBLICATIONS */}
        <section
          className="section soft-section"
          id="publications"
        >
          <p className="section-label">
            Publications
          </p>

          <h2 className="section-title">
            Publications
          </h2>

          {publications.length > 0 ? (
            <div className="publication-list">
              {Object.entries(
                publications.reduce(
                  (groups, publication) => {
                    const year = publication.year;

                    if (!groups[year]) {
                      groups[year] = [];
                    }

                    groups[year].push(publication);
                    return groups;
                  },
                  {}
                )
              )
                .sort(
                  ([yearA], [yearB]) =>
                    Number(yearB) - Number(yearA)
                )
                .map(([year, yearPublications]) => (
                  <div
                    className="publication-year-group"
                    key={year}
                  >
                    <h3 className="publication-year-heading">
                      {year}
                    </h3>

                    {yearPublications.map((publication) => (
                      <article
                        className="publication-item"
                        key={publication.id}
                      >
                        <div className="publication-content">
                          <div className="publication-topline">
                            <span className="publication-type">
                              {publication.publication_type === "journal"
                                ? "Journal Article"
                                : publication.publication_type === "conference"
                                ? "Conference Paper"
                                : publication.publication_type === "book"
                                ? "Book"
                                : publication.publication_type === "chapter"
                                ? "Book Chapter"
                                : "Other"}
                            </span>

                            {publication.featured && (
                              <span className="featured-badge">
                                Featured
                              </span>
                            )}
                          </div>

                          <h3>{publication.title}</h3>

                          <p className="publication-authors">
                            {publication.authors}
                          </p>

                          <p className="publication-journal">
                            {publication.journal}

                            {publication.volume &&
                              `, Vol. ${publication.volume}`}

                            {publication.issue &&
                              `, Issue ${publication.issue}`}

                            {publication.pages &&
                              `, pp. ${publication.pages}`}
                          </p>

                          <div className="publication-links">
                            {publication.doi && (
                              <a
                                href={
                                  publication.doi.startsWith("http")
                                    ? publication.doi
                                    : `https://doi.org/${publication.doi}`
                                }
                                target="_blank"
                                rel="noreferrer"
                              >
                                DOI
                              </a>
                            )}

                            {publication.url && (
                              <a
                                href={publication.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Publisher
                              </a>
                            )}

                            {publication.pdf && (
                              <a
                                href={publication.pdf}
                                target="_blank"
                                rel="noreferrer"
                              >
                                PDF
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
            </div>
          ) : (
            <p className="section-text">
              Publication information will be updated here.
            </p>
          )}
        </section>

{/* TEACHING */}
<section
  className="section"
  id="teaching"
>
  <p className="section-label">
    Teaching
  </p>

  <h2 className="section-title">
    Teaching
  </h2>

  {teachingCourses.length > 0 ? (
    <div className="teaching-table-wrapper">
      <table className="teaching-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Level</th>
            <th>Semester</th>
          </tr>
        </thead>

        <tbody>
          {teachingCourses.map((course) => (
            <tr key={course.id}>
              <td className="teaching-course-title">
                {course.title}
              </td>

              <td>
                <span className="teaching-level">
                  {course.level === "ug"
                    ? "Undergraduate"
                    : course.level === "pg"
                    ? "Postgraduate"
                    : "Other"}
                </span>
              </td>

              <td>
                {course.semester || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="section-text">
      Teaching information will be updated here.
    </p>
  )}
</section>

        {/* RESOURCES */}
<section
  className="section soft-section"
  id="resources"
>
  <p className="section-label">
    Resources
  </p>

  <h2 className="section-title">
    Academic Resources
  </h2>

  {resources.length > 0 ? (
    <div className="resource-table-wrapper">
      <table className="resource-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Resource Title</th>
            <th>Course</th>
            <th>Semester</th>
            <th>Access</th>
          </tr>
        </thead>

        <tbody>
          {resources.map((resource) => (
            <tr key={resource.id}>
              <td>
                <span className="resource-category">
                  {resource.category === "notes"
                    ? "Lecture Notes"
                    : resource.category === "slides"
                    ? "Presentation"
                    : resource.category === "question"
                    ? "Question Bank"
                    : resource.category === "practical"
                    ? "Practical"
                    : "Other"}
                </span>
              </td>

              <td className="resource-title-cell">
                <strong>{resource.title}</strong>

                {resource.description && (
                  <span className="resource-table-description">
                    {resource.description}
                  </span>
                )}
              </td>

              <td>
                {resource.course || "—"}
              </td>

              <td>
                {resource.semester || "—"}
              </td>

              <td>
                <div className="resource-table-links">
                  {resource.file && (
                    <a
                      href={resource.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View / Download
                    </a>
                  )}

                  {resource.external_url && (
                    <a
                      href={resource.external_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      External Link
                    </a>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="section-text">
      Academic resources will be added here.
    </p>
  )}
</section>
          {/* ACHIEVEMENTS */}
<section
  className="section"
  id="achievements"
>
  <p className="section-label">
    Achievements
  </p>

  <h2 className="section-title">
    Academic & Professional Achievements
  </h2>

  {achievements.length > 0 ? (
    <div className="achievement-grid">
      {achievements
        .sort((a, b) => (b.year || 0) - (a.year || 0))
        .map((achievement) => (
          <article
            className="achievement-card"
            key={achievement.id}
          >
            {achievement.image && (
              <div className="achievement-image-wrapper">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                />
              </div>
            )}

            <div className="achievement-content">
              {achievement.year && (
                <span className="achievement-year">
                  {achievement.year}
                </span>
              )}

              {achievement.featured && (
                <span className="featured-badge">
                  Featured
                </span>
              )}

              <h3>{achievement.title}</h3>

              {achievement.description && (
                <p>{achievement.description}</p>
              )}
            </div>
          </article>
        ))}
    </div>
  ) : (
    <p className="section-text">
      Achievement information will be updated here.
    </p>
  )}
</section>
  
{/* GALLERY */}
{galleryItems.length > 0 && (
  <section
    className="section"
    id="gallery"
  >
    <p className="section-label">
      Gallery
    </p>
    <h2 className="section-title">
      Academic & Professional Gallery
    </h2>

    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <article
          className="gallery-card"
          key={item.id}
        >
          <div className="gallery-image-wrapper">
            <img
              src={item.image}
              alt={item.title}
              className="gallery-image"
            />
          </div>

          <div className="gallery-content">
            <h3>{item.title}</h3>

            {item.caption && (
              <p>{item.caption}</p>
            )}

            <div className="gallery-meta">
              {item.category && (
                <span>{item.category}</span>
              )}

              {item.event_date && (
                <span>{item.event_date}</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
)}

        {/* CONTACT */}
<section className="contact-section" id="contact">
  <p className="section-label">Contact</p>

  <h2 className="section-title">
    Get in Touch
  </h2>

  <div className="contact-grid">
    <div className="contact-details">
      <h3>{profile.name}</h3>

      <p>{profile.designation}</p>
      <p>{profile.institution}</p>

      {profile.address && (
        <p>{profile.address}</p>
      )}
    </div>

    <div className="contact-links">
      {profile.email && (
        <div className="contact-item">
          <span>Email</span>
          <a href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      )}

      {profile.phone && (
        <div className="contact-item">
          <span>Phone</span>
          <a href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
        </div>
      )}

      {academicLinks.length > 0 && (
        <div className="contact-item">
          <span>Academic Profiles</span>

          <div className="contact-academic-links">
            {academicLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
</section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()}{" "}
          {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
export default App;
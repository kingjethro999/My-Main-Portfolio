import React from "react";
import { resume, socialHandles, skills, projects } from "../../data";
import { profile1 } from "../../assets";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./resume.css";

const getRandomSkillLogos = () => {
  // Flatten all skills and pick 5 random unique ones
  const allSkills = skills.flatMap(cat => cat.data);
  const shuffled = allSkills.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5).map(skill => skill.logo);
};

const Resume = () => {
  const { profile, keyProjects, techStack, experience, education, certifications } = resume;
  const randomSkillLogos = getRandomSkillLogos();
  const navigate = useNavigate();

  const handleProjectClick = (index) => {
    navigate("/projects", { state: { openProject: index } });
  };

  return (
    <section id="resume" className="resume-dashboard-section">
      <div className="resume-dashboard">
        {/* Left: Profile Picture and Download */}
        <div className="resume-profile-card card">
          <img src={profile1} alt={profile.name} className="resume-profile-img" />
          <h3 style={{ margin: 0 }}>{profile.name}</h3>
          <p style={{ fontWeight: 600, color: 'var(--color-primary)', margin: 0 }}>{profile.title}</p>
          <p className="text__muted" style={{ margin: 0 }}>{profile.location}</p>
          <a
            href="/resume.pdf"
            download
            className="resume-download-btn"
          >
            Download My CV
          </a>
          {/* Social Handles */}
          <div className="resume-socials" style={{ margin: '1.5rem 0 0.5rem 0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {socialHandles.slice(0, 5).map((handle, i) => (
              <a key={i} href={handle.link || '#'} target="_blank" rel="noopener noreferrer" title={handle.name} style={{ fontSize: 22, color: 'var(--color-muted)' }}>
                {handle.icon}
              </a>
            ))}
          </div>
          {/* Skill Logos */}
          <div className="flex__center stacks" style={{ margin: '1rem 0 0 0', gap: 10 }}>
            {randomSkillLogos.map((logo, i) => (
              <div className="stack" key={i} style={{ width: 30, height: 30, padding: 5, background: 'rgba(var(--color-primary-rgb), 0.3)', borderRadius: 8 }}>
                <img src={logo} alt="skill" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          {/* Project Images Grid */}
          <div className="resume-projects-grid" style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {projects.slice(0, 6).map((proj, idx) => (
              <div key={idx} className="resume-project-thumb" style={{ cursor: 'pointer', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }} onClick={() => handleProjectClick(idx)}>
                <img src={proj.image} alt={proj.title} style={{ width: '100%', height: 50, objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Resume Info (scrollable) */}
        <div className="resume-info-card card resume-info-scrollable">
          <h2 className="shine" style={{ marginBottom: '1.5rem', marginLeft: '1rem' }}>Resume</h2>
          {/* Summary */}
          <div style={{ marginBottom: '2rem', background: 'rgba(255,255,255,0.02)', padding: '1.2rem 1rem', borderRadius: 10 }}>
            <h3 style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)' }}>Profile Summary</h3>
            <p style={{ margin: '0.5rem 0 0 0', color: '#ccc' }}>{profile.summary}</p>
          </div>
          {/* Contact Links */}
          <div style={{ marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.2rem', alignItems: 'center' }}>
            <a href={`mailto:${profile.email}`} className="resume-link-btn">Email</a>
            <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="resume-link-btn">Portfolio</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="resume-link-btn">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="resume-link-btn">GitHub</a>
          </div>
          {/* Key Projects */}
          <div className="resume-section">
            <h3 className="resume-section-title">Key Projects</h3>
            {keyProjects.map((proj, i) => (
              <div key={i} className="resume-project-card">
                <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{proj.title} <span className="text__muted" style={{ fontWeight: 400 }}>({proj.role})</span></div>
                <div style={{ color: '#bbb', fontSize: '0.98em', marginBottom: 2 }}>{proj.tech}</div>
                <div style={{ margin: '0.5rem 0 0.5rem 0' }}>{proj.outcome}</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {proj.links && proj.links.map((l, j) => (
                    <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className="resume-link-btn" style={{ fontSize: '0.95em' }}>{l.text}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Tech Stack */}
          <div className="resume-section">
            <h3 className="resume-section-title">Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '1rem' }}>
              {Object.entries(techStack).map(([cat, items], i) => (
                <div key={i} style={{ minWidth: 180 }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: 4 }}>{cat}</div>
                  <ul style={{ paddingLeft: 18, margin: 0, color: '#ccc', fontSize: '0.98em' }}>
                    {items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="resume-exp-card">
                <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{exp.title} <span className="text__muted" style={{ fontWeight: 400 }}>@ {exp.company}</span></div>
                <div style={{ color: '#bbb', fontSize: '0.98em', marginBottom: 2 }}>{exp.time} &middot; {exp.employment}</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: '#ccc', fontSize: '0.98em' }}>
                  {exp.results.map((r, j) => <li key={j}>{r}</li>)}
                </ul>
              </div>
            ))}
          </div>
          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="resume-edu-card">
                <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{edu.school} <span className="text__muted" style={{ fontWeight: 400 }}>({edu.year})</span></div>
                <div style={{ color: '#bbb', fontSize: '0.98em' }}>{edu.degree} <span style={{ color: '#ccc' }}>{edu.focus}</span></div>
              </div>
            ))}
          </div>
          {/* Certifications */}
          <div className="resume-section">
            <h3 className="resume-section-title">Certifications</h3>
            <ul style={{ paddingLeft: 20, color: '#ccc', fontSize: '0.98em' }}>
              {certifications.map((cert, i) => (
                <li key={i}>
                  <strong>{cert.cert}</strong> <span className="text__muted">({cert.year})</span> - {cert.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <RouterLink to="/" className="floating-home-btn" title="Return Home">
        &#8962;
      </RouterLink>
    </section>
  );
};

export default Resume; 
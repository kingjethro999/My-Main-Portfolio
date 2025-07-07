import React from "react";
import { resume } from "../../data";
import { profile1 } from "../../assets";
import { Link as RouterLink } from "react-router-dom";
import "./resume.css";

const Resume = () => {
  const { profile, keyProjects, techStack, experience, education, certifications } = resume;
  return (
    <section id="resume" style={{ minHeight: '100vh', background: 'var(--color-ui-1)', position: 'relative' }}>
      <div className="section__wrapper resume-dashboard">
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
          <div style={{ marginTop: '1.5rem', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}>
            <iframe
              src="/resume.pdf"
              title="Resume PDF"
              width="100%"
              height="180px"
              style={{ border: 'none', display: 'block', borderRadius: 8 }}
            />
          </div>
        </div>
        {/* Right: Resume Info */}
        <div className="resume-info-card card">
          <h2 className="shine" style={{ marginBottom: '1.5rem' }}>Resume</h2>
          <p style={{ margin: '0 0 1.5rem 0' }}>{profile.summary}</p>
          <div style={{ marginBottom: '2rem' }}>
            <a href={`mailto:${profile.email}`} style={{ marginRight: 16 }}>Email</a>
            <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>Portfolio</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <h3>Key Projects</h3>
          <ul style={{ paddingLeft: 20, marginBottom: '2rem' }}>
            {keyProjects.map((proj, i) => (
              <li key={i} style={{ marginBottom: '1.2rem' }}>
                <strong>{proj.title}</strong> <span className="text__muted">({proj.role})</span><br />
                <span style={{ color: '#bbb' }}>{proj.tech}</span><br />
                <span>{proj.outcome}</span><br />
                {proj.links && proj.links.map((l, j) => (
                  <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: 12 }}>{l.text}</a>
                ))}
              </li>
            ))}
          </ul>
          <h3>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
            {Object.entries(techStack).map(([cat, items], i) => (
              <div key={i} style={{ minWidth: 180 }}>
                <strong>{cat}</strong>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <h3>Experience</h3>
          <ul style={{ paddingLeft: 20, marginBottom: '2rem' }}>
            {experience.map((exp, i) => (
              <li key={i} style={{ marginBottom: '1.2rem' }}>
                <strong>{exp.title}</strong> <span className="text__muted">@ {exp.company}</span><br />
                <span style={{ color: '#bbb' }}>{exp.time} &middot; {exp.employment}</span>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {exp.results.map((r, j) => <li key={j}>{r}</li>)}
                </ul>
              </li>
            ))}
          </ul>
          <h3>Education</h3>
          <ul style={{ paddingLeft: 20, marginBottom: '2rem' }}>
            {education.map((edu, i) => (
              <li key={i}>
                <strong>{edu.school}</strong> <span className="text__muted">({edu.year})</span><br />
                {edu.degree} <span style={{ color: '#bbb' }}>{edu.focus}</span>
              </li>
            ))}
          </ul>
          <h3>Certifications</h3>
          <ul style={{ paddingLeft: 20 }}>
            {certifications.map((cert, i) => (
              <li key={i}>
                <strong>{cert.cert}</strong> <span className="text__muted">({cert.year})</span> - {cert.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <RouterLink to="/" className="floating-home-btn" title="Return Home">
        &#8962;
      </RouterLink>
    </section>
  );
};

export default Resume; 
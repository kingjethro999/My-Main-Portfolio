import { useState } from "react";
import { projects } from "../../data";
import ProjectCard from "../../ui/ProjectCard";
import "./Projects.css";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="all-projects">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">All Projects</h2>
        </div>
        <div className="projects__container">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelected(project)} style={{ cursor: 'pointer' }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <Link to="/" className="floating-home-btn" style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: '#222',
          color: '#fff',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
          textDecoration: 'none',
        }} title="Return Home">
          &#8962;
        </Link>
        {selected && (
          <div className="project-modal-overlay" onClick={() => setSelected(null)}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <ProjectCard
                {...selected}
                isModal={true}
                demoLink={selected.demoLink}
                onClose={() => setSelected(null)}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects; 
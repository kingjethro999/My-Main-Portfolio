import "./ProjectCard.css"

const ProjectCard = ({ title, category, image, description, stacks, demoLink, onClose, isModal }) => {
    return (
        <div className={`card project__card${isModal ? ' project__card-modal' : ''}`} style={isModal ? { maxWidth: 700, width: '90vw' } : {}}>
            <div className={isModal ? "project__card-top modal-image" : "project__card-top"}>
                <div className={isModal ? "picture" : "picture"} style={isModal ? { height: 300 } : {}}>
                    <img src={image} alt={title} style={isModal ? { objectFit: 'cover', width: '100%', height: '100%' } : {}} />
                </div>
            </div>
            <div className="project__card-bottom">
                <div className="flex project__info">
                    <div className="img">
                        <img src={image} alt={title} />
                    </div>
                    <div>
                        {isModal ? <h2 className="title">{title}</h2> : <h3 className="title">{title}</h3>}
                        <p className="text__muted category">{category}</p>
                    </div>
                </div>
                <p className="text__muted description" style={isModal ? { WebkitLineClamp: 'unset', lineClamp: 'unset', display: 'block' } : {}}>{description}</p>
                <div className="flex__center stacks">
                    {stacks.map((stack, index) => (
                        <div className="stack" key={index}>
                            <img src={stack.logo} alt={stack.name || ''} title={stack.name || ''} />
                        </div>
                    ))}
                </div>
                {isModal && demoLink && (
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="view-more-btn" style={{ marginTop: '1rem' }}>
                        View Demo
                    </a>
                )}
                {isModal && (
                    <button className="view-more-btn" style={{ marginTop: '1rem', background: '#fff', color: '#222', border: '1px solid #222' }} onClick={onClose}>Close</button>
                )}
            </div>
        </div>
    )
}

export default ProjectCard

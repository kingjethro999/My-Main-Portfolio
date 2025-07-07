import { socialHandles } from "../../data"
import "./SocialHandles.css"

const SocialHandles = () => {
  return (
    <div className="social__handles__container">
      {
        socialHandles.map((media, index) =>(
            <a href={media.link} target="_blank" rel="noopener noreferrer" className="icon__container social__handle" key={index}>
                <span className="flex__center tooltip">
                    {media.icon} {media.name}
                </span>
              {media.icon}
            </a>
        ))
      }
    </div>
  )
}

export default SocialHandles

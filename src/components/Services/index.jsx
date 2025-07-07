import "./Services.css"
import {services} from "../../data"
import ServiceCard from "../../ui/ServiceCard"

const Services = () => {
  return (
    <section id="services">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Services</h2>
        </div>
        <div className="services__group">
         {services.map(({title, description, icon, color, colorRGB},index)=>(
          <ServiceCard
          title={title}
          description={description}
          icon={icon}
          color={color}
          colorRGB={colorRGB}
          key={index} />
         ))}
        </div>
      </div>
    </section>
  )
}

export default Services

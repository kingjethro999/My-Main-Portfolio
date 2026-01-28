import { useEffect, useState } from 'react'
import "./Facts.css"
import Odometer from 'react-odometerjs'
import "odometer/themes/odometer-theme-default.css"

const Facts = () => {
    const [experience, setExperience] = useState(0);
    const [projets, setProjects] = useState(0);
    const [clients, setClients] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExperience(5);
            setProjects(35);
            setClients(30)
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [])
    return (
        <div className='flex__center fact__container'>
            <div className="fact_item">
                <div className="flex__center">
                    <Odometer value={experience} className='title' />
                    <h3 className="title">+</h3>
                </div>
                <p className="label">Years of Experience</p>
            </div>

            <div className="fact_item">
                <div className="flex__center">
                    <Odometer value={projets} className='title' />
                    <h3 className="title">+</h3>
                </div>
                <p className="label">Completed Projects</p>
            </div>

            <div className="fact_item">
                <div className="flex__center">
                    <Odometer value={clients} className='title' />
                    <h3 className="title">+</h3>
                </div>
                <p className="label">Satisfied Clients</p>
            </div>
        </div>
    )
}

export default Facts

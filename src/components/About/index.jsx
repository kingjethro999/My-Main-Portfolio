import "./About.css"
import Hole from "../../ui/Hole"
import { skills } from "../../data"
import CardUi from "../../assets/CardUi"
import { useEffect, useState } from "react"

// Helper to flatten all skills into one array
const getAllSkills = () => skills.flatMap(s => s.data)

function getRandomSkills(allSkills, count = 10) {
  const shuffled = [...allSkills].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const About = () => {
  const [displayedSkills, setDisplayedSkills] = useState(() => getRandomSkills(getAllSkills(), 10))

  useEffect(() => {
    const allSkills = getAllSkills()
    const interval = setInterval(() => {
      setDisplayedSkills(getRandomSkills(allSkills, 10))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  // Split into 3-4-3
  const row1 = displayedSkills.slice(0, 3)
  const row2 = displayedSkills.slice(3, 7)
  const row3 = displayedSkills.slice(7, 10)

  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            <div className="flex skill__group">
              {row1.map((list, key) => (
                <div className="blur__overlay flex__center skill" key={key}>
                  <div className="skill__logo">
                    <img src={list.logo} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex skill__group">
              {row2.map((list, key) => (
                <div className="blur__overlay flex__center skill" key={key}>
                  <div className="skill__logo">
                    <img src={list.logo} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex skill__group">
              {row3.map((list, key) => (
                <div className="blur__overlay flex__center skill" key={key}>
                  <div className="skill__logo">
                    <img src={list.logo} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">King Jethro</span>
          </h1>
          <p className="text__muted description">
            Experienced Full-Stack Mobile and Web Developer with a passion for building dynamic, user-friendly, and responsive applications. Proficient in JavaScript, PHP, and Python, I have hands-on expertise with React.js, React Native (Expo), Laravel, Django, and Tailwind CSS, ensuring seamless cross-platform development. My deep understanding of frontend, backend, and database management (SQL, RDBMS) allows me to create scalable, high-performance solutions.
            I excel in transforming innovative ideas into intuitive user experiences through clean, efficient, and maintainable code. With strong problem-solving skills and attention to detail, I consistently deliver visually appealing, high-quality projects on time, whether it's an AI-driven chatbot, an interactive learning platform, or a real-time web application.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

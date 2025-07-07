import "./SkillCard.css"

const SkillCard = ({title,data}) => {
  return (
    <div className="card skill__card">
      <h3 className="title">
        <span className="g-text">{title}</span>
      </h3>
      <div className="skill__content">
        {data.map((list,index) => (
          <article className="flex skill__details" key={index}>
            <div className="skill__logo">
              <img src={list.logo} alt="" />
            </div>
            <div>
              <h4 className="skill__name">{list.skill}</h4>
              <small className="text-__muted skill__level">{list.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default SkillCard

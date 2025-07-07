import "./Header.css"
import HeaderTitle from "../../ui/HeaderTitle"
import { profile1 } from "../../assets"
import CodeBlock from "../../ui/CodeBlock"
import Facts from "../../ui/Facts"
import SocialHandles from "../SocialHandles"
import BreathCircle from "../../ui/BreathCircle"
const code = `
const developer = {
  firstName: 'Jethro',
  lastName: 'Jerry'
  aka: "King Jethro",
  hobby: repeat = () => {
    //eat();
    //code();
    //sleep;
    //football
    }
}
 `

const Header = () => {
  return (
    <header id='header'>
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile1} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock
            language={"javascript"}
            code={code}
          />
          <div>
            <p className="text__muted description">
              I dissect intricate user experience challanges to engineer integrity-focused solutions that resonate with billions of users.
            </p>
            <Facts />
            <SocialHandles />
          </div>
          <div />
        </div>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import "./Footer.css"
import { menu } from '../../data'
import { Link } from 'react-scroll'
import SocialHandles from '../SocialHandles'

const Footer = () => {
  return (
    <footer>
      <div className="section__wrapper">
        <ul className="flex__center nav">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLocaleLowerCase()}
              smooth={true}
              duration={500}
              key={index}
              className='nav__item'
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <SocialHandles />
        <div className="copyright">
          <h3>Copyright &copy; All right reserved - | 2024</h3>
          <p className="text__muted">Built with love by King Jethro</p>
        </div>
        <div className="base__logo">
          <h1 className="full__name shine">King Jethro</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer

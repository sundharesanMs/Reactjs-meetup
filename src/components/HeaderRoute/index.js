import {Link} from 'react-router-dom'
import './index.css'

const HeaderRoute = () => (
  <nav className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
  </nav>
)

export default HeaderRoute

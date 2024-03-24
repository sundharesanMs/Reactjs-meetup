import {Link} from 'react-router-dom'

import HeaderRoute from '../HeaderRoute'
import RegisterContext from '../../Context/RegisterContext'

import './index.css'

const HomeRoute = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, username, userTopic} = value
        return (
          <div className="home-route-container">
            <HeaderRoute />
            {isRegistered ? (
              <div className="body-container">
                <h1 className="username-text">Hello {username}</h1>
                <p className="user-topic-text">Welcome to {userTopic}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetup-image"
                />
              </div>
            ) : (
              <div className="body-container">
                <h1 className="greeting-text">Welcome to Meetup</h1>
                <p className="register-request-text">
                  Please register for the topic
                </p>
                <Link to="/register">
                  <button
                    className="register-button"
                    type="button"
                    onClick={onClickRegister}
                  >
                    Register
                  </button>
                </Link>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetup-image"
                />
              </div>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default HomeRoute

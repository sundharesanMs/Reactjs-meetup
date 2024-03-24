import HeaderRoute from '../HeaderRoute'
import RegisterContext from '../../Context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        username,
        userTopic,
        changeName,
        changeTopic,
        registerName,
        showErrorMsg,
        updateError,
      } = value

      const onSubmit = event => {
        event.preventDefault()

        if (username === '') {
          updateError()
        } else {
          const {history} = props
          history.replace('/')
          registerName()
        }
      }

      const onChangeUsername = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div className="register-route-container">
          <HeaderRoute />
          <div className="register-main-container">
            <div className="register-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="register-image"
              />
              <form className="register-form-container" onSubmit={onSubmit}>
                <h1 className="register-heading">Let us join</h1>
                <label htmlFor="RegisterName" className="label-item">
                  NAME
                </label>
                <input
                  type="text"
                  id="RegisterName"
                  placeholder="Your name"
                  className="input-user-name"
                  onChange={onChangeUsername}
                  value={username}
                />
                <label htmlFor="Topics" className="label-item">
                  TOPICS
                </label>
             <select
  id="Topics"
  className="select"
  onChange={onChangeTopic}
  value={userTopic}
>
  


                  {topicsList.map(eachTopics => (
                    <option
                      value={eachTopics.displayText}
                      key={eachTopics.id}
                      className="select-option"
                    >
                      {eachTopics.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="register-now-button">
                  Register Now
                </button>
                {showErrorMsg ? (
                  <p className="error-msg">Please enter your name</p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterRoute
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h1 className="not-found-heading">Page not Found</h1>
    <p className="not-found-error-msg">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound

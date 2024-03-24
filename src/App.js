import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import RegisterContext from './Context/RegisterContext'
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    username: '',
    userTopic: 'Arts and Culture',
    isRegistered: false,
    showErrorMsg: false,
  }

  changeName = username => {
    this.setState({username})
  }

  changeTopic = userTopic => {
    this.setState({userTopic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showErrorMsg: true})
  }

  render() {
    const {username, userTopic, isRegistered, showErrorMsg} = this.state
    return (
      <RegisterContext.Provider
        value={{
          username,
          userTopic,
          isRegistered,
          showErrorMsg,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}
export default App

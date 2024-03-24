import React from 'react'

const RegisterContext = React.createContext({
  username: '',
  userTopic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showErrorMsg: false,
  updateError: () => {},
})

export default RegisterContext

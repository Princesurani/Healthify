import React, { useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'

const App = () => {
  const [stateAuth, setStateAuth] = useState()
  const response = (res) => {
    setStateAuth(res)
  }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'
      style={{ height: "100vh" }}
    >
      {!stateAuth ?
        <Login response={response} />
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <div>
          <img src={stateAuth.data.picture} />
          </div>
          <h5>{stateAuth.data.name}</h5>
          <p>{stateAuth.data.email}</p>
          <Logout response={response} />
        </div>
      }
      {/* //shsjju */}
    </div>
  )
}

export default App
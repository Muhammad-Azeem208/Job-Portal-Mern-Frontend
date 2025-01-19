import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({Authorized: false});

const AppWrapper = ()=>{
  const[Authorized, setAuthorized] = useState(false);
  const[user, setUser] = useState({});

  return(
    <Context.Provider value={{Authorized, setAuthorized, user, setUser}}>
          <App />
    </Context.Provider>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper/>
  </StrictMode>,
)

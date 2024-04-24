import ReactDOM from 'react-dom/client'
import Router from './router'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <Router/>
  </AuthContextProvider>
)

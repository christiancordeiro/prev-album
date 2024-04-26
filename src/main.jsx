import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { UserStorage } from "./Api"
import Nav from "./Components/Nav/Nav"
import { StrictMode } from "react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserStorage>
      <App />
      <Nav />
    </UserStorage>
  </StrictMode>
)

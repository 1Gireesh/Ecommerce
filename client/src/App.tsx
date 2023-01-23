import { AllRoutes } from "./Routes";
import Nav from "./components/Nav";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <div>
        <AllRoutes></AllRoutes>
      </div>
    </div>
  )
}
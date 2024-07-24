import "./App.css";

import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import CreateButton from "./components/CreateButton";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <div className="App">
        <Navbar />

        {element}

        {/* <Home />
      <Login />
      <Signup />
      <Profile />
      <CreateQuote /> */}
      </div>
      {localStorage.getItem("token") && <CreateButton />}
    </>
  );
}

export default App;

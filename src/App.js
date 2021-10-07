import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movieslist from "./Components/Movieslist";
import NavBar from "./Components/NavBar";
import Add from "./Components/Add";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Movieslist />
      <Add />
    </div>
  );
}

export default App;

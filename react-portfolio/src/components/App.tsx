import NavBar from "./Navigation";
import Home from "./Home/Home";
import "../dist/output.css";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import DivOne from "./src/Components/DivOne";
import NavBar from "./src/Components/navBar";
import Footer from "./src/Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <DivOne />
      </div>
      <Footer />
    </>
  );
}

export default App;

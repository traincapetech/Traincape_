import AllRoute from "./allRoute/AllRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WebsiteCounter from "./components/WebsiteCounter";

function App() {
  return (
    <div>
      {/* <h1>Traincape Technology</h1> */}
      <Navbar />
      <AllRoute />
      <Footer />
      <WebsiteCounter />
    </div>
  );
}

export default App;

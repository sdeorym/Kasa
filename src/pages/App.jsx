import { Outlet } from "react-router-dom";
import Footer from "@components/general/Footer";
import Navbar from "@components/general/Navbar";
import '@styles/App.css';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
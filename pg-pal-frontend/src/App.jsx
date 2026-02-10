import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Rooms from "./components/Rooms/Rooms";
import Amenities from "./components/Amenities/Amenities";
import FAQ from "./components/FAQ/FAQ";
import SignUp from "./pages/SignUp";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Stats />
            <Rooms />
            <Amenities />
            <FAQ />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>Login Page</h1></div>} />
        <Route path="/add-property" element={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>Add Property Page</h1></div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
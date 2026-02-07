import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import SignUp from "./pages/SignUp";
// import Hero from "./components/";
// import Stats from "./components/Stats/Stats";
// import Rooms from "./components/Rooms/Rooms";
// import Amenities from "./components/Amenities/Amenities";
// import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            {/* <Hero />
            <Stats />
            <Rooms />
            <Amenities />
            <FAQ /> */}
            <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h1>Welcome to PG-PAL</h1>
            </div>
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
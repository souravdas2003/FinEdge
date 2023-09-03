import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";

import Patient_SignIn from "./pages/SignIn";
import Patient_LogIn from "./pages/LogIn";

import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/blog";
import Trade from "./pages/Trade";
import Invoice from "./pages/Invoice";
import Chat from "./components/Chat"
import Stock from "./pages/StockPage"
import MemoryGame from "./pages/MemoryGame";
import Trivia from "./pages/Trivia";
function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
    <BrowserRouter basename="FinEdge">
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/invoice" element={<Invoice />} />
      
        <Route path="/patientsignin" element={<Patient_SignIn />} />
        <Route path="/memory" element={<MemoryGame />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route
          exact
          path="/patientlogin"
          element={isLoggedIn == "true" ? "" : <Patient_LogIn />}
        />
   
        <Route path="/blog" element={<Blog />} />
        <Route path="/stock" element={<Stock />} />
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
    <Chat/>
    </>
  );
}

export default App;

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MainAcceuil from "./components/MainAcceuil";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Profil from "./components/Profil";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainAcceuil />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

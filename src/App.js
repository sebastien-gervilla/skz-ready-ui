import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="*" element={fallback()} />
            </Routes>
        </BrowserRouter>
    );
}

const fallback = () => <Home />; // Fallback Page

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="*" element={fallback()} />
            </Routes>
        </BrowserRouter>
    );
}

const fallback = () => <Home />; // Fallback Page

export default App;

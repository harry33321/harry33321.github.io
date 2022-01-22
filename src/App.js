import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/* <Preloader load={load} /> */}
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              {/* <Route path="/project" component={Projects} /> */}
              {/* <Route path="/about" component={About} /> */}
              {/* <Route path="/resume" component={Resume} /> */}
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

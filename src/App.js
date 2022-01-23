import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from "./components/Particle";
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Projects from "./components/Projects";


function App() {
	return (
		<BrowserRouter>
			<Particle />
			<NavBar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				{/* <Route path="/about" component={About} /> */}
				<Route path="/projects" element={<Projects />} />
				{/* <Route path="/resume" component={Resume} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

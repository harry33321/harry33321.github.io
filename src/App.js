import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from "./pages/components/Particle";
import NavBar from "./pages/components/NavBar";
import Home from './pages/Home';
import Projects from "./pages/Projects";


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

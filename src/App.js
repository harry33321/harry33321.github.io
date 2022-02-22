import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from "./pages/components/Particle";
import NavBar from "./pages/components/NavBar";
import Home from './pages/Home';
import Projects from "./pages/Projects";


function App() {
	return (
		// <BrowserRouter>
		<HashRouter>
			<Particle />
			<NavBar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				{/* <Route path="/about" component={About} /> */}
				<Route path="/projects" element={<Projects />} />
				{/* <Route path="/resume" component={Resume} /> */}
			</Routes>
		</HashRouter>
		// </BrowserRouter>
	);
}

export default App;

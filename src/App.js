import React, { useState, useEffect, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Hamburger from "./components/Hamburger/Hamburger";
// import Home from "./pages/Home/Home";
// import Projects from "./pages/Projects/Projects";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Loading from "./pages/Loading/Loading";
import Footer from "./components/Footer/Footer";

import "./App.css";

const Loading = lazy(() => import("./pages/Loading/Loading"));
const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const location = useLocation();

	return loading ? (
		<Loading />
	) : (
		<>
			<Hamburger />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route exact path="/" render={() => <Home />} />
					<Route path="/projects" component={() => <Projects />} />
					<Route path="/about" component={() => <About />} />
					<Route path="/contact" component={() => <Contact />} />
				</Switch>
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default App;

import { ResCard } from "./components/ResCard";
import { Routes, Route } from "react-router-dom";
import { Available } from "./pages/Available";
import { Occupied } from "./pages/Occupied";
import { Home } from "./pages/Home";

function App() {
	return (<>

	<Routes>
		<Route path="/" element={<Home />} />		
		<Route path="/available" element={<Available />} />
		<Route path="/occupied" element={<Occupied/>} />
	</Routes>
	</>);
}

export default App;

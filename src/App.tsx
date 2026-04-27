import { ResCard } from "./components/ResCard";
import { Routes, Route } from "react-router-dom";
import { Available } from "./pages/Available";

function App() {
	return (<>

	<Routes>
		<Route path="/" element={<Available />} />
	</Routes>
	</>);
}

export default App;

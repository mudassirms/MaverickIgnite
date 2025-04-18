import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

// import OverviewPage from "./pages/OverviewPage";
import TeachersPage from "./pages/TeachersPage";
import StudentPage from "./pages/StudentPage";
import SettingsPage from "./pages/SettingsPage";
import SchoolsPage from "./pages/SchoolPage"; 

function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				{/* <Route path='/' element={<OverviewPage />} /> */}
				<Route path='/teachers' element={<TeachersPage />} />
				<Route path='/student' element={<StudentPage />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/' element={<SchoolsPage />} /> {/* ✅ New route added */}
			</Routes>
		</div>
	);
}

export default App;

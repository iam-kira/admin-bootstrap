import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Login from './Pages/login/Login'
import New from './Pages/new/New'
import Single from './Pages/single/Single'
import List from './Pages/list/List'
import Home from './Pages/home/Home'
import { userInputs, productInputs } from './formSource'
import './style/Dark.scss'
import { DarkModeContext } from './context/darkModeContext'
import { useContext } from 'react'


function App() {

	const { darkMode } = useContext(DarkModeContext)

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
        <Routes>
					<Route path="*">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<Single />} />
							<Route path="new" element={<New inputs={userInputs} title="Add New Agent" />} />
            </Route>

            <Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<Single />} />
							<Route path="new" element={<New inputs={productInputs} title="Add New Weapons" />} />
            </Route>
					</Route>
        </Routes>
			</BrowserRouter>
    </div>
	);
}

export default App;

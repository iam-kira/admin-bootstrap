import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Login from './Pages/login/Login'
import New from './Pages/new/New'
import Single from './Pages/single/Single'
import List from './Pages/list/List'
import Home from './Pages/home/Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

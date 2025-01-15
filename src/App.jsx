import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import TestPage from './pages/TestPage.jsx';

import './App.css'


function App() {
  

  return (
    <Container fluid className="main-container">
      <h1>React Page Template</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/test/:param" element={<TestPage />} />
      </Routes>
    </Container>
  )
}

export default App

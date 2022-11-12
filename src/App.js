import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'));
const Vixem = lazy(() => import('./routes/Vixem'));
const Algoritmos = lazy(() => import('./routes/Algoritmos'));
const PesoBruto = lazy(() => import('./routes/PesoBruto'));

function App() {
  return (
    <Router>
     <Suspense fallback={<div>Loading...</div>}>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vixem" element={<Vixem />} />
         <Route path="/algoritmos" element={<Algoritmos />} />
         <Route path="/pesobruto" element={<PesoBruto />} />
       </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
import React from 'react';
// import GlobalStyles from './styles/GlobalStyles';
import { Routes } from './Router'


const Home = lazy(() => import('./routes/Home'));
const Vixem = lazy(() => import('./routes/Vixem'));
const Algoritmos = lazy(() => import('./routes/Algoritmos'));
const PesoBruto = lazy(() => import('./routes/PesoBruto'));
const ForcaCorte = lazy(() => import('./routes/ForcaCorte'));

export default function App() {
  return (
    <Router>
     <Suspense fallback={<div>Loading...</div>}>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vixem" element={<Vixem />} />
         <Route path="/algoritmos" element={<Algoritmos />} />
         <Route path="/pesobruto" element={<PesoBruto />} />
         <Route path="/forcacorte" element={<ForcaCorte />} />
       </Routes>
      </Suspense>
    </Router>
  );
}

// export default function App() {
//   return (
//     <>
//       <Routes />
//       <GlobalStyles />
//     </>
//   );
// }


import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/navigation';

// Lazy loaded components
const Home = lazy(() => import('./Pages/home'));
const FormPage = lazy(() => import('./Pages/formPage'));
const About = lazy(() => import('./Pages/about'));

// const About = lazy(() => 
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve(import('./Pages/about'));
//     }, 1500); // 1.5 second delay
//   })
// );

function App() {
  return (
    <Router>
      <NavigationBar />
      <Suspense fallback={
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}export default App;
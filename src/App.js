import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RequestDemo from './pages/requestDemo';


function Layout({ children }) {
  const location = useLocation();

  // Hide Navbar & Footer only on /request-demo
  const hideLayout = location.pathname === "/request-demo" || location.pathname === '/user-experience';;

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/request-demo" element={<RequestDemo />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

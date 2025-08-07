import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Placeholder pages
// const Features = () => <div className="text-center mt-5"><h2>Features Page</h2></div>;
// const Contact = () => <div className="text-center mt-5"><h2>Contact Page</h2></div>;
// const RequestDemo = () => <div className="text-center mt-5"><h2>Request a Demo</h2></div>;
// const CRM = () => <div className="text-center mt-5"><h2>CRM Config Page</h2></div>;
// const Database = () => <div className="text-center mt-5"><h2>Database Config Page</h2></div>;
// const SnowflakeLogin = () => <div className="text-center mt-5"><h2>Snowflake Login Page</h2></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/features" element={<Features />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/request-demo" element={<RequestDemo />} /> */}
        {/* <Route path="/crm" element={<CRM />} /> */}
        {/* <Route path="/database" element={<Database />} /> */}
        {/* <Route path="/snowflake-login" element={<SnowflakeLogin />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

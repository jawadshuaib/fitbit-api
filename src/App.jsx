import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import OAuthCallback from './features/authentication/OAuthCallback';
import PageNotFound from './features/dashboard/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth/fitbit" element={<OAuthCallback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

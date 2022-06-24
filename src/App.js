import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import NavBar from './components/NavBar';
import Search from './components/Search';
import CustomerOverview from './components/CustomerOverview'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/customer-overview/:id" element={<CustomerOverview />} />
      </Routes>
    </Router>
  );
}

export default App;

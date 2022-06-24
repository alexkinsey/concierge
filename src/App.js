import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './common/GlobalStyles';

import NavBar from './NavBar';
import Search from './Search';
import CustomerOverview from './CustomerOverview'

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

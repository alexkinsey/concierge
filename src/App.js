import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { GlobalPageWidth } from './styles/Layout.styles';

import NavBar from './components/common/NavBar';
import Search from './components/Search';
import CustomerOverview from './components/CustomerOverview';
import CreateCustomer from './components/CreateCustomer';
import AppointmentDetails from './components/AppointmentDetails';
import CreateAppointment from './components/CreateAppointment';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <GlobalPageWidth>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/customer-overview/:customerId" element={<CustomerOverview />} />
          <Route
            path="/customer-overview/:customerId/appointment-details/:appointmentId"
            element={<AppointmentDetails />}
          />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/customer-overview/:customerId/create-appointment" element={<CreateAppointment />} />
        </Routes>
      </GlobalPageWidth>
    </Router>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { GlobalPageWidth } from './styles/Layout.styles';

import NavBar from './components/common/NavBar';
import Search from './components/Search';
import CustomerOverview from './components/CustomerOverview';
import CreateEditCustomer from './components/CreateEditCustomer';
import AppointmentDetails from './components/AppointmentDetails';
import CreateAppointment from './components/CreateAppointment';

import { searchCustomersAPI, getAppointmentsByCustomerId, getCustomerById } from './services';

function App() {
  const [foundCustomers, setFoundCustomers] = useState([]);
  const [numberOfFoundCustomers, setNumberOfFoundCustomers] = useState('start');
  const [customer, setCustomer] = useState({});
  const [appointments, setAppointments] = useState([]);

  const searchForCustomers = async (criteria) => {
    const customers = await searchCustomersAPI(criteria);
    setFoundCustomers(customers);
    setNumberOfFoundCustomers(customers.length);
  };

  const resetFoundCustomers = () => {
    setFoundCustomers([]);
    setNumberOfFoundCustomers('start');
  };

  const getCustomer = async (id) => {
    const customer = await getCustomerById(id);
    setCustomer(customer);
  };

  const getAppointments = async (id) => {
    const appointments = await getAppointmentsByCustomerId(id);
    const sortedAppointments = await appointments.sort((a, b) => new Date(b.date) - new Date(a.date));
    setAppointments(sortedAppointments);
  };

  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <GlobalPageWidth>
        <Routes>
          <Route
            path="/"
            element={
              <Search
                searchForCustomers={searchForCustomers}
                foundCustomers={foundCustomers}
                numberOfFoundCustomers={numberOfFoundCustomers}
                resetFoundCustomers={resetFoundCustomers}
              />
            }
          />
          <Route
            path="/customer-overview/:customerId"
            element={
              <CustomerOverview
                getCustomer={getCustomer}
                getAppointments={getAppointments}
                customer={customer}
                appointments={appointments}
              />
            }
          />
          <Route path="/customer-overview/:customerId/edit" element={<CreateEditCustomer type="edit" customer={customer} />} />
          <Route
            path="/customer-overview/:customerId/appointment-details/:appointmentId"
            element={<AppointmentDetails />}
          />
          <Route path="/create-customer" element={<CreateEditCustomer type="create" />} />
          <Route path="/customer-overview/:customerId/create-appointment" element={<CreateAppointment />} />
        </Routes>
      </GlobalPageWidth>
    </Router>
  );
}

export default App;

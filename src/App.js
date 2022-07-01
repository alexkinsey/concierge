import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { GlobalPageWidth } from './styles/Layout.styles';

import NavBar from './components/common/NavBar';
import Search from './components/Search';
import CustomerOverview from './components/CustomerOverview';
import CreateEditCustomer from './components/CreateEditCustomer';
import AppointmentDetails from './components/AppointmentDetails';
import CreateEditAppointment from './components/CreateEditAppointment';

import {
  searchCustomersAPI,
  getAppointmentsByCustomerId,
  getCustomerById,
  getAppointmentById,
  getConsultantById
} from './services';

function App() {
  const [foundCustomers, setFoundCustomers] = useState([]);
  const [numberOfFoundCustomers, setNumberOfFoundCustomers] = useState('start');
  const [customer, setCustomer] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState({});
  const [consultant, setConsultant] = useState({});

  const searchForCustomers = async (criteria) => {
    const customers = await searchCustomersAPI(criteria);
    setFoundCustomers(customers);
    setNumberOfFoundCustomers(customers.length);
  };
  const resetData = () => {
    setFoundCustomers([]);
    setNumberOfFoundCustomers('start');
    setCustomer({});
    setAppointments([]);
    setAppointment({});
    setConsultant({});
  };

  const getCustomer = async (id) => {
    const customer = await getCustomerById(id);
    setCustomer(customer);
  };

  const getAppointments = async (id) => {
    const appointments = await getAppointmentsByCustomerId(id);
    const sortedAppointments = await appointments.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setAppointments(sortedAppointments);
  };

  const getAppointmentData = async (id) => {
    const appointment = await getAppointmentById(id);
    setAppointment(appointment);
    const consultant = await getConsultantById(appointment.consultantId);
    setConsultant(consultant);
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
                resetFoundCustomers={resetData}
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
                resetData={resetData}
              />
            }
          />

          <Route
            path="/create-customer"
            element={<CreateEditCustomer type="create" />}
          />
          <Route
            path="/customer-overview/:customerId/edit"
            element={<CreateEditCustomer type="edit" customer={customer} />}
          />

          <Route
            path="/customer-overview/:customerId/appointment-details/:appointmentId"
            element={
              <AppointmentDetails
                getAppointmentData={getAppointmentData}
                getCustomer={getCustomer}
                appointment={appointment}
                customer={customer}
                consultant={consultant}
              />
            }
          />
          <Route
            path="/customer-overview/:customerId/create-appointment"
            element={<CreateEditAppointment type="create" />}
          />
          <Route
            path="/customer-overview/:customerId/appointment-details/:appointmentId/edit"
            element={
              <CreateEditAppointment type="edit" appointment={appointment} />
            }
          />
        </Routes>
      </GlobalPageWidth>
    </Router>
  );
}

export default App;

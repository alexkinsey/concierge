export const searchCustomersAPI = async (customerSearch) => {
  const res = await fetch('http://localhost:3001/api/customers/search', {
    method: 'POST',
    body: JSON.stringify(customerSearch),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const customers = data.data;
  return customers;
};

export const getCustomerById = async (customerId) => {
  const res = await fetch('http://localhost:3001/api/customers/' + customerId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const customer = data.data;
  return customer;
};

export const getAppointmentsByCustomerId = async (customerId) => {
  const res = await fetch(`http://localhost:3001/api/appointments/customer=${customerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const appointments = data.data;
  return appointments;
};

export const addCustomer = async (customer) => {
  const res = await fetch('http://localhost:3001/api/customers', {
    method: 'POST',
    body: JSON.stringify(customer),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const id = data.id;
  return id;
};

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

export const getAppointments = async (customerId) => {
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

export const getCustomersByCustomerSearch = async (customerSearch) => {
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

export const getAppointmentById = async (appointmentId) => {
  const res = await fetch('http://localhost:3001/api/appointments/' + appointmentId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const appointment = data.data;
  return appointment;
};

export const getAppointmentsByCustomerId = async (customerId) => {
  const res = await fetch(`http://localhost:3001/api/appointments/customer/${customerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const appointments = data.data;
  return appointments;
};

export const getConsultantById = async (consultantId) => {
  const res = await fetch('http://localhost:3001/api/consultants/' + consultantId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const consultant = data.data;
  return consultant;
};

export const getConsultantsByDepartment = async (department) => {
  const res = await fetch('http://localhost:3001/api/consultants/department/' + department, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const consultants = data.data;
  return consultants;
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

export const editCustomer = async (customer, customerId) => {
  const res = await fetch(`http://localhost:3001/api/customers/${customerId}`, {
    method: 'PUT',
    body: JSON.stringify(customer),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const id = data.id;
  return id;
}

export const addAppointment = async (appointment) => {
  const res = await fetch('http://localhost:3001/api/appointments', {
    method: 'POST',
    body: JSON.stringify(appointment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const id = data.id;
  return id;
};

export const deleteAppointment = async (appointmentId) => {
  const res = await fetch(`http://localhost:3001/api/appointments/${appointmentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export const editAppointment = async (appointment, appointmentId) => {
  const res = await fetch(`http://localhost:3001/api/appointments/${appointmentId}`, {
    method: 'PUT',
    body: JSON.stringify(appointment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const id = data.id;
  return id;
}
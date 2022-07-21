import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ResultCard from '.';

const mockData = {
  customer: {
    customerId: '100',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '01/01/2000',
    address1: '123 Main Street',
    address2: '',
    address3: '',
    city: 'London',
    postcode: 'SW1 1AA',
    phoneNumber: '0123456789',
    email: 'johndoe@email.com',
    nationalInsuranceNo: 'AB123456C',
  },
};

test('should render ResultCard with props', () => {
  render(
    <Router>
      <ResultCard customer={mockData.customer} />
    </Router>
  );

  const name = screen.getByText('John Doe');
  const dobLabel = screen.getByText('Date of birth:');
  const dob = screen.getByText('01/01/2000');
  const postcodeLabel = screen.getByText('Postcode:');
  const postcode = screen.getByText('SW1 1AA');
  const appointmentsLabel = screen.getByText('Number of appointments:');

  expect(name).toBeInTheDocument();
  expect(dobLabel).toBeInTheDocument();
  expect(dob).toBeInTheDocument();
  expect(postcodeLabel).toBeInTheDocument();
  expect(postcode).toBeInTheDocument();
  expect(appointmentsLabel).toBeInTheDocument();
});

test('link should exist on Customer Overview button', () => {
  render(
    <Router>
      <ResultCard customer={mockData.customer} resetFoundCustomers={jest.fn()}/>
    </Router>
  );

  const link = screen.getByRole('button');
  fireEvent.click(link)
  
  expect(link).toBeInTheDocument();
  expect(window.location.href).toBe("http://localhost/customer-overview/100");
});

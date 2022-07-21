import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Results from '.';

const mockData = {
  customers: [
    {
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
    {
      customerId: '101',
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: '01/01/2000',
      address1: '123 Main Street',
      address2: '',
      address3: '',
      city: 'London',
      postcode: 'SW1 1AA',
      phoneNumber: '0123456789',
      email: 'janedoe@email.com',
      nationalInsuranceNo: 'AB123456C',
    },
  ],
};

test('should render Results when no data is provided', () => {
  render(
    <Router>
      <Results customers={[]} />
    </Router>
  );

  const title = screen.getByRole('heading', {
    name: /results/i,
  });
  const info = screen.getByText('No customer record was found');

  expect(title).toBeInTheDocument();
  expect(info).toBeInTheDocument();
});

test('should render Results when data is provided', () => {
  render(
    <Router>
      <Results customers={mockData.customers} numberOfFoundCustomers={mockData.customers.length} />
    </Router>
  );

  const info = screen.getByText('2 customer records match your search');
  expect(info).toBeInTheDocument();
});

test('should show message when no search has been performed', () => {
  render(
    <Router>
      <Results customers={mockData.customers} numberOfFoundCustomers="start" />
    </Router>
  );

  const info = screen.getByText('Your results will appear here');
  expect(info).toBeInTheDocument();
})
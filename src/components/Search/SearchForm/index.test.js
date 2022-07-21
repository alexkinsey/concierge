import { render, screen, fireEvent } from '@testing-library/react';

import SearchForm from '.';

test('should render SearchForm', () => {
  render(<SearchForm />);

  const firstNameLabel = screen.getByText(/first name/i);
  const firstNameField = screen.getByRole('textbox', {
    name: /first name \(optional\)/i,
  });
  const lastNameLabel = screen.getByText(/last name/i);
  const lastNameField = screen.getByRole('textbox', {
    name: /last name/i,
  });
  const dateOfBirthLabel = screen.getByText(/date of birth/i);
  const dateOfBirthField = screen.getByLabelText(/date of birth/i);
  const postcodeLabel = screen.getByText(/postcode/i);
  const postcodeField = screen.getByRole('textbox', {
    name: /postcode \(optional\)/i,
  });
  const button = screen.getByRole('button', { name: /search/i });

  expect(firstNameLabel).toBeInTheDocument();
  expect(firstNameField).toBeInTheDocument();
  expect(lastNameLabel).toBeInTheDocument();
  expect(lastNameField).toBeInTheDocument();
  expect(dateOfBirthLabel).toBeInTheDocument();
  expect(dateOfBirthField).toBeInTheDocument();
  expect(postcodeLabel).toBeInTheDocument();
  expect(postcodeField).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('should capitalise input of name', () => {
  render(<SearchForm />);

  const firstNameField = screen.getByRole('textbox', {
    name: /first name/i,
  });
  const lastNameField = screen.getByRole('textbox', {
    name: /last name/i,
  });

  expect(firstNameField.value).toBe('');
  expect(lastNameField.value).toBe('');

  fireEvent.input(firstNameField, { target: { value: 'john' } });
  fireEvent.input(lastNameField, { target: { value: 'doe' } });

  expect(firstNameField.value).toBe('John');
  expect(lastNameField.value).toBe('Doe');
});

test('should capitalise and format input of postcode', () => {
  render(<SearchForm />);

  const postcodeField = screen.getByRole('textbox', {
    name: /postcode \(optional\)/i,
  });

  expect(postcodeField.value).toBe('');

  fireEvent.input(postcodeField, { target: { value: 'sw11aa' } });

  expect(postcodeField.value).toBe('SW1 1AA');
});

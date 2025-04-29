import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Home from './Home';

test('renders Home component', () => {
  render(<Home />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
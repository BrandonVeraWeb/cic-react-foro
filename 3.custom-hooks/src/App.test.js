import { render, screen } from '@testing-library/react';
import App from './App';

test('renders suma', () => {
  render(<App />);
  const linkElement = screen.getByText(/suma/i);
  expect(linkElement).toBeInTheDocument();
});

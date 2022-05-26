import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contador', () => {
  render(<App />);
  const linkElement = screen.getByText(/contador/i);
  expect(linkElement).toBeInTheDocument();
});

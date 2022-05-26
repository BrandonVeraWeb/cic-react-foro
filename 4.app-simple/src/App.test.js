import { render, screen } from '@testing-library/react';
import App from './App';

test('renders participantes del foro', () => {
  render(<App />);
  const linkElement = screen.getByText(/participantes del foro/i);
  expect(linkElement).toBeInTheDocument();
});

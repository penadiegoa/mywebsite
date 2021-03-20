import { render, screen } from '@testing-library/react';
import Tictactoe from './Tictactoe';

test('renders learn react link', () => {
  render(<Tictactoe />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

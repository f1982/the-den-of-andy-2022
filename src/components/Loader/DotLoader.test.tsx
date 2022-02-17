import {
  render, screen,
} from '@testing-library/react';
import DotLoader from './DotLoader';
import '@testing-library/jest-dom';

describe('loader', () => {
  test('loader should display properly', () => {
    render(<DotLoader />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});

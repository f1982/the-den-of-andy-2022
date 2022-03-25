import {
  render, screen,
} from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import DotLoader from './DotLoader';
import '@testing-library/jest-dom';

describe('loader', () => {
  test('loader should display properly', () => {
    render(<DotLoader />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
  test('accessibility', async () => {
    const { container } = render(<DotLoader />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

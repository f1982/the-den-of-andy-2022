import {
  render, screen,
} from '@testing-library/react';
import { axe } from 'jest-axe';
import DotLoader from './DotLoader';

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

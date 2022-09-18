import {
  render, screen,
} from '@testing-library/react';

import Custom404, { Glitch404 } from '.';

describe('404 page', () => {
  test('should render the 404 page correctly', () => {
    const { debug } = render(<Glitch404 text="404 error" />);
    expect(screen.getByText(/404 error/i)).toBeInTheDocument();
  });
});
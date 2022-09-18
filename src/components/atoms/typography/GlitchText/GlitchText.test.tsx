import {
  render, screen,
} from '@testing-library/react';

import GlitchText from './GlitchText';

test('should render the 404 page correctly', () => {
  render(<GlitchText text="404 error" />);
  expect(screen.getByText(/404 error/i)).toBeInTheDocument();
});

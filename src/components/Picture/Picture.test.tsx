import { render, screen } from '@testing-library/react';
import Picture from './Picture';

const renderComponent = () => render(<Picture src="mock src" author="mock author" id="mock id" />);

describe('Picture', () => {
  test('renders image with src and alt', () => {
    renderComponent();

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'mock src');
    expect(img).toHaveAttribute('alt', 'By mock author, ID: mock id');
  });
});

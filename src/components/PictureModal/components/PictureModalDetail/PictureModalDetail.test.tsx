import { render, screen } from '@testing-library/react';
import PictureModalDetail from './PictureModalDetail';

describe('PictureModalDetail', () => {
  const label = 'hello';
  const value = 'world';

  it('renders label and value', () => {
    render(<PictureModalDetail label={label} value={value} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it('label and value aria-labelledby relation', () => {
    render(<PictureModalDetail label={label} value={value} />);
    const labelResult = screen.getByText(label);
    const valueElement = screen.getByLabelText(label);
    const valueResult = screen.getByText(value);

    expect(labelResult).toHaveAttribute('id');
    expect(valueResult).toHaveAttribute('aria-labelledby', labelResult.getAttribute('id'));
    expect(valueElement).toBeInTheDocument();
    expect(valueElement).toHaveTextContent(value);
  });

  it('isAuthor boolean defines classname', () => {
    render(<PictureModalDetail label={label} value={value} isAuthor />);
    const valueResult = screen.getByText(value);

    expect(valueResult).toHaveClass('picture-modal-detail__value--author');
  });

  it('isDescription boolean defines classname', () => {
    render(<PictureModalDetail label={label} value={value} isDescription />);
    const valueResult = screen.getByText(value);

    expect(valueResult).toHaveClass('picture-modal-detail__value--description');
  });
});

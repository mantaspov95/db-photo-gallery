import { render, screen } from '@testing-library/react';
import PictureModalDetail from './PictureModalDetail';

describe('PictureModalDetail', () => {
  const LABEL = 'hello';
  const VALUE = 'world';

  it('renders label and value', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} />);

    expect(screen.getByText(LABEL)).toBeInTheDocument();
    expect(screen.getByText(VALUE)).toBeInTheDocument();
  });

  it('label and value aria-labelledby relation', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} />);
    const labelResult = screen.getByText(LABEL);
    const valueElement = screen.getByLabelText(LABEL);
    const valueResult = screen.getByText(VALUE);

    expect(labelResult).toHaveAttribute('id');
    expect(valueResult).toHaveAttribute('aria-labelledby', labelResult.getAttribute('id'));
    expect(valueElement).toBeInTheDocument();
    expect(valueElement).toHaveTextContent(VALUE);
  });

  it('isAuthor boolean defines classname', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} isAuthor />);
    const valueResult = screen.getByText(VALUE);

    expect(valueResult).toHaveClass('picture-modal-detail__value--author');
  });

  it('isDescription boolean defines classname', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} isDescription />);
    const valueResult = screen.getByText(VALUE);

    expect(valueResult).toHaveClass('picture-modal-detail__value--description');
  });
});

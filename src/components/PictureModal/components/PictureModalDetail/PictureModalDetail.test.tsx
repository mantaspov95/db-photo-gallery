import { render, screen } from '@testing-library/react';
import PictureModalDetail from './PictureModalDetail';

describe('PictureModalDetail', () => {
  const LABEL = 'hello';
  const VALUE = 'world';

  test('renders label and value', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} />);

    expect(screen.getByText(LABEL)).toBeInTheDocument();
    expect(screen.getByText(VALUE)).toBeInTheDocument();
  });

  test('label and value aria-labelledby relation', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} />);
    const labelResult = screen.getByText(LABEL);
    const valueElement = screen.getByLabelText(LABEL);
    const valueResult = screen.getByText(VALUE);

    expect(labelResult).toHaveAttribute('id');
    expect(valueResult).toHaveAttribute('aria-labelledby', labelResult.getAttribute('id'));
    expect(valueElement).toBeVisible();
    expect(valueElement).toHaveTextContent(VALUE);
  });

  test('adds author modifier class when isAuthor is true', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} isAuthor />);
    const valueResult = screen.getByText(VALUE);

    expect(valueResult).toHaveClass('picture-modal-detail__value--author');
  });

  test('adds description modifier class when isDescription is true', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} isDescription />);
    const valueResult = screen.getByText(VALUE);

    expect(valueResult).toHaveClass('picture-modal-detail__value--description');
  });

  test('doesnt add modifier class when isDescription and isAuthor is not defined', () => {
    render(<PictureModalDetail label={LABEL} value={VALUE} />);
    const valueResult = screen.getByText(VALUE);

    expect(valueResult).not.toHaveClass('picture-modal-detail__value--author');
    expect(valueResult).not.toHaveClass('picture-modal-detail__value--description');
  });
});

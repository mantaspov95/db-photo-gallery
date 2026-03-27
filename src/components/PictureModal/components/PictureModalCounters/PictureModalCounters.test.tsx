import { render, screen } from '@testing-library/react';
import PictureModalCounters from './PictureModalCounters';
import { PictureModalCountersLabels } from './PictureModalCounters.enums';

describe('PictureModalCounters', () => {
  const DOWNLOAD_COUNT = 1000;
  const FAVOURITE_COUNT = 1234567;
  const VIEW_COUNT = 999;

  test('renders all counters with correct values', () => {
    const downloadCountFormatted = DOWNLOAD_COUNT.toLocaleString();
    const favouriteCountFormatted = FAVOURITE_COUNT.toLocaleString();
    const viewCountFormatted = VIEW_COUNT.toLocaleString();

    render(
      <PictureModalCounters downloadCount={DOWNLOAD_COUNT} favouriteCount={FAVOURITE_COUNT} viewCount={VIEW_COUNT} />
    );

    expect(screen.getByText(favouriteCountFormatted)).toBeVisible();
    expect(screen.getByText(downloadCountFormatted)).toBeVisible();
    expect(screen.getByText(viewCountFormatted)).toBeVisible();
  });

  test('accessibility. labels visually hidden but screen-readable', () => {
    render(
      <PictureModalCounters downloadCount={DOWNLOAD_COUNT} favouriteCount={FAVOURITE_COUNT} viewCount={VIEW_COUNT} />
    );

    const favouriteLabel = screen.getByText(PictureModalCountersLabels.FAVOURITES);
    const downloadLabel = screen.getByText(PictureModalCountersLabels.DOWNLOADS);
    const viewLabel = screen.getByText(PictureModalCountersLabels.VIEWS);

    expect(favouriteLabel).toBeInTheDocument();
    expect(downloadLabel).toBeInTheDocument();
    expect(viewLabel).toBeInTheDocument();

    expect(favouriteLabel).toHaveClass('sr-only');
    expect(downloadLabel).toHaveClass('sr-only');
    expect(viewLabel).toHaveClass('sr-only');
  });
});

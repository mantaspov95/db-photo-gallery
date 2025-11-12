import { render, screen } from '@testing-library/react';
import PictureModalCounters from './PictureModalCounters';

describe('PictureModalCounters', () => {
  const DOWNLOAD_COUNT = 1000;
  const FAVOURITE_COUNT = 1234567;
  const VIEW_COUNT = 999;

  it('renders all counters with correct values and aria-labels', () => {
    const downloadCountFormatted = DOWNLOAD_COUNT.toLocaleString();
    const favouriteCountFormatted = FAVOURITE_COUNT.toLocaleString();
    const viewCountFormatted = VIEW_COUNT.toLocaleString();

    render(
      <PictureModalCounters downloadCount={DOWNLOAD_COUNT} favouriteCount={FAVOURITE_COUNT} viewCount={VIEW_COUNT} />
    );

    expect(screen.getByLabelText(`${favouriteCountFormatted} favourites`)).toBeInTheDocument();
    expect(screen.getByLabelText(`${downloadCountFormatted} downloads`)).toBeInTheDocument();
    expect(screen.getByLabelText(`${viewCountFormatted} views`)).toBeInTheDocument();

    expect(screen.getByText(favouriteCountFormatted)).toBeInTheDocument();
    expect(screen.getByText(downloadCountFormatted)).toBeInTheDocument();
    expect(screen.getByText(viewCountFormatted)).toBeInTheDocument();
  });
});

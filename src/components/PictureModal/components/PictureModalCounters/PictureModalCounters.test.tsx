import { render, screen } from '@testing-library/react';
import PictureModalCounters from './PictureModalCounters';

describe('PictureModalCounters', () => {
  it('renders all counters with correct values and aria-labels', () => {
    const downloadCount = 1000;
    const favouriteCount = 1234567;
    const viewCount = 999;
    const downloadCountFormatted = downloadCount.toLocaleString();
    const favouriteCountFormatted = favouriteCount.toLocaleString();
    const viewCountFormatted = viewCount.toLocaleString();

    render(
      <PictureModalCounters downloadCount={downloadCount} favouriteCount={favouriteCount} viewCount={viewCount} />
    );

    // accessibility checkup
    expect(screen.getByLabelText(`${favouriteCountFormatted} favourites`)).toBeInTheDocument();
    expect(screen.getByLabelText(`${downloadCountFormatted} downloads`)).toBeInTheDocument();
    expect(screen.getByLabelText(`${viewCountFormatted} views`)).toBeInTheDocument();

    // visible counter values
    expect(screen.getByText(favouriteCountFormatted)).toBeInTheDocument();
    expect(screen.getByText(downloadCountFormatted)).toBeInTheDocument();
    expect(screen.getByText(viewCountFormatted)).toBeInTheDocument();
  });
});

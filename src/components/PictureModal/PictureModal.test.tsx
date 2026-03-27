import { render, screen, waitFor } from '@testing-library/react';
import { GalleryPictureApiItem } from '@hooks/useGallery.types';
import FavouritesProvider from '@context/Favourites/FavouritesProvider';
import userEvent from '@testing-library/user-event';
import PictureModal from './PictureModal';
import { getPictureModalCounter } from './PictureModal.logic';
import { PICTURE_MODAL_DESCRIPTION } from './PictureModal.constants';

const renderWithProviders = (ui: React.ReactElement) => render(<FavouritesProvider>{ui}</FavouritesProvider>);

jest.mock('./PictureModal.logic', () => ({
  getPictureModalCounter: jest.fn(),
}));

describe('PictureModal', () => {
  const API_ITEM: GalleryPictureApiItem = {
    id: '35',
    author: 'John Doe',
    width: 2758,
    height: 3622,
    url: 'https://unsplash.com/photos/znM0ujn2RUA',
    download_url: 'https://picsum.photos/id/35/2758/3622',
  };
  const DETAIL_COUNT = 1000;

  const modalProps = { isOpen: true, onClose: () => {}, picture: API_ITEM };

  beforeEach(() => {
    jest.clearAllMocks();
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    Storage.prototype.getItem = jest.fn().mockReturnValue('[]');
    Storage.prototype.setItem = jest.fn();
    (getPictureModalCounter as jest.Mock).mockReturnValue(DETAIL_COUNT);
  });

  test('shows image with right class', () => {
    const { container } = renderWithProviders(<PictureModal {...modalProps} />);
    const imageWrapperElements = container.getElementsByClassName('picture-modal__photo');

    expect(imageWrapperElements).toHaveLength(1);

    const img = imageWrapperElements?.[0].querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', API_ITEM.download_url);
  });

  test('renders details', () => {
    renderWithProviders(<PictureModal {...modalProps} />);

    const authorElement = screen.getByLabelText('author');
    const descriptionElement = screen.getByLabelText('description');
    const resolutionElement = screen.getByLabelText('resolution');

    expect(authorElement).toHaveTextContent(API_ITEM.author);
    expect(descriptionElement).toHaveTextContent(PICTURE_MODAL_DESCRIPTION);
    expect(resolutionElement).toHaveTextContent(`${API_ITEM.width} x ${API_ITEM.height}`);
  });

  test('click favourites button trigger function and increment counter', async () => {
    renderWithProviders(<PictureModal {...modalProps} />);

    const user = userEvent.setup();

    const favouriteButton = screen.getByTitle('Add to favourites');
    const favouritesCounterLabel = screen.getByText(/favourites/i);
    const favouritesCounterValue = favouritesCounterLabel.nextElementSibling;
    const favouriteCount = Number(favouritesCounterValue?.textContent?.replace(/\D/g, ''));

    expect(favouriteCount).toBe(DETAIL_COUNT);

    await user.click(favouriteButton);

    await waitFor(() => {
      expect(screen.getByTitle('Remove from favourites')).toBeInTheDocument();
    });

    const updatedFavouriteCounterValue = favouritesCounterLabel.nextElementSibling;
    const updatedFavouriteCount = Number(updatedFavouriteCounterValue?.textContent?.replace(/\D/g, ''));
    expect(updatedFavouriteCount).toBe(DETAIL_COUNT + 1);
  });
});

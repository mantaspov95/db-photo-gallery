import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GalleryPictureApiItem } from '@hooks/useGallery.types';
import FavouritesProvider from '@context/Favourites/FavouritesProvider';
import PictureModal from './PictureModal';
import { getPictureModalCounter } from './PictureModal.logic';
import { PICTURE_MODAL_DESCRIPTION } from './PicutreModal.constants';

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

  const modalProps = { isOpen: true, onClose: () => {}, apiItem: API_ITEM };

  beforeEach(() => {
    jest.clearAllMocks();
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    Storage.prototype.getItem = jest.fn().mockReturnValue('[]');
    Storage.prototype.setItem = jest.fn();
    (getPictureModalCounter as jest.Mock).mockReturnValue(DETAIL_COUNT);
  });

  it('shows image with right class', () => {
    const { container } = renderWithProviders(<PictureModal {...modalProps} />);
    const imageWrapperElements = container.getElementsByClassName('picture-modal__photo');

    expect(imageWrapperElements).toHaveLength(1);

    const img = imageWrapperElements?.[0].querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', API_ITEM.download_url);
  });

  it('renders details', () => {
    renderWithProviders(<PictureModal {...modalProps} />);

    const authorElement = screen.getByLabelText('author');
    const descriptionElement = screen.getByLabelText('description');
    const resolutionElement = screen.getByLabelText('resolution');

    expect(authorElement).toHaveTextContent(API_ITEM.author);
    expect(descriptionElement).toHaveTextContent(PICTURE_MODAL_DESCRIPTION);
    expect(resolutionElement).toHaveTextContent(`${API_ITEM.width} x ${API_ITEM.height}`);
  });

  it('renders counters with correct values', () => {
    renderWithProviders(<PictureModal {...modalProps} />);
    const countFormatted = DETAIL_COUNT.toLocaleString();
    const favouritesCounterElement = screen.getByLabelText(/favourites/i);
    const downloadsCounterElement = screen.getByLabelText(/downloads/i);
    const viewsCounterElement = screen.getByLabelText(/views/i);

    const favouritesAriaLabel = favouritesCounterElement.getAttribute('aria-label');
    const downloadsAriaLabel = downloadsCounterElement.getAttribute('aria-label');
    const viewsAriaLabel = viewsCounterElement.getAttribute('aria-label');

    expect(favouritesAriaLabel).toBe(`${countFormatted} favourites`);
    expect(downloadsAriaLabel).toBe(`${countFormatted} downloads`);
    expect(viewsAriaLabel).toBe(`${countFormatted} views`);
  });

  it('click favourites button trigger function and increment coutner', async () => {
    renderWithProviders(<PictureModal {...modalProps} />);

    const favouriteButton = screen.getByTitle('Add to favourites');
    const favouritesCounterElement = screen.getByLabelText(/favourites/i);
    const ariaLabel = favouritesCounterElement.getAttribute('aria-label');
    const countString = ariaLabel?.replace(/favourites/i, '').replace(/\D/g, '');
    const favouriteCount = Number(countString);
    expect(favouriteCount).toBe(DETAIL_COUNT);

    fireEvent.click(favouriteButton);

    await waitFor(() => {
      expect(screen.getByTitle('Remove from favourites')).toBeInTheDocument();
    });

    const updatedFavouritesCounterElement = screen.getByLabelText(/favourites/i);
    const updatedAriaLabel = updatedFavouritesCounterElement.getAttribute('aria-label');
    const updatedCountString = updatedAriaLabel?.replace(/favourites/i, '').replace(/\D/g, '');
    const updatedFavouriteCount = Number(updatedCountString);
    expect(updatedFavouriteCount).toBe(DETAIL_COUNT + 1);
  });
});

import { getPictureModalCounter } from './PictureModal.logic';

jest.mock('@hooks/useFavourites');
jest.mock('./PictureModal.logic', () => ({
  getPictureModalCounter: jest.fn(),
}));

describe('PictureModal', () => {
  const mockHandleFavouritesChange = jest.fn();
  const mockOnClose = jest.fn();

  const apiItem = {
    id: '1',
    author: 'John Doe',
    download_url: 'https://picsum.com/photo.jpg',
    width: 1920,
    height: 1080,
  };
});

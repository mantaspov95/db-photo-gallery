import type { ReactElement } from 'react';
import { PICTURES_PER_PAGE } from '@constants/constants';
import { useGetPhotosList } from '@components/Gallery/hooks';
import GalleryPicture from '../GalleryPicture';

const GalleryHome = (): ReactElement[] | null => {
  const { data } = useGetPhotosList(1, PICTURES_PER_PAGE); // TODO - to change props with pagination/infinite scroll values

  return data && data.length > 0 ? data.map((item) => <GalleryPicture key={item.id} apiItem={item} />) : null;
};

export default GalleryHome;

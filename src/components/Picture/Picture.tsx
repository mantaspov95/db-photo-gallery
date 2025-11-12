import type { ReactElement } from 'react';
import { getPictureAlt } from './Picture.logic';

type PictureProps = {
  src: string;
  author: string;
  id: string;
};

const Picture = ({ src, author, id }: PictureProps): ReactElement => {
  const alt = getPictureAlt(author, id);

  return <img src={src} alt={alt} />;
};

export default Picture;

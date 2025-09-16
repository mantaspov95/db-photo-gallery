import type { GALLERY_PICTURE_VARIANTS } from './GalleryPicture.enums';

export type GalleryPictureVariant = (typeof GALLERY_PICTURE_VARIANTS)[keyof typeof GALLERY_PICTURE_VARIANTS];

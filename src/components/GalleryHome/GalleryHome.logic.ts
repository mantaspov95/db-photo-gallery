export const getPhotosListApiUrl = (page: number, limit: number): string =>
  `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

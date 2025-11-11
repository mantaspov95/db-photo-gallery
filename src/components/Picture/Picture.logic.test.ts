import { getPictureAlt } from './Picture.logic';

test('returns alt text by author and id', () => {
  expect(getPictureAlt('hello', '123')).toBe('By hello, ID: 123');
});

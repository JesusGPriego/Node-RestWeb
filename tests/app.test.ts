import { sampleFunction } from '@/utils/sampleFunction';

describe('app', () => {
  test('should be true', () => {
    const result = sampleFunction();
    expect(result).toBeTruthy();
  });
});

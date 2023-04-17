import { describe } from 'vitest';
import searchReduser, { setSearchQuery } from '../store/searchSlice';

describe('searchSlice', () => {
  it('should return default state when passed empty action', () => {
    const result = searchReduser(undefined, { type: '' });
    expect(result).toStrictEqual({ searchQuery: '' });
  });
  it('should set search query', () => {
    const action = { type: setSearchQuery.type, payload: 'morty' };
    const result = searchReduser({ searchQuery: '' }, action);
    expect(result).toStrictEqual({ searchQuery: 'morty' });
  });
});

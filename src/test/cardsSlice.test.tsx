import { describe, vi } from 'vitest';
import cardsReduser, { setCurrentPage, fetchCards } from '../store/cardsSlice';

const initialState = {
  cardsList: [],
  pages: 1,
  currentPage: 1,
  count: 0,
  cardsPerRage: 20,
  loading: false,
  error: null,
};

describe('cardsSlice', () => {
  it('should return default state when passed empty action', () => {
    const result = cardsReduser(undefined, { type: '' });
    expect(result).toStrictEqual(initialState);
  });
  it('should set current page', () => {
    const action = { type: setCurrentPage.type, payload: 5 };
    const result = cardsReduser(initialState, action);
    expect(result.currentPage).toBe(5);
  });
  it('should change status with fetchCards.pending action', () => {
    const action = { type: fetchCards.pending };
    const result = cardsReduser(initialState, action);
    expect(result.loading).toBe(true);
    expect(result.error).toBeNull();
  });
  it('should fetch cards with fetchCards.fulfilled action', () => {
    const data = {
      info: {
        count: 826,
        pages: 42,
      },
      results: [
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
          ],
          url: 'https://rickandmortyapi.com/api/character/2',
          created: '2017-11-04T18:50:21.651Z',
        },
      ],
      error: '',
    };

    const action = { type: fetchCards.fulfilled.type, payload: data };
    const result = cardsReduser(initialState, action);
    expect(result.loading).toBe(false);
    expect(result.cardsList).not.toBe([]);
    expect(result.count).toBe(826);
    expect(result.pages).toBe(42);
  });
  it('should fetch cards with fetchCards.rejected action', () => {
    const action = { type: fetchCards.rejected.type, payload: 'Server Error!' };
    const result = cardsReduser(initialState, action);
    expect(result.loading).toBe(false);
    expect(result.error).toBe('Server Error!');
    expect(result.cardsList).not.toBe([]);
  });
});

// global.fetch = jest.fn();

describe('fetch cards', () => {
  it('should fetch cards with resolve response', async () => {
    const mockCards = [
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
        ],
        url: 'https://rickandmortyapi.com/api/character/2',
        created: '2017-11-04T18:50:21.651Z',
      },
    ];

    const fetch = vi.fn();
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockCards),
    });

    const dispatch = vi.fn();
    const thunk = fetchCards();

    await thunk(
      dispatch,
      () => ({
        cards: {
          cardsList: [],
          pages: 1,
          currentPage: 1,
          count: 0,
          cardsPerRage: 20,
          loading: false,
          error: null,
        },
        search: { searchQuery: '' },
        form: { formCards: [] },
      }),
      {}
    );

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe('cards/fetchCards/pending');
    expect(end[0].type).toBe('cards/fetchCards/fulfilled');
  });
  // it('should fetch cards with reject response', async () => {
  //   const fetch = vi.fn();
  //   fetch.mockResolvedValue({
  //     ok: false,
  //     json: () => Promise.reject('Server Error!'),
  //   });

  //   const dispatch = vi.fn();
  //   const thunk = fetchCards();

  //   await thunk(
  //     dispatch,
  //     () => ({
  //       cards: {
  //         cardsList: [],
  //         pages: 1,
  //         currentPage: 1,
  //         count: 0,
  //         cardsPerRage: 20,
  //         loading: false,
  //         error: null,
  //       },
  //       search: { searchQuery: '' },
  //       form: { formCards: [] },
  //     }),
  //     { rejected: 'Server Error!' }
  //   );

  //   const { calls } = dispatch.mock;
  //   expect(calls).toHaveLength(2);
  //   const [start, end] = calls;
  //   console.log(start, end);
  //   expect(start[0].type).toBe('cards/fetchCards/pending');
  //   expect(end[0].type).toBe('cards/fetchCards/rejected');
  //   expect(end[0].meta.rejectWithValue).toBe(true);
  // });
});

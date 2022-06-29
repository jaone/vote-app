import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = {
  voteList: [
    {
      id: nanoid(),
      title: 'Hacker News',
      link: 'https://news.ycombinator.com/',
      votePoint: '6',
      lastVoteTime: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
      id: nanoid(),
      title: 'Product Hunt',
      link: 'https://producthunt.com/',
      votePoint: '4',
      lastVoteTime: sub(new Date(), { minutes: 5 }).toISOString(),
    },
    {
      id: nanoid(),
      title: 'REDDIT',
      link: 'https://www.reddit.com/',
      votePoint: '4',
      lastVoteTime: sub(new Date(), { minutes: 2 }).toISOString(),
    },
  ],
};

export const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    voteChange: {
      reducer(state, action) {
        console.log({ state, action });
        // state.voteList.find(id => id === action.payload.id) = payload;
      },
      prepare(id, voteType, votePoint) {
        return {
          payload: {
            id,
            lastVoteTime: new Date().toISOString(),
            votePoint:
              voteType === 'inc'
                ? votePoint + 1
                : votePoint > 0
                ? votePoint - 1
                : 0,
          },
        };
      },
    },
  },
});

export const getVoteList = (state) => state.vote.voteList;

// Action creators are generated for each case reducer function
export const { voteChange } = voteSlice.actions;

export default voteSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Market, MarkketUpdateList } from '../../../api/Models/Markets';

import { fetchMarkets } from '../../../api';

interface InitialState {
  isLoading: boolean;
  data: Market[];
  error: string | null;
  searchParam: string;
}

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: '',
  searchParam: '',
};

export const getMarkets = createAsyncThunk(
  'markets/getMarkets',
  async (_data, thunkApi) => {
    try {
      const markets = await fetchMarkets();
      return markets;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    setSearchParam: (state, action: PayloadAction<string>) => {
      state.searchParam = action.payload;
    },
    updatePrice: (state, action: PayloadAction<string>) => {
      const updatedList: MarkketUpdateList = JSON.parse(action.payload);
      if (updatedList && state.data.length > 0) {
        state.data.forEach((market) => {
          if (updatedList[market.id]) {
            market.price = updatedList[market.id].price;
            market.change = updatedList[market.id].change;
          }
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMarkets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getMarkets.fulfilled,
        (state, action: PayloadAction<Market[] | undefined>) => {
          state.isLoading = false;
          if (action.payload && action.payload.length !== 0) {
            state.data = action.payload;
          }
          state.error = null;
        }
      )
      .addCase(getMarkets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Somthing went wrong';
      });
  },
});

export default marketsSlice.reducer;
export const { setSearchParam, updatePrice } = marketsSlice.actions;

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import marketsSlice from './features/markets/marketsSlice';

const store = configureStore({
  reducer: {
    markets: marketsSlice,
  },
});

export const ReduxProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

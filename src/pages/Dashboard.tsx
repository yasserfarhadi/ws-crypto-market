import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getMarkets } from '../redux/features/markets/marketsSlice';
import GridView from '../containers/GridView';
import CardView from '../containers/CardView';
import Container from '@mui/material/Container';
import { useWSContext } from '../context/WS';
import { updatePrice } from '../redux/features/markets/marketsSlice';

const Dashboard = () => {
  const [isReady, val, send] = useWSContext();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (send) {
      send(JSON.stringify({ method: 'sub_to_price_info' }));
    }
  }, [isReady, send]);

  React.useEffect(() => {
    // console.log(val);
    dispatch(updatePrice(val));
  }, [val, dispatch]);

  React.useEffect(() => {
    dispatch(getMarkets());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth="lg">
        <GridView />
        <CardView />
      </Container>
    </div>
  );
};

export default Dashboard;

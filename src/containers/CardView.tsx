import React from 'react';
import Pagination from '../components/Pagination/Pagination';
import { useAppSelector } from '../redux/hooks';
import Container from '@mui/material/Container';
import CardList from '../components/Card/CardList';
import { Market } from '../api/Models/Markets';

const CardView = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { markets, searchParam } = useAppSelector((store) => ({
    searchParam: store.markets.searchParam,
    markets: store.markets.data,
  }));

  const filteredUsers = React.useMemo(
    (listArr: Market[] = []) => {
      markets.forEach((market) => {
        if (
          market.title.toLowerCase().includes(searchParam.toLowerCase()) ||
          market.price.toLowerCase().includes(searchParam.toLowerCase()) ||
          market.price_info
            .toString()
            .toLowerCase()
            .includes(searchParam.toLowerCase())
        ) {
          listArr.push(market);
        }
      });

      return listArr;
    },
    [markets, searchParam]
  );

  const cutList = React.useMemo(
    (listArr: Market[] = []) => {
      const cutPageItemsStart = (currentPage - 1) * 4;
      const cutPageItemsEnd = currentPage * 4;

      filteredUsers.forEach((item, index) => {
        if (index >= cutPageItemsStart && index < cutPageItemsEnd) {
          listArr.push(item);
        }
      });
      return listArr;
    },
    [filteredUsers, currentPage]
  );

  return (
    <div>
      <Container maxWidth="lg">
        <CardList list={cutList} />
        <Pagination
          currentPage={currentPage}
          limit={4}
          total={filteredUsers.length}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </Container>
    </div>
  );
};

export default CardView;

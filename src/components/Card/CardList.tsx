import React from 'react';
import Card from './Card';
import { Market } from '../../api/Models/Markets';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

interface Props {
  list: Market[];
  // setModalHandler: (id: number) => void;
}
const CardList: React.FC<Props> = ({ list }) => {
  return (
    <CardContainer>
      {list.map((market) => {
        return (
          <Card
            title={market.title}
            price={market.price}
            primaryImage={market.currency1.image}
            secondaryImage={market.currency2.image}
            change={market.change}
            key={market.id}
            // setModalHandler={setModalHandler}
            // id={market.id}
          />
        );
      })}
    </CardContainer>
  );
};

export default CardList;

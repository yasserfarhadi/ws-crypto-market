import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  width: 180px;
  height: 300px;
`;

const StyledCardActionArea = styled(CardActionArea)`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCardMedia = styled(CardMedia)`
  width: 70px;
  height: 70px;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  word-wrap: break-word;
`;

interface Props {
  title: string;
  price: string;
  primaryImage: string;
  secondaryImage: string;
  change?: number;
  // setModalHandler: (id: number) => void;
}

const UserCard: React.FC<Props> = ({
  title,
  price,
  primaryImage,
  secondaryImage,
  change,
  // id,
  // setModalHandler,
}) => {
  return (
    <StyledCard>
      <StyledCardActionArea>
        <StyledCardMedia image={primaryImage} />
        <StyledCardMedia image={secondaryImage} />
        <StyledCardContent>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            price: {price}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            change: {change}
          </Typography>
        </StyledCardContent>
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default UserCard;

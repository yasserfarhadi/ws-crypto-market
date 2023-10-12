import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridApi } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Container from '@mui/material/Container';
import { useAppSelector } from '../redux/hooks';
import { Market } from '../api/Models/Markets';

interface Row {
  id: number;
  title: string;
  price: string;
}

const GridView = () => {
  const gridRef = React.useRef<GridApi | null>();

  const { param, data } = useAppSelector((store) => ({
    param: store.markets.searchParam,
    data: store.markets.data,
  }));
  React.useEffect(() => {
    if (gridRef.current) {
      gridRef.current.setQuickFilter(param);
    }
  }, [param]);

  const rowsData = React.useMemo(
    (rows: Row[] = []): Row[] => {
      if (data && data.length > 0) {
        data.forEach((item: Market) => {
          rows.push({
            id: item.id,
            title: item.title,
            price: item.price,
          });
        });
      }
      return rows;
    },
    [data]
  );

  const columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 },
  ];

  return (
    <div>
      <Container maxWidth="xl" sx={{ paddingTop: '20px' }}>
        <div
          className="ag-theme-alpine"
          style={{ height: '330px', width: '100%' }}
        >
          <AgGridReact
            rowData={rowsData}
            columnDefs={columnDefs}
            onGridReady={(grid) => (gridRef.current = grid.api)}
            pagination={true}
            paginationPageSize={5}
          ></AgGridReact>
        </div>
      </Container>
    </div>
  );
};

export default GridView;

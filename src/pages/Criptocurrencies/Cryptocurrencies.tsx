import { FunctionComponent, useEffect, useState } from 'react';
import { Pagination, Table, TablePaginationConfig, Typography } from 'antd';
import { AlignType } from 'rc-table/lib/interface'
import useCryptocurrencies from '../../services/useCryptocurrencies';
import {PositiveNegativeLabel, LabelWithTooltip} from '../../commons/components';
import { CirculatingSupply, MarketCup, Volume24 } from '../../commons/constants/tooltips';
import { formatNumber, formatUSD } from '../../commons/utils/numberFormaters';
import CustomPaginator from '../../commons/components/CustomPaginator/CustomPaginator';
import './Cryptocurrencies.css'

const { Title, Text } = Typography;

interface Quote {
  USD: {
    price: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap: number;
    volume_24h: number;
  }
}
const columns = [
  {
    title: '#',
    dataIndex: 'cmc_rank',
    sorter: true,
    render: (cmc_rank: string) => <Text className='text-typography'>{cmc_rank}</Text>
  },
  {
    title: 'Name',
    dataIndex: 'name', //TODO add symbol
    render: (name: string, row: any ) => <Text className='text-typography'>{name}  <Text className='symbol'>{row.symbol}</Text></Text>,
    sorter: true,
  },
  {
    title: 'Price',
    dataIndex: 'quote',
    render: (quote: Quote) => <Text className='text-typography'>{formatUSD(quote?.USD.price)}</Text>,
    sorter: true,
    align: 'right' as AlignType,
  },
  {
    title: '24h',
    dataIndex: 'quote',
    render: (quote: Quote) => <PositiveNegativeLabel value={quote?.USD.percent_change_24h.toFixed(2)} suffix='%'/>,
    sorter: true,
    align: 'right' as AlignType,
  },
  {
    title: '7d',
    dataIndex: 'quote',
    render: (quote: Quote) => <PositiveNegativeLabel value={quote?.USD.percent_change_7d.toFixed(2)} suffix='%'/>,
    sorter: true,
    align: 'right' as AlignType,
  },
  {
    title: <LabelWithTooltip text={'Market Cup'} tooltip={MarketCup}/>,
    dataIndex: 'quote',
    render: (quote: Quote) => <Text className='text-typography'>{formatUSD(quote?.USD.market_cap)}</Text>,
    sorter: true,
    align: 'right' as AlignType,
  },
  {
    title: <LabelWithTooltip text={'Volume(24h)'} tooltip={Volume24}/>,
    dataIndex: 'quote',
    render: (quote: Quote) => <Text className='text-typography'>{formatUSD(quote?.USD.volume_24h)}</Text>,
    sorter: true,
    align: 'right' as AlignType,
  },
  {
    title: <LabelWithTooltip text={'Circulating Supply'} tooltip={CirculatingSupply}/>,
    dataIndex: 'circulating_supply',
    sorter: true,
    render: (circulating_supply: string, row: any) => <Text className='text-typography'>{formatNumber(circulating_supply)} <Text className='symbol'>{row.symbol}</Text></Text>,
    align: 'right' as AlignType,
  },
];

const paginationDefault = {
  current: 1,
  pageSize: 100,
  sort: 'market_cap',
  sort_dir: 'desc'
}
const Cryptocurrencies: FunctionComponent = () => {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState(paginationDefault)
  const start = (pagination.current - 1) * pagination.pageSize + 1;
  const limit = pagination.pageSize;
  const { response, error } = useCryptocurrencies(start, limit, pagination.sort, pagination.sort_dir);
  
  useEffect(()=>{
    if(response?.data){
      setList(response.data);
    }
  },[response])

  const handleTableChange = (pag: any, filters: any, sorter: any) => {
    setPagination({
      ...pagination, 
      sort: sorter.field,
      sort_dir: sorter.order === 'ascend' ? 'asc' : 'desc'
    });
  };
  
  const handleChangePagination = (page: number) =>{
    setPagination({...pagination, current: page});
  }
  return (
    <div>
      <Title>Today's Cryptocurrency Prices by Market Cap</Title>
        <Table dataSource={list} 
          columns={columns}
          pagination={false}
          onChange={handleTableChange}/>
        <CustomPaginator 
          page={pagination.current}
          disableLeft={pagination.current<2}
          onChange={handleChangePagination}/>
    </div>
)};

export default Cryptocurrencies
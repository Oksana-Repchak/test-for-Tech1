import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import s from './DashboardView.module.css';
import SortSelector from '../../components/SortSelector';
import Table from '../../components/Table';

const initialState = [
  {
    id: 'usd-1',
    price: 0.33063,
    exchange: 'usd',
    sell: 0.334,
    amount: 353.3,
    free: 1.01,
    profit: 1,
    fees: 0.2,
    adj: 11111,
  },

  {
    id: 'uan-1',
    price: 30,
    exchange: 'uan',
    sell: 69.57002,
    amount: 2.1449,
    free: 0.27,
    profit: 0.2,
    fees: 0.2,
    adj: 11111,
  },
  {
    id: 'usd-2',
    price: 65.50671,
    exchange: 'usd',
    sell: 69.57002,
    amount: 2.1449,
    free: 0.27,
    profit: 0.2,
    fees: 0.2,
    adj: 11111,
  },
  {
    id: 'uan-2',
    price: 65.50671,
    exchange: 'uan',
    sell: 69.57002,
    amount: 2.1449,
    free: 0.27,
    profit: 0.2,
    fees: 0.2,
    adj: 11111,
  },
  {
    id: 'uan-3',
    price: 40,
    exchange: 'uan',
    sell: 69.57002,
    amount: 2.1449,
    free: 0.27,
    profit: 0.2,
    fees: 0.2,
    adj: 11111,
  },
];

const sortOptions = [
  { value: 'usd', label: 'usd' },
  { value: 'uan', label: 'uan' },
];

const DashboardView = () => {
  const history = useHistory();
  const location = useLocation();
  const [expenses, setExpenses] = useState(initialState);

  const sortOrder = new URLSearchParams(location.search).get('sortBy') ?? 'usd';

  const onSortOrderChange = order => {
    history.push({ ...location, search: `sortBy=${order}` });
  };

  useEffect(() => {
    if (location.search !== '') {
      return;
    }

    history.push({ ...location, search: `sortBy=usd` });
  }, [history, location]);

  useEffect(() => {
    setExpenses(prevExpenses =>
      [...prevExpenses].filter(sortBy => {
        return sortOrder === sortBy.exchange;
      }),
    );
  }, [sortOrder]);

  return (
    <div className={s.container}>
      <div className={s.dashboardFilter}>
        <p>Buy advice exchange</p>
        <p>Buy advice currency</p>
        <p>Buy advice currency</p>
        <p>Sell advice currency</p>
        {/* <input onChange={e => setName(e.target.value)} /> */}
        <Table items={expenses} />
      </div>
      <div className={s.dashboardProfitContainer}>
        <div className={s.dashboardProfit}>
          <p>dashboard profit currency</p>
          <SortSelector
            options={sortOptions}
            onChange={onSortOrderChange}
            value={sortOrder}
          />
        </div>

        <div className={s.instances}>instances</div>
      </div>
    </div>
  );
};

export default DashboardView;

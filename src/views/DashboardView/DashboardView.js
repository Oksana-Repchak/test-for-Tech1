import s from './DashboardView.module.css';

const DashboardView = () => (
  <div className={s.container}>
    <div className={s.dashboardFilter}>DashboardView</div>
    <div className={s.dashboardProfitContainer}>
      <div className={s.dashboardProfit}>dashboardProfit</div>
      <div className={s.instances}>instances</div>
    </div>
  </div>
);

export default DashboardView;

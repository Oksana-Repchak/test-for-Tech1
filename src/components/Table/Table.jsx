export default function Table({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Buy exchange pair</th>
          <th>Buy price</th>
          <th>Sell exchange</th>
          <th>Sell price</th>
          <th>Trade amount</th>
          <th>Arb%(Free%)</th>
          <th>Exp. profit USD</th>
          <th>Exp. fees USD</th>
          <th>Adj.</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.price}</td>
            <td>{item.exchange}</td>
            <td>{item.sell}</td>
            <td>{item.amount}</td>
            <td>{item.free}</td>
            <td>{item.profit}</td>
            <td>{item.fees}</td>
            <td>{item.adj}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

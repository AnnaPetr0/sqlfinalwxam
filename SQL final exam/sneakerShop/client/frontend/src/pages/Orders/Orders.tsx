import { useOrdersVM } from './OrdersVM';
import styles from './Orders.module.scss';

function Orders() {
  const { orders, error } = useOrdersVM();

  return (
    <div className={styles.container}>
      <h2>Order List:</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>שם משתמש</th>
            <th>תאריך הזמנה</th>
            <th>סכום כולל</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.orderID}>
              <td>{o.orderID}</td>
              <td>{o.name}</td>
              <td>{o.order_date}</td>
              <td>₪{o.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;

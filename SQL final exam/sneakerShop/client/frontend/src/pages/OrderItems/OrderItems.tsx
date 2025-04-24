import { useOrderItemsVM } from './OrderItemsVM';
import styles from './OrderItems.module.scss';

function OrderItems() {
  const { items, error } = useOrderItemsVM();

  return (
    <div className={styles.container}>
      <h2>📦 פריטי הזמנות</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <div className={styles.grid}>
        {items.map(item => (
          <div key={item.ordItemID} className={styles.card}>
            <img src={item.image_URL} alt={item.model} />
            <h3>{item.brand} {item.model}</h3>
            <p>כמות: {item.quantity}</p>
            <p>מחיר ליחידה: ₪{item.unit_price}</p>
            <p>מס׳ הזמנה: #{item.orderID}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderItems;

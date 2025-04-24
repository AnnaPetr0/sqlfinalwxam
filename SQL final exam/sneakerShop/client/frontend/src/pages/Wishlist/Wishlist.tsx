import { useWishlistVM } from './WishlistVM';
import styles from './Wishlist.module.scss';

function Wishlist() {
  const { wishlist, error } = useWishlistVM();

  return (
    <div className={styles.container}>
      <h2>My WishList:</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <div className={styles.grid}>
        {wishlist.map(item => (
          <div key={item.wishID} className={styles.card}>
            <img src={item.image_URL} alt={item.model} />
            <h3>{item.brand} {item.model}</h3>
            <p>נוסף בתאריך: {item.date_added}</p>
            <p>משתמש: {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;

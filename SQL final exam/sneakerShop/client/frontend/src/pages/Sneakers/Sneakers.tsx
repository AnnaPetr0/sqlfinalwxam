import { useSneakersVM } from './SneakersVM';
import styles from './Sneakers.module.scss';
import WishlistButton from '../../components/WishlistButton/WishlistButton';

function Sneakers() {
  const { sneakers, message, addToWishlist } = useSneakersVM();

  return (
    <div className={styles.container}>
      <h2>קטלוג נעליים</h2>
      {message && <p style={{ textAlign: 'center', color: 'green' }}>{message}</p>}
      <div className={styles.grid}>
        {sneakers.map(s => (
          <div key={s.snkID} className={styles.card}>
            <img src={s.image_URL} alt={s.model} />
            <h3>{s.brand} {s.model}</h3>
            <p>מידה: {s.size}</p>
            <p className={styles.price}>₪{s.price}</p>
            <p>{s.description}</p>
            <div className={styles.actions}>
              <WishlistButton onClick={() => addToWishlist(s.snkID)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sneakers;

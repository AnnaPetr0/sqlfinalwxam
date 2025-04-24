import styles from './WishlistButton.module.scss';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

function WishlistButton({ onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
       Add to Wishlist
    </button>
  );
}

export default WishlistButton;

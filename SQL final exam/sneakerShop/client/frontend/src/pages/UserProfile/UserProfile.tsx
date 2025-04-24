import { useUserProfileVM } from './UserProfileVM';
import styles from './UserProfile.module.scss';

function UserProfile() {
  const { user, error } = useUserProfileVM();

  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!user) return <p style={{ textAlign: 'center' }}>טוען פרטי משתמש...</p>;

  return (
    <div className={styles.profile}>
      <h2>👤 פרטי משתמש</h2>

      <div className={styles.field}>
        <label>שם מלא:</label>
        <p>{user.name}</p>
      </div>

      <div className={styles.field}>
        <label>דוא"ל:</label>
        <p>{user.email}</p>
      </div>

      <div className={styles.field}>
        <label>מספר מזהה:</label>
        <p>{user.userID}</p>
      </div>
    </div>
  );
}

export default UserProfile;

import { useState } from 'react';
import { useAuthVM } from './AuthVM';
import styles from './Auth.module.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login, error } = useAuthVM();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) navigate('/');
  };

  return (
    <div className={styles.authContainer}>
      <h2>🔐 התחברות</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">התחבר</button>
      </form>
    </div>
  );
}

export default Login;

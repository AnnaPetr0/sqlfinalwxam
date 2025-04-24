import { useState } from 'react';
import { useAuthVM } from './AuthVM';
import styles from './Auth.module.scss';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { signUp, error } = useAuthVM();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signUp(name, email, password);
    if (result) navigate('/login');
  };

  return (
    <div className={styles.authContainer}>
      <h2>📝 הרשמה</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">צור משתמש</button>
      </form>
    </div>
  );
}

export default SignUp;

import { useState } from 'react';
import API from '../../services/api';

export function useAuthVM() {
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      return res.data.user;
    } catch (err) {
      setError('שגיאה בהתחברות');
      return null;
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      const res = await API.post('/auth/signup', { name, email, password });
      return res.data;
    } catch (err) {
      setError('שגיאה בהרשמה');
      return null;
    }
  };

  return { login, signUp, error };
}

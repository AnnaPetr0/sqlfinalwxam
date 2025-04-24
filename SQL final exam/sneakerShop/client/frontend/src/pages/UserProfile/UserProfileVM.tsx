import { useEffect, useState } from 'react';
import API from '../../services/api';
import { User } from '../../models/UserModel';

export function useUserProfileVM(userID: number = 1) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    API.get(`/users`)
      .then(res => {
        const found = res.data.find((u: User) => u.userID === userID);
        if (found) setUser(found);
        else setError('המשתמש לא נמצא');
      })
      .catch(() => setError('⚠️ שגיאה בטעינת פרטי המשתמש'));
  }, [userID]);

  return { user, error };
}

import { useEffect, useState } from 'react';
import API from '../../services/api';
import { Sneaker } from '../../models/SneakerModel';

export function useSneakersVM() {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    API.get('/sneakers')
      .then(res => setSneakers(res.data))
      .catch(() => setMessage('sneakers load error'));
  }, []);

  const addToWishlist = async (snkID: number) => {
    try {
      await API.post('/wishlist', {
        userID: 1,
        snkID,
        date_added: new Date().toISOString().split('T')[0]
      });
      setMessage('added to wishlist');
      setTimeout(() => setMessage(null), 2000);
    } catch {
      setMessage('error add sneaker to the list');
      setTimeout(() => setMessage(null), 2000);
    }
  };

  return { sneakers, message, addToWishlist };
}

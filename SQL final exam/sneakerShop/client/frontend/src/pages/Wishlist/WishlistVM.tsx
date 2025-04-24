import { useEffect, useState } from 'react';
import API from '../../services/api';
import { WishlistItem } from '../../models/WishlistModel';

export function useWishlistVM() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    API.get('/wishlist')
      .then(res => setWishlist(res.data))
      .catch(() => setError('error to load wishlist'));
  }, []);

  return { wishlist, error };
}

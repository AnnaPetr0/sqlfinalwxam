import { useEffect, useState } from 'react';
import API from '../../services/api';
import { OrderItem } from '../../models/OrderItemModel';

export function useOrderItemsVM() {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    API.get('/order-items')
      .then(res => setItems(res.data))
      .catch(() => setError(' שגיאה בטעינת פריטי ההזמנה'));
  }, []);

  return { items, error };
}

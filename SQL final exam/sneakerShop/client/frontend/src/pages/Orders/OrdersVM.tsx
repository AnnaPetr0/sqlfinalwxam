import { useEffect, useState } from 'react';
import API from '../../services/api';
import { Order } from '../../models/OrderModel';

export function useOrdersVM() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    API.get('/orders')
      .then(res => setOrders(res.data))
      .catch(() => setError('Error to load orders'));
  }, []);

  return { orders, error };
}

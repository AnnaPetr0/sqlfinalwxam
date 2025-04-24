import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoutes from './routes/users';
import sneakersRoutes from './routes/sneakers';
import ordersRoutes from './routes/orders';
import orderItemsRoutes from './routes/orderItems';
import wishlistRoutes from './routes/wishlist';
import authRoutes from './routes/auth';






dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/sneakers', sneakersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/order-items', orderItemsRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/auth', authRoutes);




app.get('/', (_req, res) => {
  res.send('Sneaker API is running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
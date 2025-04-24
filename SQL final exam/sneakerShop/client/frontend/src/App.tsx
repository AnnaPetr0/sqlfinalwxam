import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Sneakers from './pages/Sneakers/Sneakers';
import Wishlist from './pages/Wishlist/Wishlist';
import Orders from './pages/Orders/Orders';
import OrderItems from './pages/OrderItems/OrderItems';
import UserProfile from './pages/UserProfile/UserProfile';
import Login from './pages/Auth/Login';      
import SignUp from './pages/Auth/SignUp';    
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav">
          <h1>Sneaker Shop</h1>
          <ul>
            <li><NavLink to="/" end>🛍 Sneakers</NavLink></li>
            <li><NavLink to="/wishlist">💖 Wishlist</NavLink></li>
            <li><NavLink to="/orders">📄 Orders</NavLink></li>
            <li><NavLink to="/order-items">📦 Order Items</NavLink></li>
            <li><NavLink to="/profile">👤 Profile</NavLink></li>
            <li><NavLink to="/login">🔐 Login</NavLink></li>      
            <li><NavLink to="/signup">📝 Sign Up</NavLink></li>   
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Sneakers />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-items" element={<OrderItems />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />        
            <Route path="/signup" element={<SignUp />} />     
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

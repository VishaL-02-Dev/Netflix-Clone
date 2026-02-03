import './index.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Landing />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/browse" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }>
      </Route>

    </Routes>
  );
}
export default App

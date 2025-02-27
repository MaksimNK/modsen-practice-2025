import { Route, Routes } from 'react-router';
import './App.css';
import { DashBoard } from './components/DashBoard/index';
import { NotFound } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/*' element={<NotFound />} />
    </Routes >
  )
}

export default App;

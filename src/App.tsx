import './App.css';
import { DashBoard } from './components/DashBoard/index';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries';

function App() {
  return (
    <ErrorBoundary>
      <DashBoard />
    </ErrorBoundary>
  )
}

export default App;

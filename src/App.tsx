import { FC } from 'react';
import { Home } from './page/Home';
import './App.css';

export const App: FC = () => {
  return (
    <div className="wrapper">
      <Home />
    </div>
  );
};

export default App;

import { useEffect } from 'react';
import { userObserver } from './auth/firebase';
import './index.css';
import './output.css';
import AppRouter from "./router/AppRouter";


function App() {

  useEffect(() => {
    userObserver()
  }, [])

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

import AuthContextProvider from './context/AuthContextProvider';
import './index.css';
import './output.css';
import AppRouter from "./router/AppRouter";


function App() {



  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;

import AuthContextProvider from './context/AuthContextProvider';
import { ToastContainer } from "react-toastify";
import './index.css';
import './output.css';
import AppRouter from "./router/AppRouter";


function App() {



  return (
    <div className="bg-grey-100 dark:bg-[#23242a]">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;

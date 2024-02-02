import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import routes from './Routes';
import './App.css';


function App() {
  let router = useRoutes(routes)


  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;

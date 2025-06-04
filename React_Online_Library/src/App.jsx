import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {


  return (
    <Provider store={appStore}>
      <Nav />
      <Outlet />
   </Provider>
  )
}

export default App;


import { Provider, useSelector } from 'react-redux';
import './App.scss';
import Page from './Page/Page';
import store from './cartReducer';

function App() {
  return (
    <Provider store={store}>
      <AppContent /> {/* Separate child component for using useSelector */}
    </Provider>
  );
}

const AppContent = () => {
  const modalView = useSelector((state) => state.isModalOpen);
  
  return (
    <div className={modalView ? "background" : "App"}>
      <Page />
    </div>
  );
};

export default App;

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import {
  getPokemonApiFailedRequest,
  getPokemonApiOkReq,
} from './store/actions/pokemon';
import { Modal } from './Modal';
import { closeModal } from './store/actions/modals';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { modals } = useSelector((state: RootState) => state);
  console.log(modals);

  const handleGetSuccessPokemonPayload = () => {
    dispatch(getPokemonApiOkReq(1));
  };

  const handleGetErrorPokemonPayload = () => {
    dispatch(getPokemonApiFailedRequest(null));
  };

  const handleModalClose = (id: number) => {
    dispatch(closeModal(id));
  }

  return (
    <div className='App'>
      {Object.values(modals).map((modal) => (
        <Modal
          key={modal.id}
          id={modal.id}
          title={modal.title}
          children={modal.children}
          onClose={() => handleModalClose(modal.id)}
        />
      ))}
      <header className='App-header'>
        <p>
          <button onClick={handleGetSuccessPokemonPayload}>
            Fetch Pokemon Success
          </button>
        </p>
        <p>
          <button onClick={handleGetErrorPokemonPayload}>
            Fetch Pokemon Error
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;

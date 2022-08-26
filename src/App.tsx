import React from 'react';
import logo from './pokemon-go-logo-hd-image-png-vector-clipart-179087.png';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import {
  getPokemonApiFailedRequest,
  getPokemonApiOkReq,
} from './store/actions/pokemon';

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

  return (
    <div className='App'>
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

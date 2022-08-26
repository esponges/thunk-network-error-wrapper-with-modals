import { asyncThunkHandleError } from '../utils';

export const getPokemonApiOkReq = asyncThunkHandleError<Response, number>(
  'pokemon/api-ok',
  async (arg, thunkAPI) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${arg}`);
    return response.json();
  },
  'Pokemon not found'
);

export const getPokemonApiFailedRequest = asyncThunkHandleError<Response, any>(
  'pokemon/api-failed',
  async (arg, thunkAPI) => {
    const badResponse = await fetch(`https://pokeapi.co/api/v2/pokemonFooError/${arg}`);
    return badResponse.json();
  },
  'Backup error message'
);

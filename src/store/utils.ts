import { createAsyncThunk, AsyncThunkPayloadCreator, AsyncThunk } from '@reduxjs/toolkit';
import { openModal } from './actions/modals';

interface ThunkApiConfig {}
// apologies but I'm not sure how to type this one
// if you know, please let me know in the comments
export const asyncThunkHandleError = <Returned, ThunkArg = any> (
  typePrefix: string,
  thunk: AsyncThunkPayloadCreator<Returned, ThunkArg>,
  errorMessage?: string
): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> =>
  createAsyncThunk(typePrefix, async (arg, thunkAPI) => {
    try {
      // actually call the thunk
      return await thunk(arg, thunkAPI);
    } catch (error: any) {
      // here we will dispatch the modal with the error message
      thunkAPI.dispatch(
        openModal({
          title: `Error in ${typePrefix}`,
          children: `${
            error instanceof Error ? error.message : 'Unknown error'
          }`,
        })
      );
      return thunkAPI.rejectWithValue(error.response?.data || errorMessage);
    }
  });

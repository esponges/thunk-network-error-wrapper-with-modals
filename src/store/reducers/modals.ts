import { createSlice } from '@reduxjs/toolkit';
import { closeModal, ModalProps, openModal } from '../actions/modals';

interface ModalsInitialState {
  [key: number]: ModalProps;
}

const initialState: ModalsInitialState = {
  1: {
    title: 'Foo',
    children: 'Foo',
  },
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(openModal.fulfilled, (state, action) => {
      state[action.payload.id] = action.payload;
    });
    builder.addCase(closeModal.fulfilled, (state, action) => {
      delete state[action.payload.id];
    });
  },
});

export default modalsSlice.reducer;

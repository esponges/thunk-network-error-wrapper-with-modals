import { createAsyncThunk } from '@reduxjs/toolkit';

export interface ModalProps {
  title: string;
  children: React.ReactNode;
}

export const openModal = createAsyncThunk(
  'modals/open',
  async (props: ModalProps, { dispatch }) => {
    const randomNumber = Math.floor(Math.random() * 100);

    return { id: randomNumber, ...props };
  }
);

export const closeModal = createAsyncThunk(
  'modals/close',
  async (id: number, { dispatch }) => {

    return { id };
  }
);

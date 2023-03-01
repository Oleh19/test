import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState, addItems } from './types';

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<addItems>) {
      state.list.push({
        id: state.list.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        status: false,
      });
    },
    toggleStatus(state, action: PayloadAction<number>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.status = !toggledTodo?.status;
      }
    },
  },
});

export const { addTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;

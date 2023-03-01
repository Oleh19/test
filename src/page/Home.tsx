import { FC } from 'react';
import { Header } from '../components/Header';
import { TodoList } from '../components/TodoList';

export const Home: FC = () => {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};

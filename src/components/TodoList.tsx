import { FC } from 'react';
import { useAppSelector } from '../redux/hooks';
import { TodoItem } from './TodoItem';

const category: string[] = ['id', 'title', 'description', 'status'];

export const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <div className="todoList-box">
      <div className="category-box">
        {category.map((title, index) => (
          <span className="titles" key={index}>
            {title}
          </span>
        ))}
      </div>

      <div className="list-box">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

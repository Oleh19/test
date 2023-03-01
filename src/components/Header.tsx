import { FC, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addTodo } from '../redux/todoSlice';

export const Header: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [emptyDescription, setEmptyDescription] = useState(false);
  const dispatch = useAppDispatch();

  const handleTodo = () => {
    if (!title.trim().length && !description.trim().length) {
      setEmptyDescription(true);
      setEmptyTitle(true);
    } else if (!title.trim().length) {
      setEmptyTitle(true);
    } else if (!description.trim().length) {
      setEmptyDescription(true);
    } else {
      if (title.trim().length && description.trim().length) {
        let addProps = {
          title,
          description,
        };
        dispatch(addTodo(addProps));
        setEmptyTitle(false);
        setEmptyDescription(false);
        setTitle('');
        setDescription('');
      }
    }
  };

  return (
    <div className="top-box">
      <div className="box">
        <span>Title:</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          type="text"
          className={emptyTitle ? 'top-input-empty' : 'top-input'}
        />
        {emptyTitle && <span className="warning">This field is empty</span>}
      </div>

      <div className="box">
        <span>Description:</span>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          type="text"
          className={emptyDescription ? 'top-input-empty' : 'top-input'}
        />
        {emptyDescription && <span className="warning">This field is empty</span>}
      </div>

      <button onClick={handleTodo}>Create</button>
    </div>
  );
};

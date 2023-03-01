import { FC, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { toggleStatus } from '../redux/todoSlice';
import { Todo } from '../redux/types';
import { Popup } from './Popup';

export const TodoItem: FC<Todo> = ({ title, description, id, status }) => {
  const [popup, setPopup] = useState(false);
  const dispatch = useAppDispatch();

  const truncateText = (str: string) => {
    if (str.length >= 50) {
      return str.substring(0, 50) + '...';
    }

    return str;
  };

  return (
    <div className="list-items">
      <span className="item">{id}</span>
      <span onClick={() => setPopup(true)} className="item" style={{ cursor: 'pointer' }}>
        {truncateText(title)}
      </span>
      <span onClick={() => setPopup(true)} className="item-desc" style={{ cursor: 'pointer' }}>
        {truncateText(description)}
      </span>
      <input
        className="item"
        type="checkbox"
        checked={status}
        onChange={() => dispatch(toggleStatus(id))}
      />

      {popup && (
        <Popup
          popup={popup}
          setPopup={setPopup}
          id={id}
          title={title}
          description={description}
          status={status}
        />
      )}
    </div>
  );
};

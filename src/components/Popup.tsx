import { Dispatch, FC, SetStateAction } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { toggleStatus } from '../redux/todoSlice';

interface Props {
  setPopup: Dispatch<SetStateAction<boolean>>;
  popup: boolean;
  title: string;
  description: string;
  status: boolean;
  id: number;
}

export const Popup: FC<Props> = ({ popup, setPopup, id, title, description, status }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="popup-wrapper">
      <div className="popup-box">
        <div className="popup-content">
          <div className="popup-title">{title}</div>
          <span>Description:</span>
          <div className="popup-description">{description}</div>
          <input
            checked={status}
            onChange={() => dispatch(toggleStatus(id))}
            type="checkbox"
            className="popup-status"></input>
          <button className="popup-button" onClick={() => setPopup(!popup)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

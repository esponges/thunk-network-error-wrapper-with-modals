import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { getPokemonApiFailedRequest } from "./store/actions/pokemon";

interface ModalProps {
  title: string;
  id: number;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  title,
  children,
  id,
  onClose,
}: ModalProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateMoreModals = () => {
    dispatch(getPokemonApiFailedRequest(null));
  }

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <div className='title'>{title}</div>
        <div className='modal-body'>{children}</div>
        <p>{`Modal id : ${id}`}</p>
        <div className='modal-footer'>
          <button className='closes-modal btn-red' onClick={onClose}>
            Ok
          </button>
          <button className='closes-modal btn-red' onClick={handleCreateMoreModals}>
            Generate more modals
          </button>
        </div>
      </div>
    </div>
  );
};

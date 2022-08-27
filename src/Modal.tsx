interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  title,
  children,
  onClose,
}: ModalProps): JSX.Element => {
  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <div className='title'>{title}</div>
        <div className='modal-body'>{children}</div>
        <div className='modal-footer'>
          <button className='closes-modal btn-red' onClick={onClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

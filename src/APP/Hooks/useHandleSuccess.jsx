import useApp from "./useApp";

const useHandleSuccess = () => {
  const { setShowSuccessModal, setModalMessage } = useApp();

  const showSuccess = (message) => {
    setModalMessage(message);

    setShowSuccessModal(true);
  };

  return showSuccess;
};

export default useHandleSuccess;

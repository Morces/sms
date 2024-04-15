import useApp from "./useApp";

const useHandleFormError = () => {
  const { setModalMessage, setShowFormModal } = useApp();

  return ({ input }) => {
    let keys = Object.keys(input.current.err);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];

      if (input.current.err[key]) {
        setModalMessage(`Error check  ${key}`);
        setShowFormModal(true);
        return true;
      }
    }

    return false;
  };
};

export default useHandleFormError;

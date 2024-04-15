import useApp from "./useApp";

import { useNavigate } from "react-router-dom";

const useHandleErrors = () => {
  const { setShowRequestModal, setModalType, setModalMessage, setIsOnline } =
    useApp();

  const navigate = useNavigate();

  return async (e, network_error = true) => {
    if (e.message === "Network Error" && network_error === true) {
      setModalType("network");
      setModalMessage("Check your internet connection");
      setShowRequestModal(true);
      setIsOnline(false);
      return;
    }

    if (e.response.status === 401) {
      setModalType("");
      setModalMessage("Unothorized User.");
      setShowRequestModal(true);
      navigate("/");
      return;
    }

    if (e.response.status >= 400) {
      let data = e.response.data;
      let message = "Error !. Try Again.";
      if (data.custom) {
        message = data.message;
      }

      setModalType("");
      setModalMessage(message);
      setShowRequestModal(true);
      return;
    }

    if (e.response.status >= 500) {
      let data = e.response.data;
      let message = "Server error. Contact system admin";

      if (data.custom) {
        message = data.message;
      }

      setModalType("");
      setModalMessage(message);
      setShowRequestModal(true);
      return;
    }
  };
};

export default useHandleErrors;

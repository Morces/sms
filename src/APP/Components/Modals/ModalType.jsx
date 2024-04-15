import useApp from "../../Hooks/useApp";
import Loading from "./Loading";
import Success from "./Success";
import Error from "./Error";

const ModalType = ({ children }) => {
  const { modal_type } = useApp();

  if (modal_type === "loading") return <Loading />;

  if (modal_type === "success") return <Success />;

  if (modal_type === "error") return <Error />;

  return <>{children}</>;
};

export default ModalType;

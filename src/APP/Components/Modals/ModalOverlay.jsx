import useApp from "../../Hooks/useApp";

/* eslint-disable react/prop-types */
const ModalOverlay = ({ showModal, setShowModal, children }) => {
  const { modal_type } = useApp();

  const onClickFn = () => {
    setShowModal(false);
  };

  if (showModal)
    return (
      <div
        className={`absolute w-screen m-0 bottom-0 h-screen 
            ${modal_type !== "loading" && "overflow-y-scroll"}  
            z-[400] overflow-hidden `}
      >
        <div className="z-0 w-full flex items-center justify-center  overflow-x-clip outline-none focus:outline-none">
          <div
            onClick={onClickFn}
            className="fixed opacity-25 w-full h-full inset-0 z-0 bg-black"
          ></div>
          <div
            className={`z-10 ${
              modal_type !== "loading" ? "pt-32 mb-32" : "h-full w-full"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  return <></>;
};

export default ModalOverlay;

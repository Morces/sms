import { useState, useEffect } from "react";

const Modal = ({
  children,
  showModal,
  setShowModal,
  showModalCloseBtn = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modalWidth = isMobile ? "90%" : "40rem";

  if (showModal) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto w-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className={`fixed inset-0 bg-black opacity-50 `} />
          <div
            className={`relative p-4 mx-auto rounded-lg overflow-hidden bg-white shadow-lg ${
              isMobile ? "w-full" : ""
            }`}
            style={{ maxWidth: modalWidth }}
          >
            {showModalCloseBtn && (
              <button
                className="absolute top-0 right-0 m-4 text-2xl font-bold text-gray-500 hover:text-red-500"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            )}

            <div className="px-6 py-4">{children}</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;

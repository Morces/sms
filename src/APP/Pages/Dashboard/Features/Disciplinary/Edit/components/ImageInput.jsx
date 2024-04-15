import { useRef, useState } from "react";
import Btn from "../../../../../../Components/Button/Btn";

function ImageInput({ onSelect = null }) {
  const fileInputRef = useRef(null);

  const [dragActive, setDragActive] = useState(false);

  const [image, setImage] = useState();

  const addImageFn = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer
      ? event.dataTransfer.files[0]
      : event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImage({ src: reader.result, name: file.name });
      console.log(file);
      onSelect(file);
      setDragActive(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="flex gap-4">
      <Btn
        onClick={addImageFn}
        outline={true}
        ex="font-semibold whitespace-nowrap h-fit"
      >
        Click to browse{" "}
      </Btn>
      <input
        accept="image/*"
        type="file"
        className="hidden"
        onChange={handleFileUpload}
        ref={fileInputRef}
      />

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleFileUpload}
        onClick={addImageFn}
        className=" cursor-pointer border-dashed border-4 border-violet_blue/30 text-gray_css text-xl rounded-xl py-3 px-6 w-full "
      >
        {image?.name || "or drop file here"}
      </div>
    </div>
  );
}

export default ImageInput;

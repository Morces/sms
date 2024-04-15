import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import TextInput from "../../../../../Components/Inputs/TextInput";
import EmailInput from "../../../../../Components/Inputs/Email";
import Btn from "../../../../../Components/Button/Btn";
import { useNavigate } from "react-router-dom";
import useApp from "../../../../../Hooks/useApp";

const Profile = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const { user } = useApp();

  useEffect(() => {
    setInput(user);
  }, []);

  const submit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="px-6 py-8 bg-white mt-5 rounded-lg mr-4">
      <div className="flex flex-col justify-between md:flex-row gap-6">
        <div className="flex md:justify-center sm:justify-center">
          <div className="w-60 h-60 rounded-full mt-15 flex items-center justify-center bg-bright_grey p-2">
            <label
              htmlFor="avatar"
              className="flex flex-col items-center justify-center space-y-4 md:space-x-4"
            >
              <a className="bg-white rounded-full p-2 text-center text-2xl cursor-pointer">
                <AiOutlineCloudUpload />
              </a>
              <p className="text-center rounded-lg bg-ghost_white px-4 py-1 cursor-pointer">
                Upload logo
              </p>
              <input
                type="file"
                class="hidden"
                name="avatar"
                id="avatar"
                value={""}
                onChange={() => {}}
              />
            </label>
          </div>
        </div>

        <div className="w-full flex justify-between gap-x-6 md:w-full sm:w-full">
          <div className="w-full md:gap-6 sm:gap-6">
            <TextInput
              input={input}
              setInput={setInput}
              field="first_name"
              label="First Name"
              placeholder="First Name"
            />
            <TextInput
              input={input}
              setInput={setInput}
              field="last_name"
              label="Last Name"
              placeholder="Last Name"
            />
            <EmailInput
              input={input}
              setInput={setInput}
              field="email"
              label="Email Address"
              placeholder="Email"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-x-7 flex-col md:flex-row">
        <TextInput
          input={""}
          setInput={""}
          field="phone"
          label="Phone"
          placeholder="Phone"
        />
        <TextInput
          input={input}
          setInput={setInput}
          field="staff_number"
          label="Staff No"
          placeholder="Staff No"
        />
        <TextInput
          input={""}
          setInput={""}
          field="role"
          label="Role"
          placeholder="Role"
        />
      </div>
      <div className="flex justify-between items-center">
        <Btn size="block" btn="primary" onClick={() => submit()}>
          Save
        </Btn>
      </div>
    </div>
  );
};

export default Profile;

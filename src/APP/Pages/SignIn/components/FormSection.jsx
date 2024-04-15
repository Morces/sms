import React, { useRef, useState } from "react";
import Btn from "../../../Components/Button/Btn";
import TextInput from "../../../Components/Inputs/TextInput";
import logo from "../../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import useApp from "../../../Hooks/useApp";
import { storeEncryptedData } from "../../../Utils/store";

const FormSection = () => {
  const [input, setInput] = useState({});
  const { request, urls } = useAxios();
  const { setUser, setToken } = useApp();
  const navigate = useNavigate();

  const LogIn = async () => {
    const res = await request({
      req: urls.accounts.login,
      data: input,
    });

    if (res === "error") {
      return;
    } else {
      storeEncryptedData("user", { ...res });
      storeEncryptedData("token", res.access);
      setToken(res.access);
      setUser(res);
      navigate("dashboard");
    }
  };

  const ForgotPass = () => {
    console.log("Reset Here");
  };

  return (
    <div className="flex flex-col justify-center">
      <img
        src={logo}
        alt="Logo"
        className="mb-5 flex justify-center items-center"
      />

      <div className="">
        <TextInput
          input={input}
          setInput={setInput}
          field="staff_number"
          label="Staff Number"
          placeholder="eg ST07"
        />
        <div className="">
          <TextInput
            input={input}
            setInput={setInput}
            field="password"
            label="Password"
            placeholder="Password"
            type="password"
          />
        </div>

        <div
          className="flex justify-end mb-4 cursor-pointer"
          onClick={() => ForgotPass()}
        >
          <p className="text-primary font-karla">Forgot Password?</p>
        </div>
      </div>
      <div className="">
        <Btn btn="primary" size="block" onClick={() => navigate("/dashboard")}>
          Log in
        </Btn>
      </div>
    </div>
  );
};

export default FormSection;

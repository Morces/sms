import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import TextInput from "../../../../../Components/Inputs/TextInput";
import EmailInput from "../../../../../Components/Inputs/Email";
import Btn from "../../../../../Components/Button/Btn";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";
import useApp from "../../../../../Hooks/useApp";

const SchoolForm = () => {
  const navigate = useNavigate();
  const { setModalMessage } = useApp();
  const [schoolName, setSchoolName] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [schoolPhone, setSchoolPhone] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [logo, setLogo] = useState(null);

  const { request, urls } = useAxios();

  const schoolData = new FormData();
  schoolData.append("school_name", schoolName);
  schoolData.append("school_email", schoolEmail);
  schoolData.append("school_phone", schoolPhone);
  schoolData.append("school_address", schoolAddress);
  schoolData.append("director_name", directorName);
  schoolData.append("school_logo", logo);

  console.log(schoolData);

  const submit = async () => {
    let res = await request({
      req: urls.school.create_school,
      data: schoolData,
      show_success: true,
      success_message: "School Details saved!",
    });

    console.log(res);

    if (res !== "error") {
      navigate("/dashboard/school-details");
    } else {
      setModalMessage("An error occured, Please try again");
    }
  };

  return (
    <div className="px-6 py-8 bg-white mt-5 rounded-lg mr-4">
      <div className="flex flex-col justify-between md:flex-row gap-6">
        <div className="flex md:justify-center sm:justify-center">
          <div className="w-60 h-60 rounded-xl mt-15 flex items-center justify-center bg-bright_grey p-2">
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
                value={logo}
                onChange={() =>
                  setLogo(document.getElementById("avatar").files[0])
                }
              />
            </label>
          </div>
        </div>

        <div className="w-full flex justify-between gap-x-6 md:w-full sm:w-full">
          <div className="w-full md:gap-6 sm:gap-6">
            <TextInput
              input={schoolName}
              setInput={setSchoolName}
              field="school_name"
              label="School Name"
              placeholder="School Name"
            />
            <EmailInput
              input={schoolEmail}
              setInput={setSchoolEmail}
              field="school_email"
              label="School Email Address"
              placeholder="School Email"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-x-7 flex-col md:flex-row">
        <TextInput
          input={schoolPhone}
          setInput={setSchoolPhone}
          field="school_phone"
          label="School Phone"
          placeholder="Phone"
        />
        <TextInput
          input={directorName}
          setInput={setDirectorName}
          field="director_name"
          label="Principal's Name"
          placeholder="Principal's Name"
        />
        <TextInput
          input={schoolAddress}
          setInput={setSchoolAddress}
          field="school_address"
          label="School Address"
          placeholder="School Adress"
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

export default SchoolForm;

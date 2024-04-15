import React, { useState, useEffect, useContext } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import DateTimeInput from "../../../../../../Components/Inputs/DateInput";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";
import FileInput from "../../../../../../Components/Inputs/FileInput";
import EditContext from "../EditContext";
import useAxios from "../../../../../../Hooks/useAxios";

const StudentForm = () => {
  const { student, setStudent } = useContext(EditContext);
  const [input, setInput] = useState({});
  const [grades, setGrades] = useState([]);
  const [streams, setStreams] = useState([]);
  const { request, urls } = useAxios();

  useEffect(() => {
    getGrades();
    getStreams();
  }, []);

  async function getGrades() {
    let res = await request({
      req: urls.grades.all_grades,
    });

    if (res !== "error") {
      setGrades(res);
    }
  }

  async function getStreams() {
    let res = await request({
      req: urls.grades.get_streams,
    });
    if (res !== "error") {
      setStreams(res);
    }
  }

  return (
    <div className="px-8 m-auto mt-8">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            initial={{ first_name: student.first_name }}
            input={input}
            setInput={setInput}
            field="first_name"
            label="First Name"
            placeholder="First Name"
          />

          <TextInput
            initial={{ middle_name: student.middle_name }}
            input={input}
            setInput={setInput}
            field="middle_name"
            label="Middle Name"
            placeholder="Middle Name"
          />
          <TextInput
            initial={{ last_name: student.last_name }}
            input={input}
            setInput={setInput}
            field="last_name"
            label="Last Name"
            placeholder="Last Name"
          />
        </div>

        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            initial={{ registration_number: student.registration_number }}
            input={input}
            setInput={setInput}
            field="registration_number"
            label="Admission Number"
          />
          <SelectInput
            input={input}
            setInput={setInput}
            field="gender"
            label="Gender"
            stateInput=""
            setStateInput={() => {}}
            initial={student.gender}
          >
            <option value="">-- Gender --</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </SelectInput>

          <TextInput
            initial={{ nationality: student.nationality }}
            input={input}
            setInput={setInput}
            field="nationality"
            label="Nationality"
            placeholder="Enter Nationality"
          />
        </div>

        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            initial={{ home_location: student.home_location }}
            input={input}
            setInput={setInput}
            field="home_location"
            label="Home Location"
            placeholder="Enter home location"
          />
          <DateTimeInput
            initial={student.dob}
            input={input}
            setInput={setInput}
            field="dob"
            label="Date of Birth"
          />
          <DateTimeInput
            initial={student.doa}
            input={input}
            setInput={setInput}
            field="doa"
            label="Date of Admission"
          />
        </div>
        <FileInput label="Upload Passport" />
        <FileInput label="Upload Birth Certificate " />

        <SelectInput
          input={input}
          setInput={setInput}
          field="grade"
          label="Grade"
          stateInput=""
          setStateInput={() => {}}
          initial={student.grade ? student.grade.id : ""}
        >
          <option value="">-- Grade --</option>
          {grades.map((grade) => (
            <option key={grade.id} value={grade.id}>
              {grade.name}
            </option>
          ))}
        </SelectInput>
        <SelectInput
          input={input}
          setInput={setInput}
          field="stream"
          label="Stream"
          stateInput=""
          setStateInput={() => {}}
          initial={student.stream ? student.stream.id : ""}
        >
          <option value="">-- Stream --</option>
          {streams.map((stream) => (
            <option key={stream.id} value={stream.id}>
              {stream.name}
            </option>
          ))}
        </SelectInput>
      </div>
    </div>
  );
};

export default StudentForm;

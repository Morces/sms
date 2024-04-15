import React, { useEffect, useRef } from "react";
import SelectInput from "../../../../Components/Inputs/SelectInput";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const ClassChart = () => {
  const data = [
    {
      class: "Grade 1",
      students: 30,
    },
    {
      class: "Grade 2",
      students: 33,
    },
    {
      class: "Grade 3",
      students: 20,
    },
    {
      class: "Grade 4",
      students: 25,
    },
    {
      class: "Grade 5",
      students: 28,
    },
    {
      class: "Grade 6",
      students: 30,
    },
    {
      class: "Grade 7",
      students: 26,
    },
    {
      class: "Grade 8",
      students: 30,
    },
  ];

  return (
    <div className="w-full h-96 pb-28">
      <div className="w-full flex justify-between items-center pb-8">
        <h1 className="font-bold text-base">No. of Students per Grade</h1>
        <div className="w-1/2">
          <SelectInput
            input={"formData"}
            setInput={"setFormData"}
            field="years"
            label=""
            stateInput=""
            setStateInput={() => {}}
          >
            <option value="">--Year--</option>
            <option value="">--2020--</option>
          </SelectInput>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={750}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="class"
            padding={{ bottom: 20 }}
            axisLine={true}
            tickLine={true}
          />
          <YAxis axisLine={true} tickLine={true} />
          <Tooltip />
          <Legend />
          <Bar dataKey="students" fill="#449514" barSize={15} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClassChart;

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
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

const ChartComponent = () => {
  const data = [
    {
      month: "Jan",
      students: 400,
    },
    {
      month: "Feb",
      students: 300,
    },
    {
      month: "Mar",
      students: 200,
    },
    {
      month: "Apr",
      students: 200,
    },
    {
      month: "May",
      students: 150,
    },
    {
      month: "Jun",
      students: 500,
    },
    {
      month: "Jul",
      students: 400,
    },
    {
      month: "Aug",
      students: 350,
    },

    {
      month: "Sept",
      students: 400,
    },
    {
      month: "Oct",
      students: 700,
    },
    {
      month: "Nov",
      students: 400,
    },
    {
      month: "Dec",
      students: 250,
    },
  ];

  return (
    <div className="w-full h-96 pb-16">
      <div className="flex justify-evenly items-center pb-8">
        <h1 className="font-bold text-base  ">No. of Students per month</h1>
        <div className="w-1/3">
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
            dataKey="month"
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

export default ChartComponent;

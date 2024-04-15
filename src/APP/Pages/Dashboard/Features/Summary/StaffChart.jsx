import React from "react";
import {
  LineChart,
  XAxis,
  CartesianGrid,
  YAxis,
  Line,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import SelectInput from "../../../../Components/Inputs/SelectInput";

const StaffChart = () => {
  const data = [
    {
      month: "Jan",
      staff: 50,
    },
    {
      month: "Feb",
      staff: 55,
    },
    {
      month: "Mar",
      staff: 45,
    },
    {
      month: "Apr",
      staff: 60,
    },
    {
      month: "May",
      staff: 54,
    },
    {
      month: "Jun",
      staff: 50,
    },
    {
      month: "Jul",
      staff: 47,
    },
    {
      month: "Aug",
      staff: 50,
    },

    {
      month: "Sept",
      staff: 43,
    },
    {
      month: "Oct",
      staff: 40,
    },
    {
      month: "Nov",
      staff: 38,
    },
    {
      month: "Dec",
      staff: 25,
    },
  ];
  return (
    <div className="w-full h-96 pb-14">
      <div className="flex justify-around items-center mt-3">
        <h1 className="font-bold text-base">No. of Staff</h1>
        <div className="">
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
        <LineChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            padding={{ bottom: 20 }}
            axisLine={true}
            tickLine={true}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="staff" fill="#449514" barSize={15} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StaffChart;

/* eslint-disable react/prop-types */
import React from "react";
import { TR, TD, TT } from "../../../../../../Components/Table";
import TableAction from "./TableAction";
import { convDate } from "../../../../../../Utils/Time";
import { useNavigate } from "react-router-dom";

const avatar =
  "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const TableRow = ({ doc, i }) => {
  const navigation = useNavigate();

  function view() {
    navigation(`view/${doc.id}`);
  }

  return (
    <TR key={doc?.id} i={i}>
      <TD w={100 / 6}>
        <TT label={doc.first_name + " " + doc.last_name} />
      </TD>
      <TD w={100 / 6}>
        <TT label={doc?.registration_number} />
      </TD>
      <TD w={100 / 6}>
        <TT label={(doc?.dob)} />
      </TD>
      <TD w={100 / 6}>
        <TT label={(doc?.doa)} />
      </TD>
      <TD w={100 / 6}>
        <TT label={doc?.gender == 1 ? "Male" : "Female"} />
      </TD>
      <TD w={100 / 6}>
        <TableAction doc={doc} />
      </TD>
    </TR>
  );
};

export default TableRow;

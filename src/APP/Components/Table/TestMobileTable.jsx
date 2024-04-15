import { Table, TR, TC, TD, TH } from "./../MobileTable";
import data from "./data";

const TestMobileTable = () => {
  return (
    <Table>
      {data.map((doc, index) => (
        <TR key={index} i={index}>
          <TC>
            <TH label="Name" />
            <TD>{doc.name}</TD>
          </TC>
          <TC>
            <TH label="Cost" />
            <TD>{doc.cost}</TD>
          </TC>
          <TC>
            <TH label="Qty" />
            <TD>{doc.qty}</TD>
          </TC>
          <TC>
            <TH label="Description" />
            <TD>{doc.qty}</TD>
          </TC>
          <TC>
            <TH label="Vendor" />
            <TD>{doc.vendor}</TD>
          </TC>
        </TR>
      ))}
    </Table>
  );
};

export default TestMobileTable;

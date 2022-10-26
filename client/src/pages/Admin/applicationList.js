import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/adminLayout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function applicationList() {
  const appTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="fw-bold">User ID</TableCell>
              <TableCell align="left" className="fw-bold">
                Name
              </TableCell>
              <TableCell align="left" className="fw-bold">
                Company Name
              </TableCell>
              <TableCell align="left" className="fw-bold">
                Email
              </TableCell>
              <TableCell align="left" className="fw-bold">
                Created at
              </TableCell>
              <TableCell align="left" className="fw-bold">
                Status
              </TableCell>
              <TableCell align="left" className="fw-bold">
                Settings
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appli.map((values) => (
              <TableRow
                key={values._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {values.userId}
                </TableCell>
                <TableCell align="left">{values.name}</TableCell>
                <TableCell align="left">{values.companyName}</TableCell>
                <TableCell align="left">{values.email}</TableCell>
                <TableCell align="left">
                  {values.createdAt.slice(0, 10)}
                </TableCell>
                {values.status === "Submitted" &&
                  <TableCell align="left">
                    <span className="badge bg-info">{values.status}</span>
                  </TableCell>
                }
                {values.status === "Approved" &&
                  <TableCell align="left">
                    <span className="badge bg-warning">{values.status}</span>
                  </TableCell>
                }
                {values.status === "Booked" &&
                  <TableCell align="left">
                    <span className="badge bg-success">{values.status}</span>
                  </TableCell>
                }
                <TableCell align="left">
                  View
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  const [appli, setAppli] = useState([]);
  const getAppData = async () => {
    const response = await axios.get("/api/admin/getApplications");
    setAppli(response.data.appLists);
  };
  useEffect(() => {
    getAppData();
  }, []);
  return <AdminLayout appTable={appTable()} />;
}

export default applicationList;

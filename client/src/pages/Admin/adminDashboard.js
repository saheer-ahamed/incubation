import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminPage from '../../components/adminLayout'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CaretRightOutlined } from '@ant-design/icons'

function admin() {
  const nextStage = async (id) => {
    const response = await axios.post('/api/admin/nextStage/' + id)
    console.log(response.data)
  }
  const submittedTable = () => {
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
            {submittedlist.map((values) => (
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
                <TableCell align="left">
                  <span className="badge rounded-pill bg-info">{values.status}</span>
                </TableCell>
                <TableCell align="center">
                  <a onClick={() => nextStage(values._id)}>
                    <CaretRightOutlined />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const approvedTable = () => {
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
            {approvedlist.map((values) => (
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
                <TableCell align="left">
                  <span className="badge rounded-pill bg-warning">{values.status}</span>
                </TableCell>
                <TableCell align="center">
                  <a onClick={() => nextStage(values._id)}>
                    <CaretRightOutlined />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const bookedTable = () => {
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
            </TableRow>
          </TableHead>
          <TableBody>
            {bookedlist.map((values) => (
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
                <TableCell align="left">
                  <span className="badge rounded-pill bg-success">{values.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const [submittedlist, setSubmittedlist] = useState([])
  const [approvedlist, setApprovedlist] = useState([])
  const [bookedlist, setBookedlist] = useState([])

  const getData = async () => {
    const response = await axios.get("/api/admin/getDividedApplications")
    setSubmittedlist(response.data.submittedApps)
    setApprovedlist(response.data.approvedApps);
    setBookedlist(response.data.bookedApps)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <AdminPage submittedTable={submittedTable()}
        approvedTable={approvedTable()}
        bookedTable={bookedTable()} />
    </div>
  );
}

export default admin;

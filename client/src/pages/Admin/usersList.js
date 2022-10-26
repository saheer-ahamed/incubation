import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminLayout from "../../components/adminLayout";
import axios from "axios";



function usersList() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const response = await axios.get('/api/admin/getUsers')
        setUsers(response.data.usersData);
    }
    useEffect(() => {
        getUsers()
    },[])

    const table = () => {
        return (
            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="fw-bold">ID</TableCell>
                <TableCell align="left" className="fw-bold">Name</TableCell>
                <TableCell align="left" className="fw-bold">Email</TableCell>
                <TableCell align="left" className="fw-bold">Created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((values) => (
                <TableRow
                  key={values._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {values._id}
                  </TableCell>
                  <TableCell align="left">{values.name}</TableCell>
                  <TableCell align="left">{values.email}</TableCell>
                  <TableCell align="left">{values.createdAt.slice(0,10)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    };
  return (
    <div>
      <AdminLayout userTable={table()}/>
    </div>
  );
}

export default usersList;

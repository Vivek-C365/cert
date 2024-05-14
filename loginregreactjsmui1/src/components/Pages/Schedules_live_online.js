import * as React from "react";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Stack from "@mui/material/Stack";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(ID, CHANNEL, TYPE, LOCATION, STARTS, ENDS, STATUS) {
  return { ID, CHANNEL, TYPE, LOCATION, STARTS, ENDS, STATUS };
}

// Initial state with empty array for data
const initialRows = [];

function SchedulesLiveOnline() {
  const [rows, setRows] = useState(initialRows); // State to hold data

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/training_calender/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRows(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="top_online_heading">
        <h1>Live-Online schedules</h1>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>CHANNEL</StyledTableCell>
              <StyledTableCell>TYPE</StyledTableCell>
              <StyledTableCell>LOCATION</StyledTableCell>
              <StyledTableCell>STARTS</StyledTableCell>
              <StyledTableCell>ENDS</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.courses.title}</StyledTableCell>
                <StyledTableCell>{row.delivery}</StyledTableCell>
                <StyledTableCell>{row.time_zone}</StyledTableCell>
                <StyledTableCell>{row.start_date}</StyledTableCell>
                <StyledTableCell>{row.end_date}</StyledTableCell>
                <StyledTableCell>Published</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<RemoveRedEyeIcon />}>
                      VIEW
                    </Button>
                    <Button variant="contained" endIcon={<EditNoteIcon />}>
                      EDIT
                    </Button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default SchedulesLiveOnline;

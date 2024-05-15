"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(name, orders, completed) {
  return { name, orders, completed };
}

const rows = [
  createData("Alice", 288, 4),
  createData("Bob", 426, 9),
  createData("Charlie", 172, 10),
  createData("Diana", 117, 33),
  createData("Emily", 485, 78),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 700,
        }}
        aria-label="customized table"
      >
        <TableHead
          sx={{
            bgcolor: "blue",
          }}
        >
          <TableRow>
            <StyledTableCell>USER</StyledTableCell>
            <StyledTableCell align="right">Orders</StyledTableCell>
            <StyledTableCell align="right">Completed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 3).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.orders}</StyledTableCell>
              <StyledTableCell align="right">{row.completed}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

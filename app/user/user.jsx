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

function createData(name, sales, profit, loss, revenue) {
  return { name, sales, profit, loss, revenue };
}

const rows = [
  createData("Alice", 288, 103, 9, 279),
  createData("Bob", 426, 123, 124, 302),
  createData("Charlie", 172, 66, 87, 85),
  createData("Diana", 117, 62, 39, 78),
  createData("Emily", 485, 146, 197, 288),
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
        <TableHead>
          <TableRow>
            <StyledTableCell>USER</StyledTableCell>
            <StyledTableCell align="right">SALES</StyledTableCell>
            <StyledTableCell align="right">PENDING</StyledTableCell>
            <StyledTableCell align="right" >DISPATCHED</StyledTableCell>
            <StyledTableCell align="right">REVENUE($)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sales}</StyledTableCell>
              <StyledTableCell align="right">{row.profit}</StyledTableCell>
              <StyledTableCell align="right">{row.loss}</StyledTableCell>
              <StyledTableCell align="right">{row.revenue}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

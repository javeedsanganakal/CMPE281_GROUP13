import React from "react";
// import PlusSquare from "../../assets/images/plus_square.jpeg";
import PlusSquare from "../../../../../Assets/plus_square.jpeg"
import styles from "./TableSection.module.scss";
import SearchIcon from "../../../../../Assets/searchIcon.jpg";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Link } from "react-router-dom";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "-0.01em",
              color: "#B5B7C0",
              padding: "14px 0",
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function TableSection({ title, createBtn, headCells, rows }) {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <div className={styles.createRow}>
          <Link to="/dashboard/farmer/dronesimulation/create" className={styles.createRowSec}>
            <img src={PlusSquare} />
            <div className={styles.createSimulation}>{createBtn}</div>
          </Link>
        </div>
        <div className={styles.tableSectionHeader}>
          <div className={styles.allSimulatedDrones}>{title}</div>
          <div className={styles.tableFilterOpt}>
            <div className={styles.searchInput}>
              {/* <img src={SearchIcon} className={styles.searchIcon} /> */}
              <input
                className={styles.inputField}
                type="text"
                placeholder="Search"
              />
            </div>
            <div className={styles.selectRowDropDown}>
              <label for="cars">Short by :</label>
              <select name="cars" id="cars">
                <option value="volvo">Newest</option>
                <option value="saab">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2, boxShadow: "none" }}>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  onSelectAllClick={handleSelectAllClick}
                  rowCount={rows.length}
                  headCells={headCells}
                />
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          {Object.keys(row).map((item) =>
                            row[`${item}`] !== "Stop" ? (
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                align="center"
                                padding="none"
                                sx={{
                                  fontStyle: "normal",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  padding: "20px 0",
                                  lineHeight: "21px",
                                  letterSpacing: "-0.01em",
                                  color: "#292D32",
                                }}
                              >
                                {row[`${item}`]}
                              </TableCell>
                            ) : (
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                align="center"
                                padding="none"
                                sx={{
                                  fontStyle: "normal",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  padding: "5px",
                                  lineHeight: "21px",
                                  letterSpacing: "-0.01em",
                                  color: "#FFFFFF",
                                  background: "#FF6370",
                                  borderRadius: "5px",
                                }}
                              >
                                {row[`${item}`]}
                              </TableCell>
                            )
                          )}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default TableSection;

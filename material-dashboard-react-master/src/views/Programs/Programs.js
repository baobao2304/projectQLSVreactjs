import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
// import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const columns = [
  { id1: 1, id: 'khoadaotao', label: 'Khoa Đào Tạo', minWidth: 170 },
  { id1: 2, id: 'thehe', label: 'Khóa Đào Tạo', minWidth: 100 },
  {
    id1: 3,
    id: 'nam',
    label: 'Niên Khóa Đào Tạo',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id1: 4,
    id: 'edit',
    label: 'Chỉnh sửa',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id1: 4,
    id: 'delete',
    label: 'Xóa',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
];
const rowss = [
  {
    khoadaotao: 'CNTT',
    thehe: 1,
    nam: 2010,
    id: 11,
  },
  {
    khoadaotao: 'CNTT',
    thehe: 2,
    nam: 2011,
    id: 22,
  },
  {
    khoadaotao: 'CNTT',
    thehe: 3,
    nam: 2012,
    id: 11,
  },
  {
    khoadaotao: 'CNTT',
    thehe: 4,
    nam: 2013,
    id: 11,
  },
  {
    khoadaotao: 'CNTT',
    thehe: 5,
    nam: 2014,
    id: 11,
  },
  {
    khoadaotao: 'CNTT',
    thehe: 6,
    nam: 2015,
    id: 11,
  },
];
const useStyles = makeStyles(theme => ({
  backGround: {
    backgroundColor: theme.palette.common.black,
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  btn_container: {
    margin: '30px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  table_container: {
    color: 'white',
    padding: '20px',
    fontSize: '30px',
    fontWeight: 'bold',
    // width: '100%',
    // margin: '20px',
    textAlign: 'center',
    // background: 'linear-gradient(45deg, #8BC34A 30%, #2196F3 90%)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ProgramPage() {
  const classes = useStyles();
  let history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function handleClickRedirectDetail(event) {
    event.preventDefault();
    var clickedId = event.target.id;
    console.info('You clicked a breadcrumb.' + clickedId);
    return history.push('/admin/program/' + clickedId);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('1999-08-18T21:11:54')
  );
  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: '#fff', height: '100vh' }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              onClick={handleClick}
              className={classes.link}
            >
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <GrainIcon className={classes.icon} />
              Program Study
            </Typography>
          </Breadcrumbs>
          <Box component="span" m={1}>
            {/* <Button /> */}
          </Box>
          {/* table */}

          <div>
            <div>
              <Button
                className={classes.btn_container}
                variant="contained"
                color="primary"
                id="handleClickOpen('paper')"
                onClick={handleClickOpen('paper')}
              >
                Add New Program
              </Button>
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle
                id="scroll-dialog-title"
                className={classes.table_container}
              >
                Add News Program
              </DialogTitle>
              <DialogContent dividers={scroll === 'paper'}>
                <div>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Họ Và Tên
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      value={values.amount}
                      onChange={handleChange('amount')}
                      // startAdornment={
                      //   <InputAdornment position="start">$</InputAdornment>
                      // }
                    />
                  </FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>

                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Niên Khóa
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>2016</MenuItem>
                      <MenuItem value={20}>2017</MenuItem>
                      <MenuItem value={30}>2018</MenuItem>
                      <MenuItem value={10}>2019</MenuItem>
                      <MenuItem value={10}>2020</MenuItem>
                      <MenuItem value={10}>2021</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Ngành</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Công nghệ thông tin</MenuItem>
                      <MenuItem value={20}>Công nghệ thực phẩm</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Chuyên Ngành
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Công nghệ Phần Mềm</MenuItem>
                      <MenuItem value={20}>Hệ Thống Thông Tin</MenuItem>
                      <MenuItem value={10}>Mạng Máy Tính</MenuItem>
                      <MenuItem value={20}>Thương Mại Điện Tử</MenuItem>
                      <MenuItem value={10}>Khoa Học Máy Tính</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Lớp</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>06DHTH1</MenuItem>
                      <MenuItem value={20}>06DHTH2</MenuItem>
                      <MenuItem value={10}>07DHTH1</MenuItem>
                      <MenuItem value={20}>07DHTH2</MenuItem>
                      <MenuItem value={10}>08DHTH1</MenuItem>
                      <MenuItem value={20}>08DHTH2</MenuItem>
                      <MenuItem value={10}>09DHTH1</MenuItem>
                      <MenuItem value={20}>09DHTH2</MenuItem>
                      <MenuItem value={10}>10DHTH1</MenuItem>
                      <MenuItem value={20}>10DHTH2</MenuItem>
                      <MenuItem value={10}>11DHTH1</MenuItem>
                      <MenuItem value={20}>11DHTH2</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Loại Hình Đào Tạo
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Đại Học Chính Quy</MenuItem>
                      <MenuItem value={20}>Cao Đẳng </MenuItem>
                      <MenuItem value={10}>Đại Học Văn Bằng Hai</MenuItem>
                      <MenuItem value={20}>Thạc Sĩ</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Subscribe
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className={classes.table_container}>Chương trình đào tạo</div>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead className={classes.backGround}>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell
                        key={column.id}
                        align="center"
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowss
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectDetail}
                            id={row.id}
                          >
                            {row.khoadaotao}
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectDetail}
                            id={row.thehe}
                          >
                            {row.thehe}
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectDetail}
                            id={row.nam}
                          >
                            {row.nam}
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectDetail}
                            id={row.id}
                          >
                            EDIT
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectDetail}
                            id={row.id}
                          >
                            Delete
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rowss.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

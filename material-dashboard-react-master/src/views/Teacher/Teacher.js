import React from 'react';
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
// import NumberFormat from 'react-number-format';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const columns = [
  { id: 'stt', label: 'STT', minWidth: 170 },
  { id: 'magv', label: 'Mã Giáo Viên', minWidth: 170 },
  { id: 'hotengv', label: 'Họ Tên Giáo Viên', minWidth: 100 },
  {
    id: 'nganhday',
    label: 'Ngành Dạy',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'edit',
    label: 'EDIT',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'delete',
    label: 'Delete',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
];

function createData(magv, hotengv, nganhday, edit) {
  return { magv, hotengv, nganhday, edit };
}
const rowss = [
  {
    id: '223223',
    tengv: 'Nguyễn Thị Nhàn',
    namsinh: '25/5/1990',
    chucvu: 'Giao Vien',
    hocvan: 'Tien Si',
    nganh: 'Công Nghệ Thông Tin ',
    chuyennganh: 'Hệ Thống Thông Tin',
  },
  {
    id: '221523',
    tengv: 'Nguyễn  Nhàn',
    namsinh: '25/5/1990',
    chucvu: 'Giao Vien',
    hocvan: 'Tien Si',
    nganh: 'Công Nghệ Thông Tin ',
    chuyennganh: 'Hệ Thống Thông Tin',
  },
  {
    id: '223653',
    tengv: 'Nguyễn Ái Quốc',
    namsinh: '25/5/1996',
    chucvu: 'Giao Vien',
    hocvan: 'Thac Si',
    nganh: 'Công Nghệ Thông Tin ',
    chuyennganh: 'Hệ Thống Thông Tin',
  },
  {
    id: '223953',
    tengv: 'Phạm Lê Bảo',
    namsinh: '25/5/1993',
    chucvu: ' Truong Khoa',
    hocvan: 'Tien Si',
    nganh: 'Công Nghệ Thông Tin ',
    chuyennganh: 'Công Nghệ Phần Mềm',
  },
  {
    id: '287223',
    tengv: 'Ngô Bá Khá',
    namsinh: '25/5/1995',
    chucvu: 'Giao Vien',
    hocvan: 'Giao Su',
    nganh: 'Công Nghệ Thông Tin ',
    chuyennganh: 'Mang May Tinh',
  },
  {
    id: '264223',
    tengv: 'Văn Thế Thành',
    namsinh: '25/5/1991',
    chucvu: 'Giao Vien',
    hocvan: 'Tien Si',
    nganh: 'Công Nghệ Thông Tin ',
    chuyennganh: 'Khoa Hoc May Tinh',
  },
  {
    id: '223913',
    tengv: 'Vũ Văn Vinh',
    namsinh: '25/5/1995',
    chucvu: 'Truong Khoa',
    hocvan: 'Tien Si',
    nganh: 'Công Nghệ Thông Tin ',
    chuyennganh: 'Công Nghệ Phần Mềm',
  },
];
const rows = [
  createData('13213', 'Nguyễn Thị Nhàn', 'Công Nghệ Thông Tin', 11),
  createData('124213', 'Vũ Văn Vinh', 'Công Nghệ Thông Tin', 22),
  createData('1231213', 'Văn Thế Thành', 'Công Nghệ Thông Tin', 33),
  createData('12312', 'Ngô Bá Khá ', 'Công Nghệ Thông Tin', 44),
  createData('123213', 'Bùi Xuân Huấn ', 'Công Nghệ Phần Mềm', 55),
  createData('123123', 'Phạm Lê Bảo', 'Hệ Thống Thông Tin', 66),
  createData('123213', 'Nguyễn Thị Kim Con', 'Mạng Máy Tính ', 77),
  createData('12312', 'Tô Thị Mậu', 'Công Nghệ Thông Tin', 88),
  createData('123132', 'Nguyễn Thị Đượm', 'Khoa Học Máy Tính', 99),
  createData('13123', 'Phạm Thế Trình', 'Khoa Học Máy Tính', 111),
  createData('123213', 'Nguyễn Ái Quốc', 'Khoa Học Máy Tính', 222),
  createData('1232123', 'lê Hồng Phong', 'Thương Mại Điện Tử', 333),
];
const useStyles = makeStyles(theme => ({
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
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  p_custom: {
    color: 'black',
    fontSize: '15px',
    fontWeight: 'bold',
    margin: '10px',
  },
}));
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function TeacherPage() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [scroll1, setScroll1] = React.useState('paper');
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpenNewTeacher = scrollType => () => {
    setOpen1(true);
    setScroll1(scrollType);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('1999-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };
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
              Teacher
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
                onClick={handleClickOpenNewTeacher('paper')}
              >
                Add New Teacher
              </Button>
            </div>
            <div>
              <Dialog
                open={open1}
                onClose={handleClose1}
                scroll={scroll1}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">
                  Add News Teacher
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
                        Chuc Vu
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Giao Vien</MenuItem>
                        <MenuItem value={20}>Truong Khoa</MenuItem>
                        <MenuItem value={30}>Pho Khoa</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Hoc Van
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Tien Si</MenuItem>
                        <MenuItem value={20}>Thac Si</MenuItem>
                        <MenuItem value={30}>Giao Su</MenuItem>
                        <MenuItem value={30}>Pho Giao Su</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Ngành
                      </InputLabel>
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

            <Dialog
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">EDIT TEACHER</DialogTitle>

              <DialogContent dividers={scroll === 'paper'}>
                <div>
                  <Input
                    className="txt-margin-10"
                    defaultValue="ID Teacher"
                    disabled
                    inputProps={{ 'aria-label': 'description' }}
                  />
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Họ Và Tên Giao Vien
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
                      label="Nam Sinh"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>

                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Chuc Vu
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Giao Vien</MenuItem>
                      <MenuItem value={20}>Truong Khoa</MenuItem>
                      <MenuItem value={30}>Pho Khoa</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Hoc Van
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Tien Si</MenuItem>
                      <MenuItem value={20}>Thac Si</MenuItem>
                      <MenuItem value={30}>Giao Su</MenuItem>
                      <MenuItem value={30}>Pho Giao Su</MenuItem>
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
          <div className={classes.table_container}>Table Giáo Viên</div>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead className={classes.table_container}>
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
                    .map((row, i) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell key={row.id} align="center">
                            {i}
                          </TableCell>
                          <TableCell key={row.id} align="center">
                            {row.id}
                          </TableCell>
                          <TableCell key={row.id} align="center">
                            {row.tengv}
                          </TableCell>
                          <TableCell key={row.id} align="center">
                            {row.chuyennganh}
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickOpen('paper')}
                          >
                            EDIT
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickOpen('paper')}
                          >
                            DELETE
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
              count={rows.length}
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

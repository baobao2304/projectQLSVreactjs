import React from 'react';
// import '../Assets/Css/Style.css';
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
  { id: 'stt', label: 'STT', minWidth: 100 },
  { id: 'mssv', label: 'Mã sinh viên', minWidth: 100 },
  {
    id: 'hoten',
    label: 'Họ Tên',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'xemdiem',
    label: 'Xem điểm',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'xemcongno',
    label: 'Xem công nợ',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'xemlichhoc',
    label: 'Xem lịch học',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'diemrenluyen',
    label: 'Xem điểm rèn luyện',
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
];

function createData(
  mssv,
  hoten,
  xemdiem,
  xemcongno,
  xemlichhoc,
  diemrenluyen,
  edit
) {
  return {
    mssv,
    hoten,
    xemdiem,
    xemcongno,
    xemlichhoc,
    diemrenluyen,
    edit,
  };
}

const rowss = [
  {
    mssv: '201239612',
    hoten: 'Phạm Nguyễn Thanh Ngân',
    xemdiem: 11,
    xemcongno: 11,
    xemlichhoc: 11,
    diemrr: 120,
    edit: 11,
  },
  {
    mssv: '201276312',
    hoten: 'Phạm Nguyễn  Ngân',
    xemdiem: 22,
    xemcongno: 22,
    xemlichhoc: 22,
    diemrr: 120,
    edit: 22,
  },
  {
    mssv: '201243312',
    hoten: 'Phạm  Thanh Ngân',
    xemdiem: 33,
    xemcongno: 33,
    xemlichhoc: 33,
    diemrr: 120,
    edit: 33,
  },
  {
    mssv: '20125312',
    hoten: ' Nguyễn Thanh Ngân',
    xemdiem: 44,
    xemcongno: 44,
    xemlichhoc: 44,
    diemrr: 120,
    edit: 44,
  },
];
const rows = [
  createData('11231243', 'Phạm  Lê ', 1, 1, 1, 1, 1),
  createData('12312123', 'Phạm Ngũ Tuấn', 1, 1, 1, 1, 2),
];
const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function StudyPage() {
  const classes = useStyles();
  let history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('1999-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function handleClickRedirectPoint(event) {
    event.preventDefault();
    var clickedId = event.target.id;
    console.info('You clicked a breadcrumb.' + clickedId);
    return history.push('/admin/study/point/' + clickedId);
  }
  function handleClickRedirectDebtDetail(event) {
    event.preventDefault();
    var clickedId = event.target.id;
    console.info('You clicked a breadcrumb.' + clickedId);
    return history.push('/admin/study/congno/' + clickedId);
  }
  function handleClickRedirectScheduleStudy(event) {
    event.preventDefault();
    var clickedId = event.target.id;
    console.info('You clicked a breadcrumb.' + clickedId);
    return history.push('/admin/study/schedule/' + clickedId);
  }
  function handleClickRedirectDetail(event) {
    event.preventDefault();
    var clickedId = event.target.id;
    console.info('You clicked a breadcrumb.' + clickedId);
    return history.push('/admin/study/' + clickedId);
  }

  function handleClickRedirectPointPractiseStudy(event) {
    event.preventDefault();
    var clickedId = event.target.id;
    console.info('You clicked a breadcrumb.' + clickedId);
    return history.push('/admin/study/practise/' + clickedId);
  }
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };

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
              Study
            </Typography>
          </Breadcrumbs>
          <Box component="span" m={1}>
            {/* <Button /> */}
          </Box>
          {/* table */}
          <div>
            <div>
              <Button
                className="btn-container"
                variant="contained"
                color="primary"
                onClick={handleClickOpen('paper')}
              >
                Add New Study
              </Button>
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">Add News Study</DialogTitle>
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
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
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
                          <TableCell
                            key={row.id}
                            align="center"
                            // onClick={handleClickRedirectDetail}
                            id={i}
                          >
                            {i}
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            // onClick={handleClickRedirectDetail}
                            id={row.mssv}
                          >
                            {row.mssv}
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            // onClick={handleClickRedirectDetail}
                          >
                            {row.hoten}
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectPoint}
                            id={row.xemdiem}
                          >
                            Xem Điểm
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectDebtDetail}
                            id={row.xemdiem}
                          >
                            Xem Công Nợ
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectScheduleStudy}
                            id={row.xemlichhoc}
                          >
                            Xem Lịch Học
                          </TableCell>
                          <TableCell
                            key={row.id}
                            align="center"
                            onClick={handleClickRedirectPointPractiseStudy}
                            id={row.diemrr}
                          >
                            Xem Điểm Rèn Luyện
                          </TableCell>
                          <TableCell
                            key={rowss.id}
                            align="center"
                            onClick={handleClickRedirectDetail}
                            id={row.edit}
                          >
                            EDIT
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

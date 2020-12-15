import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
//   // BrowserRouter as Router,
//   // Switch,
//   // Route,
//   // Link,
//   useParams,
// } from 'react-router-dom';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
// import HomeIcon from '@material-ui/icons/Home';
// import GrainIcon from '@material-ui/icons/Grain';
// import Box from '@material-ui/core/Box';
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
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
// import Card from 'components/Card/Card.js';
// import CardHeader from 'components/Card/CardHeader.js';
// import CardBody from 'components/Card/CardBody.js';

// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   // KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
const rowsss = [
  {
    id: 1,
    HocKy: 1,
    NienKhoa: '(2017 - 2018)',
    DiemTb10: 7.16,
    DiemTb4: 2.75,
    DiemTbTichLuy10: 7.16,
    DiemTbTichLuy4: 2.75,
    TichLuyTC: 8,
    tableMH: [
      {
        MaMH: '007899',
        TenMH: 'Hướng dẫn đăng ký môn học',
        LơpHP: '04DHTH1',
        SoTC: 0,
        BtAndLT: 0,
        GiuaKy: 0,
        KetThuc1: 0,
        KetThuc2: 0,
        TbMon10: 0,
        TbMon4: 0,
        TbMonChu: '',
        XepLoai: '',
      },
      {
        MaMH: '001658',
        TenMH: 'Giáo dục quốc phòng - an ninh 1',
        LơpHP: '08DHTH1',
        SoTC: 4,
        BtAndLT: 0,
        GiuaKy: 7,
        KetThuc1: 6,
        KetThuc2: 0,
        TbMon10: 6.3,
        TbMon4: 2.0,
        TbMonChu: 'C',
        XepLoai: 'Trung bình',
      },
      {
        MaMH: '999998',
        TenMH: 'Phân loại anh văn đầu vào',
        LơpHP: '08DHCM1	',
        SoTC: 0,
        BtAndLT: 0,
        GiuaKy: 0,
        KetThuc1: 2.3,
        KetThuc2: 0,
        TbMon10: 2.3,
        TbMon4: 0,
        TbMonChu: 'F',
        XepLoai: 'Kém',
      },
      {
        MaMH: '999999',
        TenMH: 'Anh văn A0',
        LơpHP: '08DHCK2	',
        SoTC: 3,
        BtAndLT: 7.8,
        GiuaKy: 0,
        KetThuc1: 5.8,
        KetThuc2: 0,
        TbMon10: 6.4,
        TbMon4: 2.0,
        TbMonChu: 'C',
        XepLoai: 'Trung bình',
      },
      {
        MaMH: '007557',
        TenMH: 'Kỹ năng ứng dụng Công nghệ Thông tin',
        LơpHP: '08DHTH2	',
        SoTC: 3,
        BtAndLT: 8.7,
        GiuaKy: 0,
        KetThuc1: 9.2,
        KetThuc2: 0,
        TbMon10: 9.0,
        TbMon4: 4.0,
        TbMonChu: 'A',
        XepLoai: 'Giỏi',
      },
    ],
  },
  {
    id: 2,
    HocKy: 2,
    NienKhoa: '(2017 - 2018)',
    DiemTb10: 5.56,
    DiemTb4: 1.87,
    DiemTbTichLuy10: 5.97,
    DiemTbTichLuy4: 2.1,
    TichLuyTC: 31,
    tableMH: [
      {
        MaMH: '003671',
        TenMH: 'Pháp luật đại cương',
        LơpHP: '08DHAV2',
        SoTC: 2,
        BtAndLT: 4.0,
        GiuaKy: 0,
        KetThuc1: 6.5,
        KetThuc2: 0,
        TbMon10: 5.8,
        TbMon4: 2.0,
        TbMonChu: 'C',
        XepLoai: 'Trung bình',
      },
      {
        MaMH: '002289',
        TenMH: 'Kiến trúc máy tính',
        LơpHP: '08DHBM1',
        SoTC: 3,
        BtAndLT: 6.5,
        GiuaKy: 0,
        KetThuc1: 6.0,
        KetThuc2: 0,
        TbMon10: 6.2,
        TbMon4: 2.0,
        TbMonChu: 'C',
        XepLoai: 'Trung bình',
      },
      {
        MaMH: '001706',
        TenMH: 'Giáo dục thể chất 1 (bơi)',
        LơpHP: '08DHQLMT',
        SoTC: 2,
        BtAndLT: 4.0,
        GiuaKy: 0,
        KetThuc1: 8.0,
        KetThuc2: 0,
        TbMon10: 6.8,
        TbMon4: 2.5,
        TbMonChu: 'C+',
        XepLoai: 'Trung bình',
      },
      {
        MaMH: '003493',
        TenMH: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 2',
        LơpHP: '08DHQT5	',
        SoTC: 3,
        BtAndLT: 6.0,
        GiuaKy: 0,
        KetThuc1: 5.3,
        KetThuc2: 0,
        TbMon10: 5.5,
        TbMon4: 2.0,
        TbMonChu: 'C',
        XepLoai: 'Trung bình',
      },
      {
        MaMH: '006199',
        TenMH: 'Toán rời rạc',
        LơpHP: '08DHTH4	',
        SoTC: 3,
        BtAndLT: 7.5,
        GiuaKy: 0,
        KetThuc1: 2.5,
        KetThuc2: 0,
        TbMon10: 4.0,
        TbMon4: 1.0,
        TbMonChu: 'D',
        XepLoai: 'Trung bình yếu',
      },
    ],
  },
  {
    id: 3,
    HocKy: 3,
    NienKhoa: '(2017 - 2018)',
    DiemTb10: 0,
    DiemTb4: 0,
    DiemTbTichLuy10: 0,
    DiemTbTichLuy4: 0,
    TichLuyTC: 0,
    tableMH: [
      {
        MaMH: '001673',
        TenMH: 'Giáo dục quốc phòng - an ninh 3 AB',
        LơpHP: '08DHDT3',
        SoTC: 2,
        BtAndLT: 7.0,
        GiuaKy: 0,
        KetThuc1: 8.0,
        KetThuc2: 0,
        TbMon10: 7.7,
        TbMon4: 3.0,
        TbMonChu: 'B',
        XepLoai: 'Khá',
      },
    ],
  },
  {
    id: 4,
    HocKy: 4,
    NienKhoa: '(2018 - 2019)',
    DiemTb10: 5.94,
    DiemTb4: 2.11,
    DiemTbTichLuy10: 5.96,
    DiemTbTichLuy4: 2.1,
    TichLuyTC: 50,
    tableMH: [
      {
        MaMH: '007556',
        TenMH: 'Anh văn A2',
        LơpHP: '08DHTDH2',
        SoTC: 3,
        BtAndLT: 6.7,
        GiuaKy: 0,
        KetThuc1: 3.8,
        KetThuc2: 0,
        TbMon10: 4.7,
        TbMon4: 1.0,
        TbMonChu: 'D',
        XepLoai: 'Trung bình yếu',
      },
      {
        MaMH: '001742',
        TenMH: 'Hệ điều hành',
        LơpHP: '08DHBM1',
        SoTC: 3,
        BtAndLT: 8.0,
        GiuaKy: 0,
        KetThuc1: 4.8,
        KetThuc2: 0,
        TbMon10: 5.8,
        TbMon4: 2.0,
        TbMonChu: 'C',
        XepLoai: 'Trung bình',
      },
      {
        MaMH: '007642',
        TenMH: 'Thực hành cơ sở dữ liệu',
        LơpHP: '08DHBM1',
        SoTC: 1,
        BtAndLT: 0,
        GiuaKy: 0,
        KetThuc1: 7.5,
        KetThuc2: 0,
        TbMon10: 7.5,
        TbMon4: 3.0,
        TbMonChu: 'B',
        XepLoai: 'Khá',
      },
    ],
  },
];

const columns = [
  { id: 'stt', label: 'STT', minWidth: 170 },
  { id: 'mamh', label: 'Mã Môn Học', minWidth: 170 },
  {
    id: 'tenmh',
    label: 'Tên Môn Học',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'lophp',
    label: 'Lớp Học',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'btandlt',
    label: 'BT/TL',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'giuaky ',
    label: 'Giữa Kỳ',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'ketthuc1',
    label: 'Kết thúc 1',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'ketthuc2',
    label: 'Kết thúc 2',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'tbmon10 ',
    label: 'Trung bình môn điểm 10',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'tbmon4 ',
    label: 'Trung bình môn điểm 4',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'tbmonchu',
    label: 'Điểm chữ',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'xeploai',
    label: 'Xếp loại',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'Edit',
    label: 'EDIT',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'delete',
    label: 'DELETE',
    minWidth: 170,
    format: value => value.toLocaleString('en-US'),
  },
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
  titleHK: {
    margin: 20,
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

export default function PointStudyPage() {
  // let { id } = useParams();
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClose = () => {
    setOpen(false);
  };
  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date('1999-08-18T21:11:54')
  // );

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        // prefix="$"
      />
    );
  }

  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
  // function handleClickRedirectPointPractiseStudy(event) {
  //   event.preventDefault();
  //   var clickedId = event.target.id;
  //   console.info('You clicked a breadcrumb.' + clickedId);
  //   return history.push('/admin/study/practise/' + clickedId);
  // }
  return (
    <Paper className={classes.root}>
      {rowsss.map(rowwss => (
        <div>
          <div className={classes.table_container}>
            Học Kỳ {rowwss.HocKy} --- Niên Khóa: {rowwss.NienKhoa}
          </div>
          {/* <h1>Học Kỳ {rowwss.HocKy}</h1>
          <h1>Niên Khóa: {rowwss.NienKhoa}</h1> */}
          <div>
            {/* <div>
              <Button
                className="btn-container"
                variant="contained"
                color="primary"
                onClick={handleClickOpen('paper')}
              >
                Add New Study
              </Button>
            </div> */}

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
                Edit Point Study
              </DialogTitle>
              <DialogContent dividers={scroll === 'paper'}>
                {/* MaMH: '007642',
        TenMH: 'Thực hành cơ sở dữ liệu',
        LơpHP: '08DHBM1',
        SoTC: 1,
        BtAndLT: 0,
        GiuaKy: 0,
        KetThuc1: 7.5,
        KetThuc2: 0,
        TbMon10: 7.5,
        TbMon4: 3.0,
        TbMonChu: 'B',
        XepLoai: 'Khá', */}
                <div>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Mã Học Phần
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      // value={values.amount}
                      // onChange={handleChange('amount')}
                      // startAdornment={
                      //   <InputAdornment position="start">$</InputAdornment>
                      // }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Tên Môn Học
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      // value={values.amount}
                      // onChange={handleChange('amount')}
                      // startAdornment={
                      //   <InputAdornment position="start">$</InputAdornment>
                      // }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Lớp
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      // value={values.amount}
                      // onChange={handleChange('amount')}
                      // startAdornment={
                      //   <InputAdornment position="start">$</InputAdornment>
                      // }
                    />
                  </FormControl>
                  <TextField
                    className="txt-container-right"
                    label="BT and TL"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="BT and TL"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />

                  <TextField
                    label="Giua Ky"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="Giua Ky"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                  <br />
                  <TextField
                    className="txt-container-right"
                    label="Ket Thuc 1"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="BT and TL"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />

                  <TextField
                    label="Ket Thuc 2"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="Giua Ky"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                  <br />
                  <TextField
                    className="txt-container-right"
                    label="Trung Binh Mon 10"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="BT and TL"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />

                  <TextField
                    label="Trung Binh Mon 4"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="Giua Ky"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                  <br />
                  <TextField
                    className="txt-container-right"
                    label="Diem Chu"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="BT and TL"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Xep Loai
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>A+</MenuItem>
                      <MenuItem value={10}>A</MenuItem>
                      <MenuItem value={10}>A-</MenuItem>
                      <MenuItem value={20}>B+</MenuItem>
                      <MenuItem value={20}>B</MenuItem>
                      <MenuItem value={20}>B-</MenuItem>
                      <MenuItem value={30}>C+</MenuItem>
                      <MenuItem value={30}>C</MenuItem>
                      <MenuItem value={30}>C-</MenuItem>
                      <MenuItem value={10}>D+</MenuItem>
                      <MenuItem value={10}>D</MenuItem>
                      <MenuItem value={10}>D-</MenuItem>
                      <MenuItem value={10}>F</MenuItem>
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
                {rowwss.tableMH
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowmh, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={rowmh.code}
                      >
                        <TableCell key={rowmh.id} align="center">
                          {i}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.MaMH}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.TenMH}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.LơpHP}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.BtAndLT}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.GiuaKy}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.KetThuc1}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.KetThuc2}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.TbMon10}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.TbMon4}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.TbMonChu}
                        </TableCell>
                        <TableCell key={rowmh.id} align="center">
                          {rowmh.XepLoai}
                        </TableCell>
                        <TableCell
                          key={rowmh.id}
                          align="center"
                          onClick={handleClickOpen('paper')}
                        >
                          EDIT
                        </TableCell>
                        <TableCell
                          key={rowmh.id}
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
            count={rowwss.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          {/* DiemTb10: 7.16, DiemTb4: 2.75, DiemTbTichLuy10: 7.16, DiemTbTichLuy4:
          2.75, TichLuyTC: 8, */}
          <div>
            <p className={classes.p_custom}>
              Điểm trung bình thang điểm 10 : {rowwss.DiemTb10}
            </p>
            <p className={classes.p_custom}>
              Điểm trung bình thang điểm 4 : {rowwss.DiemTb4}
            </p>
            <p className={classes.p_custom}>
              Điểm trung bình tích lũy thang điểm 10 : {rowwss.DiemTbTichLuy10}
            </p>
            <p className={classes.p_custom}>
              Điểm trung bình tích lũy thang điểm 10 : {rowwss.DiemTbTichLuy4}
            </p>
            <p className={classes.p_custom}>
              Điểm tích lũy Tín Chỉ : {rowwss.TichLuyTC}
            </p>
          </div>
          <div></div>
        </div>
      ))}
    </Paper>
  );
}

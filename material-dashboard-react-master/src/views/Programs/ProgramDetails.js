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
// import NumberFormat from 'react-number-format';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const rowsss = [
  {
    id: 1,
    HocKy: 1,
    SoTCBB: 5,
    SoTCtuchon: 0,
    tableBB: [
      {
        MaMH: '001600',
        TenMH: 'Kỹ năng ứng dụng Công nghệ Thông tin',
        MaHocPhan: '0101007557',
        SoTC: '3(1, 2, 0)',
        SoTietLT: 0,
        SoTietTH: 75,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '001600',
        TenMH: 'Giáo dục quốc phòng - an ninh 1',
        MaHocPhan: '0101001658',
        SoTC: '4(4, 0, 6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 1,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '007557',
        TenMH: 'Kỹ năng ứng dụng Công nghệ Thông tin',
        MaHocPhan: '0101007557',
        SoTC: '3(1, 2, 0)',
        SoTietLT: 0,
        SoTietTH: 75,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003491',
        TenMH: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 1',
        MaHocPhan: '0101003491',
        SoTC: '2(2,0,4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
    ],
    tableKBB: [],
  },
  {
    id: 2,
    HocKy: 2,
    SoTCBB: 25,
    SoTCtuchon: 5,
    tableBB: [
      {
        MaMH: '000094',
        TenMH: 'Anh văn A1',
        MaHocPhan: '0101000094',
        SoTC: '3(3, 0, 0)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '001661',
        TenMH: 'Giáo dục quốc phòng - an ninh 2',
        MaHocPhan: '0101001661',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 1,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '001673',
        TenMH: 'Giáo dục quốc phòng - an ninh 3 AB ',
        MaHocPhan: '0101001673',
        SoTC: '2(0,2,4)',
        SoTietLT: 0,
        SoTietTH: 60,
        CheckSao: 1,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '001705',
        TenMH: 'Giáo dục thể chất 1 (bóng chuyền) ',
        MaHocPhan: '0101001705',
        SoTC: '2(0,2,4)',
        SoTietLT: 0,
        SoTietTH: 60,
        CheckSao: 1,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '002910',
        TenMH: 'Lập trình hướng đối tượng ',
        MaHocPhan: '0101002910',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 1,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003472',
        TenMH: 'Nhập môn lập trình ',
        MaHocPhan: '0101003472',
        SoTC: '3(3, 0, 6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003493',
        TenMH: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 2 ',
        MaHocPhan: '0101003493',
        SoTC: '3(3, 0, 6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003671',
        TenMH: 'Pháp luật đại cương',
        MaHocPhan: '0101003671',
        SoTC: '2(2,0,4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '005281',
        TenMH: 'Thực hành lập trình hướng đối tượng',
        MaHocPhan: '0101005281',
        SoTC: '1(0,1,2)',
        SoTietLT: 0,
        SoTietTH: 30,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003473',
        TenMH: 'Thực hành nhập môn lập trình',
        MaHocPhan: '0101003473',
        SoTC: '2(0, 2, 4)',
        SoTietLT: 0,
        SoTietTH: 60,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '006199',
        TenMH: 'Toán rời rạc',
        MaHocPhan: '0101006199',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
    ],
    tableKBB: [
      {
        MaMH: '002290',
        TenMH: 'Kiến trúc máy tính',
        MaHocPhan: '0101002290',
        SoTC: '2(2,0,4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 2,
        soTcTuChon: 2,
      },
      {
        MaMH: '007621',
        TenMH: 'Lý thuyết thông tin',
        MaHocPhan: '0101007621',
        SoTC: '2(2, 0, 4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 2,
        soTcTuChon: 2,
      },
      {
        MaMH: '006144',
        TenMH: 'Toán cao cấp A1',
        MaHocPhan: '0101006144',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 3,
        soTcTuChon: 3,
      },
      {
        MaMH: '006618',
        TenMH: 'Xác suất thống kê',
        MaHocPhan: '0101006618',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 3,
        soTcTuChon: 3,
      },
    ],
  },
  {
    id: 3,
    HocKy: 3,
    SoTCBB: 22,
    SoTCtuchon: 0,
    tableBB: [
      {
        MaMH: '007556',
        TenMH: 'Anh văn A2',
        MaHocPhan: '0101007556	',
        SoTC: '3(3, 0, 3)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '007566',
        TenMH: 'Anh văn B1',
        MaHocPhan: '0101007566',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '000420',
        TenMH: 'Cấu trúc dữ liệu và giải thuật',
        MaHocPhan: '0101000420',
        SoTC: '2(2,0,4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '000605',
        TenMH: 'Cơ sở dữ liệu',
        MaHocPhan: '0101000605',
        SoTC: '3(3, 0, 6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '002910',
        TenMH: 'Đại số Tuyến tính ',
        MaHocPhan: '0101007629',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 1,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003472',
        TenMH: 'Nhập môn lập trình ',
        MaHocPhan: '0101003472',
        SoTC: '3(3, 0, 6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003493',
        TenMH: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 2 ',
        MaHocPhan: '0101003493',
        SoTC: '3(3, 0, 6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003671',
        TenMH: 'Pháp luật đại cương',
        MaHocPhan: '0101003671',
        SoTC: '2(2,0,4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '005281',
        TenMH: 'Thực hành lập trình hướng đối tượng',
        MaHocPhan: '0101005281',
        SoTC: '1(0,1,2)',
        SoTietLT: 0,
        SoTietTH: 30,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '003473',
        TenMH: 'Thực hành nhập môn lập trình',
        MaHocPhan: '0101003473',
        SoTC: '2(0, 2, 4)',
        SoTietLT: 0,
        SoTietTH: 60,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
      {
        MaMH: '006199',
        TenMH: 'Toán rời rạc',
        MaHocPhan: '0101006199',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 0,
        soTcTuChon: 0,
      },
    ],
    tableKBB: [
      {
        MaMH: '002290',
        TenMH: 'Kiến trúc máy tính',
        MaHocPhan: '0101002290',
        SoTC: '2(2,0,4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 2,
        soTcTuChon: 2,
      },
      {
        MaMH: '007621',
        TenMH: 'Lý thuyết thông tin',
        MaHocPhan: '0101007621',
        SoTC: '2(2, 0, 4)',
        SoTietLT: 30,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 2,
        soTcTuChon: 2,
      },
      {
        MaMH: '006144',
        TenMH: 'Toán cao cấp A1',
        MaHocPhan: '0101006144',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 3,
        soTcTuChon: 3,
      },
      {
        MaMH: '006618',
        TenMH: 'Xác suất thống kê',
        MaHocPhan: '0101006618',
        SoTC: '3(3,0,6)',
        SoTietLT: 45,
        SoTietTH: 0,
        CheckSao: 0,
        soNhonTuChon: 3,
        soTcTuChon: 3,
      },
    ],
  },
];
export const rowss = [
  {
    STT: 1,
    MaMH: '001600',
    TenMH: 'Kỹ năng ứng dụng Công nghệ Thông tin',
    MaHocPhan: '0101007557',
    SoTC: '3(1, 2, 0)',
    SoTietLT: 0,
    SoTietTH: 75,
    HocKy: 1,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 2,
    MaMH: '001600',
    TenMH: 'Giáo dục quốc phòng - an ninh 1',
    MaHocPhan: '0101001658',
    SoTC: '4(4, 0, 6)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 1,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 1,
  },
  {
    STT: 3,
    MaMH: '007557',
    TenMH: 'Kỹ năng ứng dụng Công nghệ Thông tin',
    MaHocPhan: '0101007557',
    SoTC: '3(1, 2, 0)',
    SoTietLT: 0,
    SoTietTH: 75,
    HocKy: 1,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 4,
    MaMH: '003491',
    TenMH: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 1',
    MaHocPhan: '0101003491',
    SoTC: '2(2,0,4)',
    SoTietLT: 30,
    SoTietTH: 0,
    HocKy: 1,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },

  {
    STT: 1,
    MaMH: '000094',
    TenMH: 'Anh văn A1',
    MaHocPhan: '0101000094',
    SoTC: '3(3, 0, 0)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 2,
    MaMH: '001661',
    TenMH: 'Giáo dục quốc phòng - an ninh 2',
    MaHocPhan: '0101001661',
    SoTC: '3(3,0,6)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 1,
  },
  {
    STT: 3,
    MaMH: '001673',
    TenMH: 'Giáo dục quốc phòng - an ninh 3 AB ',
    MaHocPhan: '0101001673',
    SoTC: '2(0,2,4)',
    SoTietLT: 0,
    SoTietTH: 60,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 1,
  },
  {
    STT: 4,
    MaMH: '001705',
    TenMH: 'Giáo dục thể chất 1 (bóng chuyền) ',
    MaHocPhan: '0101001705',
    SoTC: '2(0,2,4)',
    SoTietLT: 0,
    SoTietTH: 60,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 1,
  },
  {
    STT: 5,
    MaMH: '002910',
    TenMH: 'Lập trình hướng đối tượng ',
    MaHocPhan: '0101002910',
    SoTC: '3(3,0,6)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 1,
  },
  {
    STT: 6,
    MaMH: '003472',
    TenMH: 'Nhập môn lập trình ',
    MaHocPhan: '0101003472',
    SoTC: '3(3, 0, 6)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 7,
    MaMH: '003493',
    TenMH: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 2 ',
    MaHocPhan: '0101003493',
    SoTC: '3(3, 0, 6)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 8,
    MaMH: '003671',
    TenMH: 'Pháp luật đại cương',
    MaHocPhan: '0101003671',
    SoTC: '2(2,0,4)',
    SoTietLT: 30,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 9,
    MaMH: '005281',
    TenMH: 'Thực hành lập trình hướng đối tượng',
    MaHocPhan: '0101005281',
    SoTC: '1(0,1,2)',
    SoTietLT: 0,
    SoTietTH: 30,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 10,
    MaMH: '003473',
    TenMH: 'Thực hành nhập môn lập trình',
    MaHocPhan: '0101003473',
    SoTC: '2(0, 2, 4)',
    SoTietLT: 0,
    SoTietTH: 60,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 11,
    MaMH: '006199',
    TenMH: 'Toán rời rạc',
    MaHocPhan: '0101006199',
    SoTC: '3(3,0,6)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 1,
    CheckSao: 0,
  },
  {
    STT: 1,
    MaMH: '002290',
    TenMH: 'Kiến trúc máy tính',
    MaHocPhan: '0101002290',
    SoTC: '2(2,0,4)',
    SoTietLT: 30,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 0,
    CheckSao: 0,
  },
  {
    STT: 2,
    MaMH: '006199',
    TenMH: 'Toán rời rạc',
    MaHocPhan: '0101006199',
    SoTC: '3(3,0,6)',
    SoTietLT: 45,
    SoTietTH: 0,
    HocKy: 2,
    // 1 là bắt buộc , 0 là không bắt buộc
    CheckBB: 0,
    CheckSao: 0,
  },
];
const columns = [
  { id: 'stt', label: 'STT', minWidth: 170 },
  { id: 'mamh', label: 'Mã Môn Học', minWidth: 170 },
  {
    id: 'tenmh',
    label: 'Tên Môn Học',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'mahp',
    label: 'Mã Học Phần',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'hphoctruoctienquyetsonghanh',
    label: 'Học phần:học trước (a),tiên quyết (b),ong hành (c) ',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'sotcdvht ',
    label: 'Số TC/DVHT',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'sotietlt ',
    label: 'Số tiết LT',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'sotietth ',
    label: 'Số tiết TH',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'sonhomtuchon ',
    label: 'Số nhóm tự chọn',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'sotctuchon ',
    label: 'Số TC tự chọn',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'edit ',
    label: 'EDIT',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'delete ',
    label: 'DELETE',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
];
export const rows = [
  createData(
    1,
    '001600',
    'Kỹ năng ứng dụng Công nghệ Thông tin',
    '0101007557',
    '1',
    '3(1, 2, 0)',
    0,
    75,
    0,
    0,

    1,
    // 1 là bắt buộc , 0 là không bắt buộc
    1,
    0
  ),
  createData(
    2,
    '001600',
    'Giáo dục quốc phòng - an ninh 1',
    '0101001658',
    '',
    '4(4, 0, 6)',
    45,
    0,
    1,
    // 1 là bắt buộc , 0 là không bắt buộc
    1,
    1
  ),
  createData(
    3,
    '007557',
    'Kỹ năng ứng dụng Công nghệ Thông tin',
    '0101007557',
    '',
    '3(1, 2, 0)',
    0,
    75,
    1,
    1,
    0
  ),
  createData(
    4,
    '003491',
    'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 1',
    '0101003491',
    '',
    '2(2,0,4)',
    30,
    0,
    1,
    1,
    0
  ),
  createData(
    1,
    '000094',
    'Anh văn A1',
    '0101000094',
    '',
    '3(3, 0, 0)',
    45,
    0,
    2,
    1,
    0
  ),
  createData(
    1,
    '000094',
    'Anh văn A1',
    '0101000094',
    '',
    '3(3, 0, 0)',
    45,
    0,
    2,
    1,
    0
  ),
  createData(
    2,
    '001661',
    'Giáo dục quốc phòng - an ninh 2',
    '0101001661',
    '',
    '3(3, 0, 6)',
    45,
    0,
    2,
    1,
    1
  ),
  createData(
    3,
    '001673',
    'Giáo dục quốc phòng - an ninh 3 AB',
    '0101001673',
    '',
    '2(0,2,4)',
    0,
    60,
    2,
    1,
    1
  ),
  createData(
    5,
    '002910',
    'Lập trình hướng đối tượng ',
    '0101002910',
    '',
    '3(3,0,6)',
    45,
    0,
    2,
    1,
    1
  ),
  createData(
    6,
    '003472',
    'Nhập môn lập trình ',
    '0101003472',
    '',
    '3(3,0,6)',
    45,
    0,
    2,
    1,
    0
  ),
  createData(
    7,
    '003493',
    'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 2  ',
    '0101003493',
    '',
    '3(3,0,6)',
    45,
    0,
    2,
    1,
    0
  ),
  createData(
    8,
    '003671',
    'Pháp luật đại cương  ',
    '0101003671',
    '',
    '2(2,0,4)',
    30,
    0,
    2,
    1,
    0
  ),
  createData(
    9,
    '005281',
    'Thực hành lập trình hướng đối tượng  ',
    '0101005281',
    '',
    '1(0,1,2)',
    0,
    30,
    2,
    1,
    0
  ),
  createData(
    10,
    '003473',
    'Thực hành nhập môn lập trình  ',
    '0101003473',
    '',
    '2(0, 2, 4)',
    0,
    60,
    2,
    1,
    0
  ),
  createData(
    11,
    '006199',
    'Toán rời rạc  ',
    '0101006199',
    '',
    '3(3,0,6)',
    45,
    0,
    2,
    1,
    0
  ),
  createData(
    1,
    '002290',
    'Kiến trúc máy tính  ',
    '0101002290',
    '',
    '2(2,0,4)',
    30,
    0,
    2,
    0,
    0
  ),
  createData(
    2,
    '006199',
    'Toán rời rạc  ',
    '0101006199',
    '1',
    '3(3,0,6)',
    45,
    0,
    2,
    0
  ),
];

function createData(
  stt,
  mamh,
  tenmh,
  mahp,
  hphoctruoctienquyetsonghanh,
  sotcdvht,
  sotietlt,
  sotietth,
  sonhomtuchon,
  sotctuchon,
  hk,
  checkbb,
  checksao
) {
  return {
    stt,
    mamh,
    tenmh,
    mahp,
    hphoctruoctienquyetsonghanh,
    sotcdvht,
    sotietlt,
    sotietth,
    sonhomtuchon,
    sotctuchon,
    hk,
    checkbb,
    checksao,
  };
}
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
  table_container2: {
    color: 'white',
    padding: '20px',
    fontSize: '30px',
    fontWeight: 'bold',
    // width: '100%',
    // margin: '20px',
    textAlign: 'center',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #8BC34A 30%, #2196F3 90%)',
  },
  p_custom: {
    color: 'black',
    fontSize: '15px',
    fontWeight: 'bold',
    margin: '10px',
  },
}));
// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function DetailProgramPage() {
  // let { id } = useParams();
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  // const [scroll, setScroll] = React.useState('paper');
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
  // const handleClickOpen = scrollType => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };
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
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = event => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper className={classes.root}>
      <div>
        <div>
          <Button
            className={classes.btn_container}
            variant="contained"
            color="primary"
            onClick={handleClickOpenNewTeacher('paper')}
          >
            Add New Program
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
            <DialogTitle id="scroll-dialog-title">Add News Teacher</DialogTitle>
            <DialogContent
            //  dividers={scroll === 'paper'}
            >
              <div>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-amount">
                    Mã Môn Học
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
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-amount">
                    Tên Môn Học
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
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-amount">
                    Mã Học Phần
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
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-amount">
                    Số TC/DVHT
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
          // scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">EDIT TEACHER</DialogTitle>

          <DialogContent
          // dividers={scroll === 'paper'}
          >
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
                <InputLabel id="demo-simple-select-label">Chuc Vu</InputLabel>
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
                <InputLabel id="demo-simple-select-label">Hoc Van</InputLabel>
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

      {rowsss.map(rowwss => (
        <div>
          <div className={classes.table_container}>
            Học Kỳ {rowwss.HocKy} -- Table BB So TC : {rowwss.SoTCBB}
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
                {rowwss.tableBB
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowbb, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={rowbb.code}
                      >
                        <TableCell key={rowbb.id} align="center">
                          {i}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.MaMH}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.TenMH}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.MaHocPhan}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center"></TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.SoTC}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.SoTietLT}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.SoTietTH}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.soNhonTuChon}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          {rowbb.soTcTuChon}
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          EDIT
                        </TableCell>
                        <TableCell key={rowbb.id} align="center">
                          DELETE
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            className={classes.table_container2}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <div className={classes.titleHK}></div>
          <div className={classes.table_container}>
            Học Kỳ {rowwss.HocKy} -- Table Khong BB So TC : {rowwss.soTcTuChon}
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
                {rowwss.tableKBB
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowkbb, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={rowkbb.code}
                      >
                        <TableCell key={rowkbb.id} align="center">
                          {i}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.MaMH}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.TenMH}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.MaHocPhan}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center"></TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.SoTC}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.SoTietLT}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.SoTietTH}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.soNhonTuChon}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          {rowkbb.soTcTuChon}
                        </TableCell>
                        <TableCell key={rowkbb.id} align="center">
                          EDIT
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            className={classes.table_container2}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      ))}
    </Paper>
  );
}

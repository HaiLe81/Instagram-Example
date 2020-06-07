import moment from 'moment';
import 'moment/locale/vi';

moment.locale('vi');
export const convertDateToTimeFromNow = (dateString, hasSuffix = true) => {
    return moment(dateString).fromNow(!hasSuffix);
}

export const formatDate = (dateString) => {
    return moment(dateString).format('dddd, DD - MM - YYYY, hh:mm:ss');
}
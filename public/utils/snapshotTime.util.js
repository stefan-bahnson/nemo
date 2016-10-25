import moment, {duration} from 'moment';
import countdown from 'countdown';
import 'moment-countdown';

export function getSnapshotTime(date) {
  const {days, hours, minutes, seconds} = moment(date).countdown();
  return `${days < 10 ? '0' + days : days} : ${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
}
import { format, isToday, isYesterday } from 'date-fns';

function formatTimeDifference(timestamp) {
  let date = new Date();
  if (timestamp?.seconds) {
    date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
  }

  if (isToday(date)) {
    return format(date, 'h:mm a');
  } else if (isYesterday(date)) {
    return 'Yesterday, ' + format(date, 'h:mm a');
  } else {
    return format(date, 'dd MMM yyyy, h:mm a');
  }
}

export default formatTimeDifference;

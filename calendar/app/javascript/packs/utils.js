import moment from 'moment'

export default function formatDate(d) {
  return(moment(d).format('MMMM DD YYYY, h:mm a'));
}

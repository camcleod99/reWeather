function timeConverter(UNIX_timestamp,output){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var day = days[a.getDay()];
  
  var time
  switch (output) {
    case "today":
        time = day + ' ' + date + '/' + month + '/' + year;
      break;
    case "tomorrow":
        time = date + '/' + month;
      break;
    default:
      break;
  }

  return time;
}
export default timeConverter; 
module.exports = {
    format_date: (date) => {
      // Format date and time information to MM/DD/YYYY HH:mm
      const d = new Date(date);
      const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
      const hours = d.getHours().toString().padStart(2, '0');
      const minutes = d.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      
      return `${formattedDate} at ${formattedTime}`;
    },
  };


  const handlebars = require('handlebars');
  const moment = require('moment');

  // helper to format dates
handlebars.registerHelper('formatDate', function (date) {
  return moment(date).format('YYYY-MM-DD'); // Adjust the format as needed
});


// helper to format time
handlebars.registerHelper('formatTime', function (time) {
  return moment(time).format('HH:mm'); // Adjust the format as needed
});

//helper for clocked_in
handlebars.registerHelper('ifClockedIn', (value, whichCheck) => {
  if (whichCheck == "in")
  {
    return value == false || value == "false" && value != "done";
  }
  else {
    return value == true || value == "true" && value != "done";
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar-container');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});
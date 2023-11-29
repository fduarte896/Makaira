document.addEventListener("DOMContentLoaded", function(){
    var calendarDOM = document.getElementById("vista_calendario");
    var calendar = new FullCalendar.Calendar(calendarDOM,{
        initialView: "dayGridMonth",
        events: [
            {
                title: 'Reserva 1',
                start: '2023-09-25',
                end: '2023-09-27'
            },
            {
                title: 'Reserva 2',
                start: '2023-10-05',
                end: '2023-10-08'
            }
        ]
    });
    calendar.render();
});

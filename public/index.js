$(document).ready(function() {
    let checkbox_value = window.localStorage.getItem('checkbox_value')
    if (checkbox_value != 'notshow') {
        setTimeout(() => {
            $("#myModal").modal()
        }, 500)
    }

    $("#no_show_checkbox").click(() => {
        let checkbox_value = window.localStorage.getItem('checkbox_value')
        console.log(checkbox_value)
        if (checkbox_value === null) {
            checkbox_value = 'show'
        }
        if (checkbox_value == 'show') {
            window.localStorage.setItem('checkbox_value', 'notshow')
        } else {
            window.localStorage.setItem('checkbox_value', 'show')
        }
    })
});
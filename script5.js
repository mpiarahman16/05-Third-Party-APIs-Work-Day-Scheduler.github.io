var hours = ["9:00 A.M.", "10:00 A.M.", "11:00 A.M.", "12:00 P.M.", "1:00 P.M.", "2:00 P.M.", "3:00 P.M.", "4:00 P.M.", "5:00 P.M."]
$(document).ready(function () {
    $("#currentDay").text(moment())
    const now = new Date().getHours()
    for (i = 0; i < 9; i++) {
        var div = $("<div>")
            if (now> i+9) { 
                
                div.attr("class", "row past")
            }
            else if (i+9 === now) { 
                div.attr("class", "row present") 
            }
            else {div.attr("class", "row future") }

        var input = $("<input>")
        var span = $("<span>")
        span.text (hours[i])
        var button = $("<button>")
        if (localStorage.getItem(i)) {
            input.val(localStorage.getItem(i))
        }
        $(button).attr("data-ref", i
        )

        input.attr("id", i
        )
        button.click(function () {
            var i = $(this).attr("data-ref")
            var text = $("#" + i).val()
            localStorage.setItem(i, text)
        })
        div.append(span, input, button)
        $(".container").append(div)

        console.log(new Date().getHours())



    }









})
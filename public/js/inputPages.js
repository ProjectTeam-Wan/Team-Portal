

// var x = $(".eliran")
// x.hide()



// var x = document.getElementById("eliran")
// var btn = document.getElementById("myForm")
// btn.addEventListener("submit", function(event){
//     event.preventDefault()
//     x.style.display = "none"
// })


$("#dropdown").change(function() {
    var selectedValue = $(this).val()

    if (selectedValue === "2"){
        $("#gateway, #controlStation").hide()
    } else {
        $("#gateway, #controlStation").show()
    }

})



//--------------------------DISSAPPEAR! DIV BUTTONS----------------------------------
$(document).ready(function(){
    $("#buttonOne").click(function(){
        $("#divOne").hide("slow");
    });
});

$(document).ready(function(){
    $("#buttonTwo").click(function(){
        $("#divTwo").hide("slow");
    });
});

$(document).ready(function(){
    $("#buttonThree").click(function(){
        $("#divThree").hide("slow");
    });
});

$(document).ready(function(){
    $("#buttonFour").click(function(){
        $("#divFour").hide("slow");
    });
});

$(document).ready(function(){
    $("#buttonFive").click(function(){
        $("#divFive").hide("slow");
    });
});

//-------------------------------------------------------------






$(document).ready(function(){
   $("tr:even").css("background-color", "yellow");
});



//-----------------Weather-----------------------
//$.ajax({
//    url:"/api/getWeather",
//    data: {
//        zipcode:75006
 //   },
 //   sucess:function(data){
 //       $("#weather-temp").html("<strong>"+data+"</strong>degrees");
 //   }
//});









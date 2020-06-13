$(document).ready(function(){
    $(".buttons").click(function(){
        var buttonValue = $(this).attr("data-filter");
        
        if ( buttonValue == "all"){
            $(".image-filter").show("1000");
        }
        else{
            $(".image-filter").not("."+buttonValue).hide("1000");
            $(".image-filter").filter("."+buttonValue).show("1000");
        }
        $(this).addClass("active").siblings().removeClass("active");
    });
});
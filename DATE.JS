var countDownDate = new Date ("Nov 20, 2023").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
        var seconds= Math.floor((distance % (1000 * 60 )) / 1000);
        
        document.getElementById("demo").innerHTML = days;
        document.getElementById("count").innerHTML = hours;
        document.getElementById("counts").innerHTML = minutes;
        document.getElementById("counted").innerHTML = seconds;
        if (distance < 0)
        {clearInterval(x);
            document.getElementById("demo", "count", "counts", "counted").innerHTML= "done";
        };
    
    
    }, 1000);
 
var thisWeek= new Array(day0,day1,day2,day3,day4,day5,day6);

window.onload = function(){
    for(var i=0; i<7; i++){
        //今日の日付データを変数に格納
        var today=new Date(); 

        today.setDate(today.getDate() + i);
        thisWeek[i] = today;
        //年・月・日・曜日を取得
        var month = today.getMonth()+1;
        var week = today.getDay();
        var day = today.getDate();
        var week_ja= new Array("日","月","火","水","木","金","土");
        document.getElementById("day"+String(i)).innerHTML =month+"/"+day+"("+ week_ja[week]+")"; 
    };
    document.getElementById("emptyOrFull").innerHTML = "△";
};

function pushLastWeek(){

    for(var i=0; i<7; i++){
        //年・月・日・曜日を取得
        thisWeek[i].setDate(thisWeek[i].getDate() - 7);
            // const input = document.getElementById('visibledLastWeek');
            // input.disabled = true;   
        var month = thisWeek[i].getMonth()+1;
        var week = thisWeek[i].getDay();
        var day = thisWeek[i].getDate();
        var week_ja= new Array("日","月","火","水","木","金","土");
        document.getElementById("day"+String(i)).innerHTML =month+"/"+day+"("+ week_ja[week]+")";     
        
    };       
    
};

function pushNextWeek(){
    for(var i=0; i<7; i++){
        //年・月・日・曜日を取得
        thisWeek[i].setDate(thisWeek[i].getDate() + 7);
        var month = thisWeek[i].getMonth()+1;
        var week = thisWeek[i].getDay();
        var day = thisWeek[i].getDate();
        var week_ja= new Array("日","月","火","水","木","金","土");
        document.getElementById("day"+String(i)).innerHTML =month+"/"+day+"("+ week_ja[week]+")"; 
    };   
};
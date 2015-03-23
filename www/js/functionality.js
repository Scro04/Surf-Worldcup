//TEST VARIABLES
var test_set1 = "Heineken Trink 2 Zahl 1!";
var test_auhtor1 = "Heineken Bar";
var test_time1 = "19:00";

var test_set2 = "Heineken Trink 3 Zahl 1!";
var test_auhtor2 = "Heineken Bar";
var test_time2 = "14:20";

var test_set3 = "Heineken Trink 4 Zahl 1!";
var test_auhtor3 = "Heineken Bar";
var test_time3 = "16:20";

var test_set4 = "Heineken Trink 5 Zahl 1!";
var test_auhtor4 = "Heineken Bar";
var test_time4 = "15:32";


var test_set5 = "Heineken Trink 6 Zahl 1!";
var test_auhtor5 = "Heineken Bar";
var test_time5 = "16:59";

var data_set_1 = [test_set1, test_auhtor1, test_time1];
var data_set_2 = [test_set2, test_auhtor2, test_time2];
var data_set_3 = [test_set3, test_auhtor3, test_time3];
var data_set_4 = [test_set4, test_auhtor4, test_time4];
var data_set_5 = [test_set5, test_auhtor5, test_time5];

var dataSet_ = [data_set_1, data_set_2, data_set_3, data_set_4, data_set_5];


//---------------

function getUpcomingEventByIdandTime() {

    var current_hour;
    var current_minutes;
    var result_event = null;
    var compare_minutes = 100;
    var compare_hour = 100;

    try {
        var currentdate = new Date();
        current_hour = currentdate.getHours();
        current_minutes = currentdate.getMinutes();

    } catch (error) {
        console.log("failure getting current time");
        getUpcomingEventByIdandTime();
        return "Exception occured";
    }

    for (var x = 0; x < dataSet_.length; x++) {
        //Check for events in the upcoming hour
        if (dataSet_[x][2].split(":")[0] >= current_hour) 
        {
            if (dataSet_[x][2].split(":")[0] <= compare_hour) 
            {
                if (dataSet_[x][2].split(":")[0] < compare_hour && dataSet_[x][2].split(":")[1] >= current_minutes) 
                {
                    compare_hour = dataSet_[x][2].split(":")[0];
                    compare_minutes = dataSet_[x][2].split(":")[1];
                    result_event = x;
                } else 
                {
                    if (dataSet_[x][2].split(":")[1] < compare_minutes && dataSet_[x][2].split(":")[1] >= current_minutes) 
                    {
                        compare_hour = dataSet_[x][2].split(":")[0];
                        compare_minutes = dataSet_[x][2].split(":")[1];
                        result_event = x;
                    }
                }
            }
        }
    }

    //somehow we need to find the next events coming up? :D
    if(result_event != null)
    {return dataSet_[result_event];}
    else{return null;}
    
   
}


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), 
         x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function getSlider() {

    var data_set_slider = [];
    var a, b, c;

    for (a = 1; a <= 7; a++) {
        var set = "img/img" + a + ".jpg";
        data_set_slider.push(set);
    }

    var myArray = [];
    var final_data = [];
    for (c = 0; c < 7; c++) {
        myArray.push(c);
    }
    var randomArray = shuffle(myArray).splice(0, 5);

    for (b = 0; b < 5; b++) {
        var index = randomArray[b];
        var element = data_set_slider[index];
        
        var search = "image" + b;
        var container = document.getElementById(search);
        
        container.src = element;

        final_data.push(element);
        
    }

    console.log(final_data);
    return final_data;
};
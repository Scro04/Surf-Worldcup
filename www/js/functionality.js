//eventname, veranstalter, uhrzeit


//---------------

function getUpcomingEventByIdandTime(category) {

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

    console.log(dataSet_.length);
    for (var x = 0; x < dataSet_.length; x++) 
    {
        //Check for events in the upcoming hour
        if (dataSet_[x][4] == category && dataSet_[x][2].split(":")[0] >= current_hour) 
        {
            if (dataSet_[x][2].split(":")[0] <= compare_hour) 
            {
                if (dataSet_[x][2].split(":")[0] < compare_hour) 
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
		else if(dataSet_[x][4] == category && dataSet_[x][3].split(":")[0] >= current_hour)
		{
			compare_hour = dataSet_[x][2].split(":")[0];
                    compare_minutes = dataSet_[x][2].split(":")[1];
                    result_event = x;
		}
    }

    //somehow we need to find the next events coming up? :D
    if(result_event != null)
    {
        return dataSet_[result_event];}
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
    return final_data;
};
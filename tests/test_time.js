var test_set1 = "Heineken Trink 5 Zahl 1!";
var test_auhtor1 = "Heineken Bar";
var test_time1 = "15:32";

var reference = [test_set1, test_auhtor1, test_time1];


function getUpcomingEventByIdandTimeTEST() {
    var result = getUpcomingEventByIdandTime();
    var is_same = (reference.length == result.length) && reference.every(function (element, index) {
        return element === result[index];
    });

    if (is_same) {
        return "Success";
    }
    return "Failure";
}



function getSliderTEST()
{
    var elem1 = "img/img1.jpg";
    var elem2 = "img/img2.jpg";
    var elem3 = "img/img3.jpg";
    var elem4 = "img/img4.jpg";
    var elem5 = "img/img5.jpg";
    var elem6 = "img/img6.jpg";
    var x = 0;
    var result = -1;
    
    var reference_output = [elem1, elem2, elem3, elem4, elem5, elem6];
    
    var function_result = getSlider();
    
    while(x < function_result.length)
    {
        if(reference_output[x] == function_result[x])
        {
            result++;
        }
        x++;
    }
    
    if(result != -1)
    {
        return "Testcase 'Slider' successful";   
    }
    else
    {
        return "Testcase 'Slider' failed";   
    }
}
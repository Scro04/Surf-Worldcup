angular.module('starter.controllers', [])


.controller('appController', function ($scope, $state) {
                                                
    $scope.next = function (state) {

		$state.go(state);

    }

    $scope.openmenue = function () {

        triggerBouncyNav(true);
    };


    $scope.closemenue = function () {
        triggerBouncyNav(false);
    };

    var is_bouncy_nav_animating = false;

    function triggerBouncyNav($bool) {

        //check if no nav animation is ongoing
        if (!is_bouncy_nav_animating) {
            is_bouncy_nav_animating = true;

            //toggle list items animation
            $('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                if (!$bool) $('.cd-bouncy-nav-modal').removeClass('fade-out');
                is_bouncy_nav_animating = false;
            });

            //check if CSS animations are supported... 
            if ($('.cd-bouncy-nav-trigger').parents('.no-csstransitions').length > 0) {
                $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                is_bouncy_nav_animating = false;
            }
        }
    }


    
})      


.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

})


.controller('homeCtrl', function ($scope, $state) {

    $scope.$watch('$viewContentLoaded', function () {

        getSlider();
		/*getDataSet(function()
		{
			console.log("Data loaded");
			var data = getUpcomingEventByIdandTime("Sport");
			var data2 = getUpcomingEventByIdandTime("SideEvent");
			var data3 = getUpcomingEventByIdandTime("Party");
			if(data != null && data.length > 0)
			{
				document.getElementById("event1_title").innerHTML = data[0];
        		document.getElementById("event1_time").innerHTML = data[2] + " - " + data[3];
        		document.getElementById("event1_descr").innerHTML = data[1];
			}
			if(data2 != null && data2.length > 0)
			{
				document.getElementById("event2_title").innerHTML = data2[0];
        		document.getElementById("event2_time").innerHTML = data2[2] + " - " + data2[3];
        		document.getElementById("event2_descr").innerHTML = data2[1];
			}
			if(data3 != null && data3.length > 0)
			{
				document.getElementById("event3_title").innerHTML = data3[0];
        		document.getElementById("event3_time").innerHTML = data3[2] + " - " + data3[3];
        		document.getElementById("event3_descr").innerHTML = data3[1];
			}
		})*/

		

    })
    $scope.openmap = function (index) {


        element = "map" + index;
		console.log(element);
        var image = document.getElementById(element);

        if (image.style.maxHeight == "500px") {
            image.style.maxHeight = '0px';
        } else {
            image.style.maxHeight = '500px';
        }
    }


})

.controller('eventsCtrl', function ($scope) {


})
.controller('sponsorsCtrl', function ($scope) {


})

.controller('sideEventsCtrl', function ($scope, $state) {   
  var button = document.getElementById('btnSurf');  
  var compare = "open";
  $(document).ready(function () {
    $('#rider_button').click(function () {
        $('.rider').slideToggle("fast");
        if (compare == "open") {
          button.className = "button icon-right ion-chevron-down";
          compare = "close";
        } else {
          button.className = "button icon-right ion-chevron-right";
          compare = "open";
        }
    });
  });

})

.controller('sideSurfenCtrl', function ($scope) {


})

.controller('sideTrendsportCtrl', function ($scope) {


})

.controller('sideShowsCtrl', function ($scope) {


})

.controller('sideFoodCtrl', function ($scope) {


})


.controller('partyCtrl', function ($scope) {

})


.controller('sideOE3Ctrl', function ($scope) {



})

.controller('pwaCtrl', function ($scope) {
  
  $scope.header = bewerbeDataSet_[1][1].split("-");
  
  $scope.descr = bewerbeDataSet_[1][4];
    
  //------------------------- Rider -----------------------------	
  var tmp_array = [];
  console.log(riderDataSet_);
  for(var x = 0; x < riderDataSet_.length; x++)
  {
      if(riderDataSet_[x][6] == 2)
      {
          tmp_array.push(riderDataSet_[x]);
      }
  }
  $scope.riderData = tmp_array;

  //------------------------- Program -----------------------------
  var tmp_array_prog = []; 
    
  for(var x = 0; x < programmDataSet_.length; x++)
  {
    if(programmDataSet_[x][5] == 2)
    {
      tmp_array_prog.push(programmDataSet_[x]);    
    }
  }
  
  tmp_array_prog.sort(sortFunction); 
  
  function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
  }
  
  $scope.programData = tmp_array_prog;
  
  //------------------------- Buttons -----------------------------
  var is_prog_open = 0;
  var is_rider_open = 0;
  var button1 = document.getElementById('program_button');  
  var button = document.getElementById('rider_button');  
  var compare = "open";
  var compare1 = "open1";
  
  $(document).ready(function () {
    $('#rider_button').click(function () {
        $('.rider').slideToggle("fast");
        if(is_prog_open)
        {
          $('.program').slideToggle("fast");
          button1.className = "button icon-right ion-chevron-right";
          compare1 = "open1";
          is_prog_open = 0;    
        }
      
        if (compare == "open") {
          button.className = "button icon-right ion-chevron-down";
          compare = "close";
          is_rider_open = 1;
        } else {
          button.className = "button icon-right ion-chevron-right";
          compare = "open";
          is_rider_open = 0;
        }
    });
  });
 
  $(document).ready(function () {
    $('#program_button').click(function () {
        $('.program').slideToggle("fast");
        if(is_rider_open)
        {
          $('.rider').slideToggle("fast");
          button.className = "button icon-right ion-chevron-right";
          compare = "open";
          is_rider_open = 0;    
        } 
        if (compare1 == "open1") {
          button1.className = "button icon-right ion-chevron-down";
          compare1 = "close1";
          is_prog_open = 1;
        } else {
          button1.className = "button icon-right ion-chevron-right";
          compare1 = "open1";
          is_prog_open = 0;
        }
    });
  });
  
  //-------- calendar ---------------

  var q = new Date();
  var m = q.getMonth()+1;
  var d = q.getDay();
  var y = q.getYear();

  var pic_name = [];
  
  console.log(m);
  
  for(var i = 0; i < tmp_array_prog.length; i++)
  {
    var name;
    var split_ = tmp_array_prog[i][1].split("-");
    if(y <= split_[0])
    {  
      if(m <= split_[1])
      {
        if(d <= split_[2]) 
          {
             name = "img/date/" + split_[2] + "n.jpg";
          }
        else
           name = "img/date/" + split_[2] + ".jpg";
      }
      else             
        name = "img/date/" + split_[2] + ".jpg";
    }
    else      
      name = "img/date/" + split_[2] + ".jpg";
    
    pic_name.push(name);
  }
  $scope.picName = pic_name;

  
  //--------------------- Show More ---------------
  
  $(document).ready(function() {
    var showChar = 300;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ ' </span><span class="morecontent"><span>' + h + '</span>  <a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
  
  
  
  

})


//Competition Controller
.controller('compCtrl', function ($scope) {
	
	//console.log(riderDataSet_);
 
 /* var table_size = document.getElementById('table').rows.length;
  
  for(var i = 0 ; i < table_size; i++)
  {
    start_time_el = "start_time" + i;
    var start_time = document.getElementById(start_time_el).innerHTML;

    end_time_el = "end_time" + i;
    var end_time = document.getElementById(end_time_el).innerHTML;

    date_el = "date" + i; 
    var date = document.getElementById(date_el).innerHTML;

    var status = isEventAtTime(start_time, end_time, date);

    event_el = "event"+i;

    if(status == "prev")
    {
      document.getElementById(event_el).className = "prev";
    }
    else if (status == "now")
    {
      document.getElementById(event_el).className = "now";
    }
    else if(status == "later")
    {
      document.getElementById(event_el).className = "later";
    }
    else
    {
      document.getElementById(event_el).className = "fail";
    }
  }*/
})

function appController($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
};
var diaryLayer, RuskinDates2, graphic; //feature layers
var DiaryDates, RuskinDates; //timeline data arrays

$(document).ready(function(){
    $.ajax({
        dataType: "json",
        url: "GeoJsonData/AllPoints.json",
        async: false,
        success: function(data) {
            DiaryDates = data;
            console.log(DiaryDates);
        }
    });

    $.ajax({
        type:'GET',
        url: 'CSV/places_mockup2.csv',
        dataType: 'text',
        success: function(data){
            RuskinDates = $.csv.toObjects(data);
            console.log(RuskinDates);
        }
    });

    $(document).ajaxStop(function(){
        createBoxes();

        $("#layer1").click(function(){
            if (diaryLayer.visible == true){
                diaryLayer.hide();
                ruskin.hide();
                Console.log("Layer " + diaryLayer.id);
            }else{
                diaryLayer.show();
                RuskinDates.show();
            }
        });

        $("#layer2").click(function(){
            if (RuskinDates.visible == true){
                RuskinDates.hide();
            }else{
                RuskinDates.show();
            }
        });

        $("#upArrow").mouseenter(function(){
            $("i").css("opacity",1);
        });

        $("#upArrow").mouseleave(function(){
            $("i").css("opacity",.5);
        });

        $("#upArrow").click(function(){
            $("i").toggleClass("fa-arrow-down");
            $("#footer").toggleClass("opened");
            $("#buttonContainer").toggle();
        });

        $("#timebutton1").click( function() {
            setVisibleContainer(1);
        });

        $("#timebutton2").click( function() {
            setVisibleContainer(2);
        });

        $("#slideLeft").click(function(){
            var div = $(this);
            var cont = getVisibleContainer();
            var rect = document.getElementById(cont).getBoundingClientRect();
            if(rect.left > 0){
                $("#"+cont).animate({left: "+=" + 20},"fast");
                $("#"+cont).animate({left: "-=" + 30},"fast");
                $("#"+cont).animate({left: "+=" + 10},"fast");
            }else{
                div.animate({width: '25px'},"fast");
                div.animate({width: '30px'}, "fast");
                $("#"+cont).animate({left: "+=" + ((window.innerWidth-110)/5)});
            }
        });

        $("#slideLeft").mouseenter(function(){
            $(this).css("opacity",1);
        });

        $("#slideLeft").mouseleave(function(){
            $(this).css("opacity",.5);
        });

        $("#slideRight").click(function(){
            var div = $(this);
            var cont = getVisibleContainer();
            var rect = document.getElementById(cont).getBoundingClientRect();
            if(rect.right < window.innerWidth-30){
                $("#"+cont).animate({left: "-=" + 20},"fast");
                $("#"+cont).animate({left: "+=" + 30},"fast");
                $("#"+cont).animate({left: "-=" + 10},"fast");
            }else{
                div.animate({width: '25px'},"fast");
                div.animate({width: '30px'}, "fast");
                $("#"+cont).animate({left: "-=" + ((window.innerWidth-110)/5)});
            }
        });

        $("#slideRight").mouseenter(function(){
            $(this).css("opacity",1);
        });

        $("#slideRight").mouseleave(function(){
            $(this).css("opacity",.5);
        });

        $(".box").click(function(){
            var id = (this).getAttribute("id");
            if(document.getElementById("popup")) {
                closePopup();
            }
            createPopup(id);
        });
    });
});

function createBoxes(){
    console.log("here");
    for(var container = 1; container<= 3; container++ ) {
        var element = document.getElementById("container" + container);
        if (container == 1) {
            for (var i in DiaryDates.features) {
                var div = document.createElement("div");
                var att = document.createAttribute("class");
                var att2 = document.createAttribute("id");
                var node = document.createElement("P");
                var t = document.createTextNode(DiaryDates.features[i].properties.City_Names);
//                var node2 = document.createElement("P");
//                var t2 = document.createTextNode("Longitude: " + DiaryDates.features[i].properties.x_longitude );
//                var node3 = document.createElement("P");
//                var t3 = document.createTextNode("Latitude: "+ DiaryDates.features[i].properties.y_latitude);
                var elementbox = document.getElementById("box" + "-" + container + "-" + i);
                
                att.value = "box";
                att2.value = "box" + "-" + container + "-" + i;
                div.setAttributeNode(att);
                div.setAttributeNode(att2);
               
                node.appendChild(t);
     
//                node2.appendChild(t2);
//             
//                node3.appendChild(t3);
               
                div.appendChild(node);
//                div.appendChild(node2);
//                div.appendChild(node3);
              
                element.appendChild(div);
               
                elementbox.style.width = ((window.innerWidth - 110) / 5) - 40 + "px";
            }
            var size = (((window.innerWidth - 110) / 5)) * (DiaryDates.features.length);
            element.style.width = size + "px";
        }
        else if (container == 2) {
            for (var i in RuskinDates) {
                var div = document.createElement("div");
                var att = document.createAttribute("class");
                var att2 = document.createAttribute("id");
                att.value = "box";
                att2.value = "box" + "-" + container + "-" + i;
                div.setAttributeNode(att);
                div.setAttributeNode(att2);
                var node = document.createElement("P");
                var t = document.createTextNode(RuskinDates[i].place_name);
                node.appendChild(t);
                var node2 = document.createElement("P");
//                var t2 = document.createTextNode("Continent: " + RuskinDates[i].continent);
//                node2.appendChild(t2);
//                var node3 = document.createElement("P");
//                var t3 = document.createTextNode("Description: " + RuskinDates[i].description);
                node3.appendChild(t3);
                div.appendChild(node);
//                div.appendChild(node2);
//                div.appendChild(node3);
                element.appendChild(div);
                var elementbox = document.getElementById("box" + "-" + container + "-" + i);
                elementbox.style.width = ((window.innerWidth - 110) / 5) - 40 + "px";
            }
            var size = (((window.innerWidth - 110) / 5)) * (RuskinDates.length);
            element.style.width = size + "px";
        }
    }
}

function createPopup(boxId){
    var div = document.createElement("div");
    var att = document.createAttribute("id");
    att.value = "popup";
    div.setAttributeNode(att);
    var node, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14;
    var t, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;
    var temp = boxId.split("-");
    console.log(temp[1] + temp[2]);
    if (temp[1] == 1){
        node = document.createElement("P");
        t = document.createTextNode("City name : "+ DiaryDates.features[temp[2]].properties.City_Names);
        node.appendChild(t);

//        node2 = document.createElement("P");
//        t2 = document.createTextNode("Longitude: "+ DiaryDates.features[temp[2]].properties.x_longitude);
//        node2.appendChild(t2);
//
//        node3 = document.createElement("P");
//        t3 = document.createTextNode("Latitude: "+ DiaryDates.features[temp[2]].properties.y_latitude);
//        node3.appendChild(t3);

        div.appendChild(node);
//        div.appendChild(node2);
//        div.appendChild(node3);
    }
    else if(temp[1] == 2){
        node = document.createElement("P");
        t = document.createTextNode("place_id: "+ RuskinDates[temp[2]].place_id);
        node.appendChild(t);

        node2 = document.createElement("P");
        t2 = document.createTextNode("place_type: "+ RuskinDates[temp[2]].place_type);
        node2.appendChild(t2);

        node3 = document.createElement("P");
        t3 = document.createTextNode("place_name: "+ RuskinDates[temp[2]].place_name);
        node3.appendChild(t3);

        node4 = document.createElement("P");
        t4 = document.createTextNode("continent: "+ RuskinDates[temp[2]].continent);
        node4.appendChild(t4);

        node5 = document.createElement("P");
        t5 = document.createTextNode("country: "+ RuskinDates[temp[2]].country);
        node5.appendChild(t5);

        node6 = document.createElement("P");
        t6 = document.createTextNode("canton: "+ RuskinDates[temp[2]].canton);
        node6.appendChild(t6);

        node7 = document.createElement("P");
        t7 = document.createTextNode("county: "+ RuskinDates[temp[2]].county);
        node7.appendChild(t7);

        node8 = document.createElement("P");
        t8 = document.createTextNode("department: "+ RuskinDates[temp[2]].department);
        node8.appendChild(t8);

        node9 = document.createElement("P");
        t9 = document.createTextNode("province: "+ RuskinDates[temp[2]].province);
        node9.appendChild(t9);

        node10 = document.createElement("P");
        t10 = document.createTextNode("state: "+ RuskinDates[temp[2]].state);
        node10.appendChild(t10);

        node11 = document.createElement("P");
        t11 = document.createTextNode("latitude: "+ RuskinDates[temp[2]].latitude);
        node11.appendChild(t11);

        node12 = document.createElement("P");
        t12 = document.createTextNode("longitude: "+ RuskinDates[temp[2]].longitude);
        node12.appendChild(t12);

        node13 = document.createElement("P");
        t13 = document.createTextNode("description: "+ RuskinDates[temp[2]].description);
        node13.appendChild(t13);

        node14 = document.createElement("P");
        t14 = document.createTextNode("place_note: "+ RuskinDates[temp[2]].place_note);
        node14.appendChild(t14);

        div.appendChild(node);
        div.appendChild(node2);
        div.appendChild(node3);
        div.appendChild(node4);
        div.appendChild(node5);
        div.appendChild(node6);
        div.appendChild(node7);
        div.appendChild(node8);
        div.appendChild(node9);
        div.appendChild(node10);
        div.appendChild(node11);
        div.appendChild(node12);
        div.appendChild(node13);
        div.appendChild(node14);

    }

    var element = document.body;
    element.appendChild(div);
    var close = document.createElement("img");
    var att2 = document.createAttribute("id");
    att2.value = "close";
    close.setAttributeNode(att2);
    close.setAttribute("src", "resources/white_x_close.png");
    var popUp = document.getElementById("popup");
    popUp.appendChild(close);
    close.onclick = function(){closePopup()};
}

function closePopup(){
    var rem = document.getElementById("popup");
    document.body.removeChild(rem);
}

function getVisibleContainer(){
    if(document.getElementById("container1").style.display.valueOf().toString() == "block"){
        return "container1";
    }else if(document.getElementById("container2").style.display.valueOf().toString() == "block"){
        return "container2";
    }else{
        return "container3";
    }
}

function setVisibleContainer(num) {
    switch (num) {
        case(1):
            $("#container1").show();
            $("#container2").hide();
            $("#container3").hide();
            $("#timebutton1").css({"background":"#3B5786","border-bottom-color":"#3B5786"});
            $("#timebutton2").css({"background":"#2f456a","border-bottom-color":"#2f456a"});
            $("#timebutton3").css({"background":"#2f456a","border-bottom-color":"#2f456a"});
            break;
        case(2):
            $("#container2").show();
            $("#container1").hide();
            $("#container3").hide();
            $("#timebutton2").css({"background":"#3B5786","border-bottom-color":"#3B5786"});
            $("#timebutton1").css({"background":"#2f456a","border-bottom-color":"#2f456a"});
            $("#timebutton3").css({"background":"#2f456a","border-bottom-color":"#2f456a"});
            break;
        case(3):
            $("#container3").show();
            $("#container1").hide();
            $("#container2").hide();
            $("#timebutton3").css({"background":"#3B5786","border-bottom-color":"#3B5786"});
            $("#timebutton1").css({"background":"#2f456a","border-bottom-color":"#2f456a"});
            $("#timebutton2").css({"background":"#2f456a","border-bottom-color":"#2f456a"});
            break;
    }
}
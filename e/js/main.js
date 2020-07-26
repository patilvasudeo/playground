function buildMenu(){
    var menuString = "";
    var eventArray;
    var isEvent = false;
    var arrayString;

    menuString = menuString + "<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>×</a>";
    menuString = menuString + "<a href='index.html'>Home</a>";
    menuString = menuString + "<a href='#'>आम्ही कोण</a>";
    menuString = menuString + "<a href='vanshvel.html'>वंश वटवृक्ष</a>";
    menuString = menuString + "<a href='search.html'>शोध - महितीचा</a>";
    menuString = menuString + "<a href='#'>संपर्क</a>";
    eventArray = getbdaymday();

    //Checking birthdays
    isEvent = false;

    for (i = 0; i < 3; i++){
        arrayString = eventArray[i].split("~");
        if (parseInt(arrayString[0],10)>0){
            isEvent = true;
        }
    }
    // Building Birthday links
    if (isEvent){        
        menuString = menuString + "<a style='display:inline; margin-left: 0px;margin-right: 0px;' href=''>वाढदिवस</a><img src = 'img/birthdaycake.png' alt= 'वाढदिवस' style='width:28px; height:28px;display:inline; margin-left: 0px;margin-right: 0px;'/><BR> ";
        for (i = 0; i < 3; i++){
            arrayString = eventArray[i].split("~");
            if (parseInt(arrayString[0],10)>0){
                menuString = menuString + "&nbsp;&nbsp;" + arrayString[1];
            }
        }

    }

    //checking marriage anniversary
    isEvent = false;

    for (i = 3; i < 6; i++){
        arrayString = eventArray[i].split("~");
        if (parseInt(arrayString[0],10)>0){
            isEvent = true;
        }
    }

    //Building marriage anniversary link
    if (isEvent){        
        menuString = menuString + "<a style='display:inline; margin-left: 0px;margin-right: 0px;' href=''>शुभमंगल-दिन</a><img src = 'img/rose.png' alt= 'वाढदिवस' style='width:28px; height:28px;display:inline; margin-left: 0px;margin-right: 0px;'/><BR> ";
        for (i = 3; i < 6; i++){
            arrayString = eventArray[i].split("~");
            if (parseInt(arrayString[0],10)>0){
                menuString = menuString + "&nbsp;&nbsp;" + arrayString[1];
            }
        }
    }
    menuString = menuString + "<a href='#'></a>";
    menuString = menuString + "<a href='#'></a>";
    menuString = menuString + "<a href='#'></a>";
    menuString = menuString + "<a href='#'></a>";

    document.getElementById("mySidebar").innerHTML = menuString;
    //return menuString;
}




function getbdaymday(){
    var items = mynodes;
    var myBDate;
    var myMonths = ["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे", "जून","जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर","नोव्हेंबर","डिसेंबर"]; 
    var myDays =["रविवार","सोमवार","मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"];
    var returnArray = [];

    var todaystring = "<a style='font-size:13px;display:inline; margin-left: 0px;margin-right: 0px;' href=''>आज : ";
    var tomorrowstring = "<a style='font-size:13px;display:inline; margin-left: 0px;margin-right: 0px;' href=''>उद्या :";
    var tomrrow1string = "<a style='font-size:13px;display:inline; margin-left: 0px;margin-right: 0px;' href=''>परवा : ";

    const today = new Date();
    const today1 = new Date();
    const today2 = new Date(today);
    const tomorrow = new Date(today);

    var todayCount = 0;
    var tomorowCount = 0;
    var tomrrow1Count = 0;

    today2.setDate(today.getDate()+1);
    tomorrow.setDate(tomorrow.getDate() + 2);
    today.setDate(today.getDate() - 1);

    todaystring = todaystring + today1.getDate() + " " + myMonths[today1.getMonth()] + ", "+ myDays[today1.getDay()] +"</a><BR>";
    tomorrowstring= tomorrowstring + today2.getDate() + " " + myMonths[today2.getMonth()] + ", "+ myDays[today2.getDay()] +"</a><BR>";
    tomrrow1string = tomrrow1string + tomorrow.getDate() + " " + myMonths[tomorrow.getMonth()] + ", "+ myDays[tomorrow.getDay()] +"</a><BR>"; 

    var myCurrentMonth = (new Date()).getMonth();
    var myCurrentYear = (new Date()).getFullYear();
    var mynewDate;  

    for (var i = 0; i < items.length; ++i) {
        myBDate = new Date(items[i].birth);
        mynewDate = new Date("'"+myCurrentYear+'/'+ (myBDate.getMonth()+1) +'/'+myBDate.getDate());
        
        if (mynewDate > today && mynewDate < tomorrow){
           if ((mynewDate.getDate() == today1.getDate()) && (mynewDate.getMonth() == today1.getMonth())) {
              todaystring = todaystring + "&nbsp;&nbsp;&nbsp;<a style= 'font-size:12px;display:inline; margin-left: 0px;margin-right: 0px;'href='vanshvel.html?id="+ items[i].id+"'>" + items[i].title + "</a><BR>";
              todayCount++;
           }

           if ((mynewDate.getDate() == today2.getDate()) && (mynewDate.getMonth() == today2.getMonth())) {
              tomorrowstring = tomorrowstring + "&nbsp;&nbsp;&nbsp;<a style= 'font-size:12px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i].id+"'>" + items[i].title + "</a><BR>";
              tomorowCount++;
           }

           if ((mynewDate.getDate() == tomorrow.getDate()) && (mynewDate.getMonth() == tomorrow.getMonth())) {
              tomrrow1string = tomrrow1string + "&nbsp;&nbsp;&nbsp;<a style= 'font-size:12px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i].id+"'>" + items[i].title + "</a><BR>";
              tomrrow1Count++;
           }
        }
    }

    todaystring = todayCount + "~" + todaystring;
    tomorrowstring = tomorowCount +  "~" + tomorrowstring;
    tomrrow1string = tomrrow1Count + "~" + tomrrow1string;

    returnArray.push(todaystring);
    returnArray.push(tomorrowstring);
    returnArray.push(tomrrow1string);
    //document.getElementById("bday").innerHTML = document.getElementById("bday").innerHTML + "<BR>" + todaystring + "<BR>" + tomorrowstring + "<BR>" +  tomrrow1string;
    
    var todaystring = "<a style='font-size:13px;display:inline; margin-left: 0px;margin-right: 0px;' href=''>आज : ";
    var tomorrowstring = "<a style='font-size:13px;display:inline; margin-left: 0px;margin-right: 0px;' href=''>उद्या :";
    var tomrrow1string = "<a style='font-size:13px;display:inline; margin-left: 0px;margin-right: 0px;' href=''>परवा : ";

    todaystring = todaystring + today1.getDate() + " " + myMonths[today1.getMonth()] + ", "+ myDays[today1.getDay()] +"<BR>";
    tomorrowstring= tomorrowstring + today2.getDate() + " " + myMonths[today2.getMonth()] + ", "+ myDays[today2.getDay()] +"<BR>";
    tomrrow1string = tomrrow1string + tomorrow.getDate() + " " + myMonths[tomorrow.getMonth()] + ", "+ myDays[tomorrow.getDay()] +"<BR>"; 

    todayCount = 0;
    tomorowCount = 0;
    tomrrow1Count = 0;
    for (var i = 0; i < items.length; ++i) {
        myBDate = new Date(items[i].marriage);
        mynewDate = new Date("'"+myCurrentYear+'/'+ (myBDate.getMonth()+1) +'/'+myBDate.getDate());
        
        if (mynewDate > today && mynewDate < tomorrow){
           if ((mynewDate.getDate() == today1.getDate()) && (mynewDate.getMonth() == today1.getMonth())) {
              todaystring = todaystring + "&nbsp;&nbsp;&nbsp;<a style= 'font-size:11px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i].id+"'>" + (items[i].title).trim() + "  </a>" + "<img src ='img/heart.png' style= 'height:15px;width:15px;display:inline; margin-left: 0px;margin-right: 0px;' alt = ''/> <a style= 'font-size:11px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i+1].id+"'>" + (items[i+1].title).trim() + "</a><br>" ;
              todayCount++;
           }

           if ((mynewDate.getDate() == today2.getDate()) && (mynewDate.getMonth() == today2.getMonth())) {
              tomorrowstring = tomorrowstring + "&nbsp;&nbsp;&nbsp;<a style= 'font-size:11px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i].id+"'>" + (items[i].title).trim() + "  </a>" + "<img src ='img/heart.png' style= 'height:15px;width:15px;display:inline; margin-left: 0px;margin-right: 0px;' alt = ''/> <a style= 'font-size:11px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i+1].id+"'>" + (items[i+1].title).trim() + "</a><br>" ;
              tomorowCount++;
           }

           if ((mynewDate.getDate() == tomorrow.getDate()) && (mynewDate.getMonth() == tomorrow.getMonth())) {
              tomrrow1string = tomrrow1string + "&nbsp;&nbsp;&nbsp;<a style= 'font-size:11px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i].id+"'>" + (items[i].title).trim() + "  </a>" + "<img src ='img/heart.png' style= 'height:15px;width:15px;display:inline; margin-left: 0px;margin-right: 0px;' alt = ''/> <a style= 'font-size:11px;display:inline; margin-left: 0px;margin-right: 0px;' href='vanshvel.html?id="+ items[i+1].id+"'>" + (items[i+1].title).trim() + "</a><br>" ;
              tomrrow1Count++;
           }
        }
    }
    //document.getElementById("mday").innerHTML = document.getElementById("mday").innerHTML + "<BR>" + todaystring + "<BR>" + tomorrowstring + "<BR>" +  tomrrow1string;
    todaystring = todayCount + "~" + todaystring;
    tomorrowstring = tomorowCount +  "~" + tomorrowstring;
    tomrrow1string = tomrrow1Count + "~" + tomrrow1string;

    returnArray.push(todaystring);
    returnArray.push(tomorrowstring);
    returnArray.push(tomrrow1string);
    return returnArray;

}    

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}


function clickme(){
      var searchtext = (document.getElementById("searchname").value).trim();
      var items = mynodes;
      var myresults = new Array();            
      var columnsIn = items[0];
      var searcharray = new Array();
      var searchcount = 0;
      searchtext = searchtext.toUpperCase();
      
      for(var key in columnsIn){
          
          switch (key){
              case "id":{
                  break;
              }
              case "title":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].title.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~");
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("नाव :" + searchcount);
                  }                   

               break;
                  }

              case "education":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].education.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].education);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("शिक्षण :" + searchcount);
                  }                   

               break;
              }

              case "currentjob":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].currentjob.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].currentjob);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("सध्याचा व्यवसाय :" + searchcount);
                  }                   

               break;
              }

              case "bday":{
                 searchcount = 0; 
                 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].bday.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].bday);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("वाढदिवस :" + searchcount);
                  }                   

               break;
              }

              case "mday":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mday.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mday);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("लग्नाचा वाढदिवस :" + searchcount);
                  }                   

               break;
              }

              case "add":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].add.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].add);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("सध्याचा निवास / माहेर / सासर :" + searchcount);
                  }                   

               break;
              }

              case "city":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].city.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].city);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("गाव :" + searchcount);
                  }                   

               break;
              }


              case "mom":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mom.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mom);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("आई / सासु :" + searchcount);
                  }                   

               break;
              }

              case "dad":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].dad.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].dad);
                     searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("वडिल / सासरे :" + searchcount);
                  }                   

               break;
              }

            case "mahsaskul":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mahsaskul.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mahsaskul);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("कुळ (माहेर / सासर) :" + searchcount);
                  }                   

               break;
              }

             case "mahersasar":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mahersasar.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mahersasar);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("माहेर / सासर / निवास :" + searchcount);
                  }                   

               break;
              }

             case "mama":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mama.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mama);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("मामा :" + searchcount);
                  }                   

               break;
              }

             case "mamakul":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mamakul.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mamakul);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("मामा कुळ:" + searchcount);
                  }                   

               break;
              }

             case "mamalocation":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mamalocation.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mamalocation);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("मामा - गाव :" + searchcount);
                  }                   

               break;
              }

             case "mavshi":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mavshi.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mavshi);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("मावशी :" + searchcount);
                  }                   

               break;
              }

             case "mavshikul":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mavshikul.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mavshikul);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("मावशी कुळ :" + searchcount);
                  }                   

               break;
              }

             case "mavshilocation":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].mavshilocation.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].mavshilocation);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("मावशी - गाव :" + searchcount);
                  }                   

               break;
              }
             case "aatya":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].aatya.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].aatya);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("आत्त्या :" + searchcount);
                  }                   

               break;
              }

            case "aatyakul":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].aatyakul.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].aatyakul);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("आत्त्या कुळ :" + searchcount);
                  }                   

               break;
              }

             case "aatyalocation":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].aatyalocation.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].aatyalocation);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("आत्त्या - गाव :" + searchcount);
                  }                   

               break;
              }

             case "bhau":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].bhau.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].bhau);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("भाऊ :" + searchcount);
                  }                   

               break;
              }

             case "bhaulocation":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].bhaulocation.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].bhaulocation);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("भाऊ - गाव :" + searchcount);
                  }                   

               break;
              }

             case "bahin":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].bahin.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].bahin);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("बहिण :" + searchcount);
                  }                   

               break;
              }
              case "bahinkul":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].bahinkul.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].bahinkul);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("बहिण कुळ :" + searchcount);
                  }                   

               break;
              }
             case "bahinlocation":{
                 searchcount = 0; 
                 for (var i = 0; i < items.length; ++i) {
                    if (((items[i].bahinlocation.toUpperCase()).search(searchtext)) != -1) {
                      myresults.push(parseInt(items[i].id,10) + "~ - " + items[i].bahinlocation);
                      searchcount++;
                    } 
                  }
                  if (searchcount > 0 ){                
                       searcharray.push("बहिण - गाव :" + searchcount);
                  }                   

               break;
              }
             case 'parents':{
                  break;
              }
              case 'spouses':{
                  break;
              }
              case 'level':{
                  break;
              }
              case 'href':{
                  break;
              }
              case 'itemTitleColor':{
                  break;
              }
              case 'relativeItem':{
                  break;
              }                            
              case 'templateName':{
                  break;
              }
              default:                    
              {
              }                 
          }
      } 
 

      var resultstring = "";
      var arraystring;
      var resultarray;
      var innerloop = 0;
      var innerto = 0;

      //alert(searcharray.length);

      if (searcharray.length > 0 ){

          for (i=0;i < searcharray.length;i++){
              
              arraystring = searcharray[i].split(":");
              document.getElementById("resultdiv").style.display = "block";
              document.getElementById("button"+parseInt(i,10)).style.visibility = "visible";

              document.getElementById("button"+parseInt(i,10)).innerHTML = "<B>" + arraystring[0] + " - " + arraystring[1] + " शोध परिणाम </B>"
              
              
              innerto = innerloop + parseInt(arraystring[1],10);
              resultstring = "";
              for (innerarray =innerloop; innerarray  < innerto; innerarray++){
                  resultarray = myresults[innerarray].split("~");

                  resultstring = resultstring + "<a href='vanshvel.html?id="+ items[resultarray[0]-1].id+"'>" + items[resultarray[0]-1].title + resultarray[1] + "</a><BR>";
              }
              innerloop= innerto;
              document.getElementById("div"+parseInt(i,10)).style.visibility = "visible";
              document.getElementById("div"+parseInt(i,10)).innerHTML = resultstring;
          }
          
          for (ivalue=i;ivalue<25;ivalue++) {

              document.getElementById("button"+ parseInt(ivalue,10)).style.visibility = "hidden";
              document.getElementById("div"+ parseInt(ivalue,10)).style.visibility = "hidden";
           }
       } else {
              for (ivalue=0;ivalue<25;ivalue++) {

                document.getElementById("button"+ parseInt(ivalue,10)).style.visibility = "hidden";
                document.getElementById("div"+ parseInt(ivalue,10)).style.visibility = "hidden";
             }

              document.getElementById("resultdiv").style.display = "block";
              document.getElementById("button0").style.visibility = "visible";

              document.getElementById("button0").innerHTML = "<B>0 शोध परिणाम </B>"

       }    
  } 



//Comparer Function    
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    


function searchMe() {
    var result;
    var itemdetails;
    
    var value = $('input').val();
    var myvalue = $('#nodenames [value="' + value + '"]').data('value');

    jQuery("#basicdiagram").famDiagram({ cursorItem: myvalue });
    jQuery("#basicdiagram").famDiagram("update", primitives.orgdiagram.UpdateMode.Refresh);

    result = myfunction(myvalue);
};



function getInfoTemplate() {
    var result = new primitives.orgdiagram.TemplateConfig();
    result.name = "info";

    result.itemSize = new primitives.common.Size(220, 137);
    result.minimizedItemSize = new primitives.common.Size(3, 3);
    result.highlightPadding = new primitives.common.Thickness(2, 2, 2, 2);


    var itemTemplate = jQuery(
      '<div class="bp-item bp-corner-all bt-item-frame">'
        + '<div name="titleBackground" class="bp-item bp-corner-all bp-title-frame" style="top: 2px; left: 2px; width: 216px; height: 22px;">'
            + '<div name="title" class="bp-item bp-title" style="top: 3px; left: 6px; width: 208px; height: 20px;text-align:center;">'
            + '</div>'
        + '</div>'
        + '<div name="education" class="bp-item" style="top: 24px; left: 6px; width: 212px; height: 16px; font-size: 11px;"></div>'
        + '<div name="currentjob" class="bp-item" style="top: 40px; left: 6px; width: 212px; height: 16px; font-size: 11px;"></div>'
        + '<div name="bday" class="bp-item" style="top: 56px; left: 6px; width: 212px; height: 16px; font-size: 11px;"></div>'
        + '<div name="mday" class="bp-item" style="top: 72px; left: 6px; width: 212px; height: 16px; font-size: 11px;"></div>'
        + '<div name="add" class="bp-item" style="top: 88px; left: 6px; width: 212px; height: 16px; font-size: 11px;"></div>'
        + '<div name="city" class="bp-item" style="top: 104px; left: 6px; width: 212px; height: 16px; font-size: 11px;"></div>' 
        + '<a name="map" target="_blank" class="bp-item" style="text-align:center;top: 120px; left: 6px; width: 212px; height: 16px; font-size: 11px; font-weight: bold; text-decoration: none;"> <img src="img/map.png" alt="Location" style="width:10px; height=10px;text-align:center;display: block; margin-left: auto;margin-right: auto;"> </a>'
    + '</div>'
    ).css({
        width: result.itemSize.width + "px",
        height: result.itemSize.height + "px"
    }).addClass("bp-item bp-corner-all bt-item-frame");
    result.itemTemplate = itemTemplate.wrap('<div>').parent().html();

    return result;
}



function onTemplateRender(event, data) {
  var hrefElement = data.element.find("[name=map]");
  switch (data.renderingMode) {
      case primitives.common.RenderingMode.Create:
        /* Initialize widgets here */
          hrefElement.click(function (e) {
          /* Block mouse click propagation in order to avoid layout updates before server postback*/
            primitives.common.stopPropagation(e);
        });
        break;
      case primitives.common.RenderingMode.Update:
        /* Update widgets here */
        break;
  }

  var itemConfig = data.context;

  if (data.templateName == "info") {
      data.element.find("[name=titleBackground]").css({ "background": itemConfig.itemTitleColor });

      hrefElement.attr({ "href": itemConfig.href });
      var fields = ["title", "education", "currentjob", "bday", "mday", "add", "city", "map"];
      for (var index = 0; index < fields.length; index++) {
        var field = fields[index];

        var element = data.element.find("[name=" + field + "]");
        if (element.text() != itemConfig[field]) {
            element.text(itemConfig[field]);
        }
      }
  }
}

function changedetails(e, data) {
  var result = myfunction(data.context.id);
}  


function  myfunction(mycurrentid){
    
    var totalnodes = items.length
    var currentnode;
        
    document.getElementById("mom").innerText = ""; 
    document.getElementById("dad").innerText = ""; 
    document.getElementById("mahersasar").innerText = ""; 
    document.getElementById("mamaname").innerText = ""; 
    document.getElementById("mavshiname").innerText = "";  
    document.getElementById("atyaname").innerText = ""; 
    document.getElementById("bhauname").innerText = ""; 
    document.getElementById("bahinname").innerText = ""; 
    document.getElementById("maherimg").style.visibility = 'hidden';
    document.getElementById("mamimg").style.visibility = 'hidden';
    document.getElementById("mavimg").style.visibility = 'hidden';
    document.getElementById("atyimg").style.visibility = 'hidden';
    document.getElementById("bhaimg").style.visibility = 'hidden';
    document.getElementById("bahimg").style.visibility = 'hidden';

    var displayresult;
    for (currentnode = 0; currentnode < totalnodes; currentnode++){


        if (mycurrentid == items[currentnode].id ) {
          document.getElementById("cardone").style.backgroundColor = items[currentnode].itemTitleColor;
          document.getElementById("cardtwo").style.backgroundColor = items[currentnode].itemTitleColor;
          document.getElementById("cardthree").style.backgroundColor = items[currentnode].itemTitleColor;
          document.getElementById("cardfour").style.backgroundColor = items[currentnode].itemTitleColor;

            //mom
            if (items[currentnode].mom != "") {   
               document.getElementById('mom').innerText = items[currentnode].mom; 
            }
          
          //dad
          if (items[currentnode].dad != "") {
              document.getElementById("dad").innerText = items[currentnode].dad;
          }
          
          //maher
          if (items[currentnode].mahsaskul != "") {
              document.getElementById("mahersasar").innerText = items[currentnode].mahsaskul; 
              if (items[currentnode].mahersasar != ""){
                document.getElementById("mahersasar").innerText = document.getElementById("mahersasar").innerText + ", " + items[currentnode].mahersasar; 

                if (items[currentnode].mahsasmap != "") {
                    document.getElementById("maherimg").style.visibility = 'visible';
                    document.getElementById("maher").href=items[currentnode].mahsasmap;
                }
              }
          } else {
              if (items[currentnode].mahersasar != ""){
                document.getElementById("mahersasar").innerText = items[currentnode].mahersasar; 

                if (items[currentnode].mahsasmap != "") {
                    document.getElementById("maherimg").style.visibility = 'visible';
                    document.getElementById("maher").href=items[currentnode].mahsasmap;
                }
              }
          }

          //mama
          if (items[currentnode].mama != "") {
              document.getElementById("mamaname").innerText = items[currentnode].mama; 
              
              if (items[currentnode].mamakul != ""){
                document.getElementById("mamaname").innerText = document.getElementById("mamaname").innerText + ", " + items[currentnode].mamakul; 
              }

              if (items[currentnode].mamalocation != ""){
                document.getElementById("mamaname").innerText = document.getElementById("mamaname").innerText + ", " + items[currentnode].mamalocation; 

                if (items[currentnode].mamamap != "") {
                    document.getElementById("mamimg").style.visibility = 'visible';
                    document.getElementById("mama").href=items[currentnode].mamamap;
                }
              }
          }    

          //mavshi
          if (items[currentnode].mavshi != "") {
              document.getElementById("mavshiname").innerText = items[currentnode].mavshi; 
              
              if (items[currentnode].mavshikul != ""){
                document.getElementById("mavshiname").innerText = document.getElementById("mavshiname").innerText + ", " + items[currentnode].mavshikul; 
              }

              if (items[currentnode].mavshilocation != ""){
                document.getElementById("mavshiname").innerText = document.getElementById("mavshiname").innerText + ", " + items[currentnode].mavshilocation; 

                if (items[currentnode].mavshimap != "") {
                    document.getElementById("mavimg").style.visibility = 'visible';
                    document.getElementById("mavshi").href=items[currentnode].mavshimap;
                }
              }
          }


          //atya
          if (items[currentnode].aatya != "") {
              document.getElementById("atyaname").innerText = items[currentnode].aatya; 
              
              if (items[currentnode].aatyakul != ""){
                document.getElementById("atyaname").innerText = document.getElementById("atyaname").innerText + ", " + items[currentnode].aatyakul; 
              }

              if (items[currentnode].aatyalocation != ""){
                document.getElementById("atyaname").innerText = document.getElementById("atyaname").innerText + ", " + items[currentnode].aatyalocation; 

                if (items[currentnode].aatyamap != "") {
                    document.getElementById("atyimg").style.visibility = 'visible';
                    document.getElementById("atya").href=items[currentnode].aatyamap;
                }
              }
          }

          //bahin
          if (items[currentnode].bahin != "") {
              document.getElementById("bahinname").innerText = items[currentnode].bahin; 
              
              if (items[currentnode].bahinkul != ""){
                document.getElementById("bahinname").innerText = document.getElementById("bahinname").innerText + ", " + items[currentnode].bahinkul; 
              }

              if (items[currentnode].bahinlocation != ""){
                document.getElementById("bahinname").innerText = document.getElementById("bahinname").innerText + ", " + items[currentnode].bahinlocation; 

                if (items[currentnode].bahinmap != "") {
                    document.getElementById("bahimg").style.visibility = 'visible';
                    document.getElementById("bahin").href=items[currentnode].bahinmap;
                }
              }
          }

          //bahu
          if (items[currentnode].bhau != "") {
              document.getElementById("bhauname").innerText = items[currentnode].bhau; 
              
              if (items[currentnode].bhaulocation != ""){
                document.getElementById("bhauname").innerText = document.getElementById("bhauname").innerText + ", " + items[currentnode].bhaulocation; 

                if (items[currentnode].bhaumap != "") {
                    document.getElementById("bhaimg").style.visibility = 'visible';
                    document.getElementById("bhau").href=items[currentnode].bhaumap;
                }
              }
          }

        }      
    }
}     

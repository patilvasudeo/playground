        function myClick() {

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
                            //myresults.push(items[i].id);
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
                            //myresults.push(items[i].id);
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

                        resultstring = resultstring + "<a href='famtree.html?id="+ items[resultarray[0]-1].id+"'>" + items[resultarray[0]-1].title + resultarray[1] + "</a><BR>";
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

function dualFunc() {
  var matchDataObjArr= //JSON of Matches goes here
  var newMatchData=filterData(matchDataObjArr);
  document.getElementById("return").innerHTML=giveRandomMatch(newMatchData);
}

/*document.getElementByID("min-time").defaultValue="00:00:00";
console.log("The default Minimum time is: " +document.getElementByID("min-time").defaultValue )
document.getElementByID("max-time").defaultValue="99:99:99";
console.log("The default Maximum time is: " +document.getElementByID("max-time").defaultValue )*/
document.getElementById("rating").defaultValue=0;
document.getElementById("year").defaultValue=0;

function filterData(matchData){
  /*var minTime=document.getElementByID("min-time").value;
  console.log("The current min time is: "+ document.getElementByID("min-time").value);
  var maxTime=document.getElementByID("max-time").value;
  console.log("The current max time is: "+ document.getElementByID("max-time").value);*/
  console.log("Initial Length: "+ matchData.length);
  var minRating=document.getElementById("rating").value;
  console.log("The current rating is: "+ document.getElementById("rating").value);
  var company=document.getElementById("company").value;
  console.log("Here are the selected companies: "+ company);
  var companyCounter=0;
  var ratingCounter=0;
  var yearCounter=0;
  for (var i=0; i<matchData.length; i++){
    if(matchData[i]["rating"]<minRating){
      matchData.splice(i, 1);
      console.log("Rating too low");
      i--;
      ratingCounter++;
      continue;
    }
   else{
    var yearString=matchData[i]["date"].slice(13);
    console.log("This is the Year String: "+ yearString);
    var yearInt=parseInt(yearString);
     if(yearInt<document.getElementById("year").value){
       matchData.splice(i, 1);
       i--;
       yearCounter++;
       continue;
     }
     console.log("This is the Year Int: "+ yearInt);
    var companyName=matchData[i]["card name"].slice(0,3);
     console.log("The current i is: "+ i+ " and the current company name is: "+companyName);
    var hasCompany=false;
    if((company===companyName)||(company=="NJPW" && companyName=="NJP")|| (company=="AJPW" && companyName=="AJP")||company=="NOAH"&&companyName=="NOA"){
        hasCompany=true;
        console.log("This company lines up!");
        continue;
    }
    if(!hasCompany){
      matchData.splice(i, 1);
      i--;
      console.log("This company doesn't line up");
      companyCounter++;
    }
   }
  }
  console.log("This many arrays were removed: "+ (ratingCounter+companyCounter+yearCounter));
  console.log("The length is now: "+ matchData.length);
  if(matchData.length==0){
    var ret="Don't have that match :(";
    return ret;
  }
  else return matchData;
}

function giveRandomMatch(matchData) {
  var rand=Math.floor(Math.random()*(matchData.length+1));
  var returnString= matchData[rand]["winner"]+ " vs. "+ matchData[rand]["loser"]+" , " + matchData[rand]["card name"]+" , " + "Meltzer Rating: "+ matchData[rand]["rating"] + " Link: "+ matchData[rand]["link"];
  console.log("Here's the random match: "+ returnString);
  return returnString;
}

/*function chooseCompany(){
  var company=document.getElementById("company").value;
  console.log("Here are the selected companies: "+ company);
  return company;
}*/

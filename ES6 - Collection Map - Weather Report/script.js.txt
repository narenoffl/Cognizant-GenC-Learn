var weatherMap = new Map();  // DO NOT CHANGE THIS STATEMENT

function addRecords(city,temperature){
    weatherMap.set(city,temperature);
}

function searchReport(){
    var search = document.getElementById("searchInput").value;
    document.getElementById("result2").innerHTML = `Temperature of ${search} : ${weatherMap.get(search)}`;

    // Fetch search input
    // Get the temperature based on the search input from Map
    // Display the output as per the requirement in the description
}

function weatherReport(){
    var cit = document.getElementById("city").value;
    var temp =document.getElementById("temperature").value;
    addRecords(cit,temp);
    document.getElementById("result1").innerHTML = `Weather Report added successfully.`;
    // Fetch city and temperature value
    // Invoke addRecords method
    // Display the message as per the requirement in the description
}

// DO NOT ALTER/DELETE THIS METHOD
function enableSearch(){ 
    document.getElementById("result1").innerHTML="";
    document.getElementById("searchDiv").style["display"]="block";
}
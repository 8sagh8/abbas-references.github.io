let searchAllButtonID = document.getElementById("searchAllButtonID");
let searchTopicButtonID = document.getElementById("searchTopicButtonID");
let displayReferenceDiv= document.getElementById("displayReferenceDiv");
let displayTopicDiv = document.getElementById("displayTopicDiv");
let displayDiv = document.getElementById("displayDiv");
let displayEventDiv = document.getElementById("displayEventDiv");
let homeButtonID = document.getElementById("homeButtonID");
let eventButtonID = document.getElementById("eventButtonID");
let sideNavID = document.getElementById("sideNavID");

// array of words those i don't want in topic list
let arrayDontWant = ["", " ", "(a.s)", "(s.a)", "(s.a.w.a.w)", "-", "/", "|", "-e-", "hai", "hazrat", "jo", "karta", "krta", 
                    "ks", "kis", "nahi", "nhi", "aur", "banatey", "chuna", "chuntey", "ddon", "farmaya", "hai", "hain", "hasil",
                    "hoga", "hongey", "janta", "jayega", "jo", "js", "k", "karain?", "karain", "krne", "karne", "karney", "karo",
                "karta", "kese", "ki", "kaise", "kaise", "kise", "kisey", "kon", "kon?", "likh", "logo", "logoo", "logoon", "lye",
            "mai", "main", "na", "ne", "ney", "nahi", "nhi", "of", "pe", "phir", "pr", "rah", "roz", "saal", "sb", "sab", "sirf",
        "verse", "virtues", "wale", "yaa", "yaan", "ks"];

function newLoad () {
    displayReferenceDiv.style.display = "none";
    displayTopicDiv.style.display = "none";
    displayEventDiv.style.display = "none";
    displayDiv.style.display = 'block';
    let data = book["reference"];
    let topicArray = new Array();
    let text = '<div class="container"> <div class="row">';

    for (let i = 0; i < data.length; i++){
        text += '<div class="card col-4s contClass" style="width: 18rem;" id = ' + (i + 1) + '> <div class="card-body">';
        text += '<h5 class="card-text topicClass">' + (i + 1) + ": " + data[i].topic + '</h5><hr/>';
        text += '<p class="card-text">' + data[i].details + '</p> </div> </div>';

        // to get list of topics
        let myArray = data[i].topic.split(" ");
        for (let j = 0; j < myArray.length; j++){
            let wordUpper = myArray[j].toLowerCase();
            if (arrayDontWant.includes(wordUpper.toLowerCase()) == false){
                if ( topicArray.includes(wordUpper) == false ){
                    topicArray.push(wordUpper);
                }
            }
        }
    }

    topicArray.sort();
    let buttonText = '<div>';
    for (let i = 0; i < topicArray.length; i++){
        let word = topicArray[i].charAt(0).toUpperCase() + topicArray[i].slice(1);
        buttonText += '<button type="button" class="" id = "' + topicArray[i] + '"><a href="">' + word + '</a></button>';
    }
    buttonText += '</div>';
    text += '</div> </div>';
    sideNavID.innerHTML = buttonText;
    displayDiv.innerHTML = text;
}

// with every window load, this function is called
window.onload = newLoad();

// home button
homeButtonID.addEventListener("click", newLoad);

// search all button
searchAllButtonID.addEventListener("click", function() {
    displayDiv.style.display = 'none';
    displayTopicDiv.style.display = 'none';
    displayEventDiv.style.display = "none";
    displayReferenceDiv.style.display = "block";

    let data = book["reference"];
    let text = '<div class="container"> <div class="row">';

    for (let i = 0; i < data.length; i++){
        if (data[i].topic.toLowerCase().includes(document.getElementById("searchAllID").value.toLowerCase())){
            text += '<div class="card col-4s contClass" style="width: 18rem;" id = ' + (i + 1) + '> <div class="card-body">';
            text += '<h5 class="card-text topicClass">' + data[i].topic + '</h5><hr/>';
            text += '<p class="card-text">' + data[i].details + '</p> </div> </div>';
        }
        else if (data[i].details.includes(document.getElementById("searchAllID").value)){
            text += '<div class="card col-4s contClass" style="width: 18rem;" id = ' + (i + 1) + '> <div class="card-body">';
            text += '<h5 class="card-text topicClass">' + data[i].topic + '</h5><hr/>';
            text += '<p class="card-text">' + data[i].details + '</p> </div> </div>';
        }
    }

    text += '</div> </div>';
    displayReferenceDiv.innerHTML = text;
 

});

searchTopicButtonID.addEventListener("click", function() {
    displayDiv.style.display = 'none';
    displayReferenceDiv.style.display = "none";
    displayEventDiv.style.display = "none";
    displayTopicDiv.style.display = "block";

    let data = book["reference"];
    let text = '<div class="container"> <div class="row">';

    for (let i = 0; i < data.length; i++){
        if (data[i].topic.toLowerCase().includes(document.getElementById("searchTopicID").value.toLowerCase())){
            text += '<div class="card col-4s contClass" style="width: 18rem;" id = ' + (i + 1) + '> <div class="card-body">';
            text += '<h5 class="card-text topicClass">' + data[i].topic + '</h5><hr/>';
            text += '<p class="card-text">' + data[i].details + '</p> </div> </div>';
        }
    }

    text += '</div> </div>';
    displayTopicDiv.innerHTML = text;
 

});

// sort Array of date because built-in sort method not working properly
function sortArray(value){
    let size = value.length;
    for (let i = 0; i < size - 1; i++){
        for (let j = i+1; j < size; j++){
            let a = value[i]
            if (a > value[j]){
                value[i] = value[j];
                value[j] = a;
            }
        }
    }
    return value
}

// Displaying Events Page
eventButtonID.addEventListener("click", function() {
    displayDiv.style.display = 'none';
    displayReferenceDiv.style.display = "none";
    displayTopicDiv.style.display = "none";
    displayEventDiv.style.display = "block";

    let data = details["ev"];
    let dateDict = {};
    let dateArray = [];
    

    for (let i = 0; i < data.length; i++){
        let birth = data[i]["birth"];
        let death = data[i]["death"];
        let name = data[i]["name"];

        if (birth in dateDict){
            dateDict[birth].push(name + ", titleMark Widalat");

        }else{
            dateDict[birth] = [name + ", titleMark Widalat"];
            dateArray.push(birth);
        }
        if (death in dateDict){
            dateDict[death].push(name + ", titleMark Shahadat");

        }else{
            dateDict[death] = [name + ", titleMark Shahadat"];
            dateArray.push(death);
        }
    }


    // sorting Date Array using own created function
    dateArray = sortArray(dateArray)

    let text = '<ul>';

    for (let i = 0; i < dateArray.length; i++){

        let key = dateArray[i];
        text += '<li class = "keyClass">' + key + ' Hijra</li>';
        text += '<div class = "olDivClass"><ol>';
        for (let j = 0; j < dateDict[key].length; j++){
                let pos1 = dateDict[key][j].indexOf("<u>") + 3;
                let pos2 = dateDict[key][j].indexOf("</u>") - pos1;
                let pos3 = dateDict[key][j].indexOf("titleMark") + 10;
                let pos4 = 8;
                
                let name = dateDict[key][j].substr(pos1, pos2);
                let title = dateDict[key][j].substr(pos3, pos4)
                
                text += '<li><i>' + title + ":</i> " + name + '</li>';
                
            }
        text += '</ol></div>';    
    }
    text += '</ul>'
   
    displayEventDiv.innerHTML = text;

});




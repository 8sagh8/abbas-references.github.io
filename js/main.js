let searchAllButtonID = document.getElementById("searchAllButtonID");
let searchTopicButtonID = document.getElementById("searchTopicButtonID");
let displayReferenceDiv= document.getElementById("displayReferenceDiv");
let displayTopicDiv = document.getElementById("displayTopicDiv");
let displayDiv = document.getElementById("displayDiv");
let homeButtonID = document.getElementById("homeButtonID");
let sideNavID = document.getElementById("sideNavID");

function getTopicDict(){
    let data = book["reference"];
    let topicDict = {};

    for (let i = 0; i < data.length; i++){
        if ( topicDict.hasOwnProperty(data[i].topic) == false ){
            topicDict[data[i].topic] = 0;
        }
    }
    console.log(topicDict);

}

function newLoad () {
    displayReferenceDiv.style.display = "none";
    displayTopicDiv.style.display = "none";
    displayDiv.style.display = 'block';
    let data = book["reference"];
    let topicDict = {};
    let text = '<div class="container"> <div class="row">';
    let buttonText = '<div>';

    for (let i = 0; i < data.length; i++){
        text += '<div class="card col-4s contClass" style="width: 18rem;" id = ' + (i + 1) + '> <div class="card-body">';
        text += '<h5 class="card-text topicClass">' + data[i].topic + '</h5><hr/>';
        text += '<p class="card-text">' + data[i].details + '</p> </div> </div>';

        if ( topicDict.hasOwnProperty(data[i].topic) == false ){
            topicDict[data[i].topic] = 0;
            buttonText += '<button type="button" class="" id = "' + data[i].topic + '"><a href="">' + data[i].topic + '</a></button>';
        }
    }

    buttonText += '</div>';
    text += '</div> </div>';
    sideNavID.innerHTML = buttonText;
    displayDiv.innerHTML = text;
    getTopicDict();
}

// with every window load, this function is called
window.onload = newLoad();

// home button
homeButtonID.addEventListener("click", newLoad);

// search all button
searchAllButtonID.addEventListener("click", function() {
    displayDiv.style.display = 'none';
    displayTopicDiv.style.display = 'none';
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




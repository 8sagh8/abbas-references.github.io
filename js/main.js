let searchAllButtonID = document.getElementById("searchAllButtonID");
let searchTopicButtonID = document.getElementById("searchTopicButtonID");
let displayReferenceDiv= document.getElementById("displayReferenceDiv");
let displayTopicDiv = document.getElementById("displayTopicDiv");
let displayDiv = document.getElementById("displayDiv");
let homeButtonID = document.getElementById("homeButtonID");



function newLoad () {
    displayReferenceDiv.style.display = "none";
    displayTopicDiv.style.display = "none";
    displayDiv.style.display = 'block';
    let data = book["reference"];
    let text = '<div class="container"> <div class="row">';

    for (let i = 0; i < data.length; i++){
        text += '<div class="card col-4s contClass" style="width: 18rem;" id = ' + (i + 1) + '> <div class="card-body">';
        text += '<h5 class="card-text topicClass">' + data[i].topic + '</h5><hr/>';
        text += '<p class="card-text">' + data[i].details + '</p> </div> </div>';
    }

    text += '</div> </div>';
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




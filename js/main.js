

window.onload = function() {
    let data = book["reference"];
    let text = "";

    for (let i = 0; i < data.length; i++){
        text += '<div class="card" style="width: 18rem;" id = ' + (i + 1) + '> <div class="card-body">';
        text += '<h5 class="card-text">' + data[i].topic + '</h5>';
        text += '<p class="card-text">' + data[i].details + '</p> </div> </div>';
    }

    console.log(text)
    document.getElementById("displayDiv").innerHTML = text;
}


function init(){
    openTab(event, 'QA');
}

function parseMe(input){
    var toReturn = '';

    var regex = /REQ-\d{1,4}/g;
    var numbers = input.match(regex);
    var uniqueNumbers;
    uniqueNumbers = numbers.filter(function(item, pos) {

        return numbers.indexOf(item) == pos;
    });
    toReturn = document.getElementById('constants').value;
    uniqueNumbers.forEach(e => toReturn += e +', ');
    if(document.getElementById('reqCheckbox').checked){
        toReturn = removeREQ(toReturn);
    }
    document.getElementById('output').value = toReturn.substring(0, toReturn.length - 2);
}

function removeREQ(input){
    return input.replace(/REQ-/g,'');
}

function copyToClipboard(){
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
}
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
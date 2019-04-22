// Author: David Peet
// Github: davidpeet8
var elements;
var goodURIs = [
    ["stackoverflow.com", "#ffe9a8"], 
    ["www.w3schools.com", "#caffa8"], 
    ["developer.mozilla.org", "#bccaff"]];

// returns if str2 is found in str1
function contains(str1, str2){
    let curChar = 0;
    for (let i = 0; i < str1.length; i++){
        if(curChar == str2.length) return true;
        else if(str1[i] == str2[curChar]){
            curChar++;
        }else curChar = 0;
    }
    return false;
}


// Get all elements that have designated class name -> g is for each element on google search page
// then check to see if each element is specified in goodURIs
// If yes, style using color given in each pair of goodURIs
function getElements(){
    elements = document.getElementsByClassName('g');
    console.log(elements);
    console.log(elements[1].children[0].children[0].children[0].children[0].attributes[0].textContent);
    for(let i = 1; i < elements.length; i++){
        console.log(i);
        if(elements[i].attributes[0].textContent == 'g'){
            for(let j = 0; j < goodURIs.length; j++){
                if(contains(elements[i].children[0].children[0].children[0].children[0].attributes[0].textContent, 
                    goodURIs[j][0])){
                    elements[i].style.padding = "15px";
                    elements[i].style.borderRadius = "10px";
                    elements[i].style.marginTop = "-10px";
                    elements[i].style.background = goodURIs[j][1];
                }
            }
        }
    }
}

window.onload = getElements();


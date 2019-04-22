// Author: David Peet
// Github: davidpeet8
var elements;
var goodURIs = [
    ["stackoverflow.com", "#ffe9a8"], 
    ["www.w3schools.com", "#caffa8"], 
    ["developer.mozilla.org", "#bccaff"]];

// containsWrap(str1, retval): returns if any of the URIs in goodURIs is contained in str1
// containsWrap: String Object --> Bool
function containsWrap(str1, retval){
    for (let i = 0; i < goodURIs.length; ++i){
        if(contains(str1, goodURIs[i][0])){
            retval.val = i;
            return true;
        }
    }
}


// contains(str1, str2): returns if str2 is contained in str1
// contains: String String --> Bool
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


// firstDiv(): recursively goes into childeren of element, entering the first div 
//    that is a child of element every time, goes into depth children before returning element
// firstDiv: HTMLElement Int --> HTMLElement / Int
function firstDiv(element, depth){
    if(depth == 0) return element;
    for(let i = 0; i < element.children.length; i++){
        if(element.children[i].tagName == 'DIV'){
            return firstDiv(element.children[i], --depth);
        }
    }
    return 0;
}


// styleElement(): styles element with appropriate color given by index once found
// styleElement: HTMLElement Int --> Void
function styleElement(element, index){
    element.style.padding = "15px";
    element.style.width = "100%";
    element.style.borderRadius = "10px";
    element.style.marginTop = "-10px";
    element.style.background = goodURIs[index][1];
}


// getElements(): gets the elements with given class name on google search results page
//    , and modifies the styles of elements that contain a good URI
// getElements: Void --> Void
function getElements(){
    elements = document.getElementsByClassName('g');
    console.log(elements);
    let index = {val: 0}; // in an attempt to imitate pointers w primatives
    for(let i = 0; i < elements.length; i++){
        console.log(i);
        if(elements[i].attributes[0].textContent == 'g'){
            if(elements[i].parentNode.attributes[0].textContent == "srg"){ // div wrapper class for regular content
                if(containsWrap(firstDiv(elements[i], 3).children[0].attributes[0].textContent, index)){
                    styleElement(elements[i], index.val);
                }
            }else if(elements[i].parentNode.attributes[0].textContent == "bkWMgd"){ // div wrapper class for suggestion boxes
                if(containsWrap(firstDiv(elements[i], 4).children[0].attributes[0].textContent, index)){
                    styleElement(elements[i], index.val);
                }
            }
        }
    }
}

window.onload = getElements();

// bkWMgd -> special first parent class
// srg --> regular parent class
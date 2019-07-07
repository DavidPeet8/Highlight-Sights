// Author: David Peet
// Github: davidpeet8
const goodURIs = [
    ["stackoverflow.com", "#ffe9a8"], 
    ["www.w3schools.com", "#caffa8"], 
    ["developer.mozilla.org", "#bccaff"],
    ["geeksforgeeks.org", "#00a10d"]];

class ElementManipulator{
    
    // containsWrap(str1, retval): returns if any of the URIs in goodURIs is contained in str1
    // containsWrap: String Object --> Bool
    static containsWrap(str1, retval){
        for (let i = 0; i < goodURIs.length; ++i){
            if(ElementManipulator._contains(str1, goodURIs[i][0])){
                retval.val = i;
                return true;
            }
        }
    }

    // styleElement(): styles element with appropriate color given by index once found
    // styleElement: HTMLElement Int --> Void
    static styleElement(element, index){
        element.style.padding = "15px";
        element.style.width = "100%";
        element.style.borderRadius = "10px";
        element.style.marginTop = "-10px";
        element.style.background = goodURIs[index][1];
    }

    // contains(str1, str2): returns if str2 is contained in str1
    // contains: String String --> Bool
    static _contains(str1, str2){
        let curChar = 0;
        for (let i = 0; i < str1.length; i++){
            if(curChar == str2.length) return true;
            else if(str1[i] == str2[curChar]){
                curChar++;
            }else curChar = 0;
        }
        return false;
    }
}


// getElements(): gets the elements with given class name on google search results page
//    , and modifies the styles of elements that contain a good URI
// getElements: Void --> Void
function getElements(){
    let elements = $("[class= 'g']");

    for(let i = 0; i < elements.length; i++){
        const uris = $('a', $(elements[i]));
        let containedIndex = {val: 0};
        if(uris && uris[0] && ElementManipulator.containsWrap(uris[0].href, containedIndex)){
            ElementManipulator.styleElement(elements[i], containedIndex.val);
        }
    }
}

window.onload = getElements();

function isFirstLetterUpperCase(a,b,c){
    regexp = /^[A-Z]/;
    if (regexp.test(a,b,c)){
        alert("String's first character is uppercase");
    }else {
        alert("String's first character is not uppercase");
    }
}

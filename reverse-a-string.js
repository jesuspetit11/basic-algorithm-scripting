function reverseString(str) {
    return str.split("").reverse().join("");

}

reverseString("hello");

//Another way

function reverseString(str){
    let newStr = "";
for (let i = a.length -1; i >= 0; i--) {
    newStr = str[i];
    }
    return newStr;
}
function confirmEnding(str, target) {
    if(str.endsWith(target)){
    return true
    } else {
    return false
    }
}

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
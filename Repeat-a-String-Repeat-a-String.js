function repeatStringNumTimes(str, num) { //Dos parámetros
    let accumulatedStr = "";              //Una variable para acumular

    for (let i = 0; i < num; i++) {       //Ciclo for para repetir según el número pasado en los parámetros
accumulatedStr += str;                    // accumulatedStr = accumulatedStr + str;
    }

    return accumulatedStr;
}

repeatStringNumTimes("abc", 3);
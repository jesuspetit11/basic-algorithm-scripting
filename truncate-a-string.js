function truncateString(str, num) {
    if (str.length > num) { //Si el largo de str es mayor al num...
      return str.slice(0, num) + "..."; //Retornamos los caracteres correspondientes desde el 0 al num y puntos suspensivos
    } else {
return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
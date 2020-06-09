function kangaroo(x1, v1, x2, v2) {
    let kangaOne = x1;
    let kangaTwo = x2;
    let loops = 0;
    let hasMatched = false;

    if((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
        return "NO"
    } else {
        while(!hasMatched || loops < 10000) {
            kangaOne += v1;
            kangaTwo += v2;
            loops +=1;
            if(kangaOne === kangaTwo) {
                hasMatched = true;
            }
        }
        if(hasMatched) return ("YES"); else return("NO")
    }
}

kangaroo(0,3,4,2)
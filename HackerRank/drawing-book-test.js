function pageCount(n, p) {
    let fromOne = Math.floor(p/2);
    let fromLast = Math.floor(((n+1) - p)/2)
    console.log(fromOne, fromLast)
    if (fromOne < fromLast) { return fromOne } else { return fromLast } 
}

pageCount(6,5)
function appendAndDelete(s, t, k) {

    if(s.length >= 1 && s.length <= 100 && t.length >= 1 && t.length <= 100 && k >= 1 && k <= 100) {
        let string = s
        for(let i = k; i > 0; i--) {
            if(string !== t) {
                if(!t.includes(string) || t.indexOf(string) !== 0) {
                    string = string.substring(0, string.length - 1)
                } else {
                    let letter = t.charAt(string.length)
                    string = string.concat(letter)
                }
            } else {
                string = string.substring(0, string.length - 1)
            }
            console.log(string)
        } 
        if(string !== t) {
            return "No"
        } else {
            return "Yes"
        }
    } else if(s === t){
        return "Yes"
    } else {
        return "No"
    }
}


console.log(appendAndDelete("hackerhappy","hackerrank",9))
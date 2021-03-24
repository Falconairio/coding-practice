function beautifulDays(i, j, k) {
    let beautifulArr = []
    let beautifulCount = 0
    for(let n = i; n <= j; n++) {
        beautifulArr.push(n)
    }
    for(let n = 0; n < beautifulArr.length; n++) {
       let num2 = String(beautifulArr[n]).split("").reverse().join("");
        for(let i = 0; i < num2.length; i++) {
            if(num2[i] !== "0" || num2.length == 1) {
                break;
            } else {
                num2 = num2.slice(i + 1, num2.length)
            }
        }
        num2 = parseInt(num2)
        console.log(num2)
        let check = Math.abs(beautifulArr[n] - num2)/k
        if(check % 1 === 0) {
            beautifulCount += 1
        }
    }
    console.log(beautifulCount)
    return beautifulCount
}
beautifulDays(100000,100001,189)

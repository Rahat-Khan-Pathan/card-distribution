const cardDistribution = (arr)=> {
    if(!Array.isArray(arr)) {
        return null;
    }
    let serial = 1;
    const ansArray = [];
    arr.forEach(obj=> {
        let ans = "";
        ans += (obj.district.slice(0,2)).toUpperCase();
        ans += (String(obj.currentYear).slice(String(obj.currentYear).length-2));
        ans += String(obj.postNo).slice(0,2);
        ans += String(obj.birthYear);
        ans += String(serial).padStart(16-ans.length, '0');
        const makeGift = serial%2===0 ? 'R':'W';
        const newObj = {cardNumber: ans, gift:makeGift,priority:obj.priority };
        ansArray.push(newObj);
        serial++;
    })
    ansArray.sort((a,b)=> {
        if(a.priority<b.priority) return -1;
        else if(a.priority>b.priority) return 1;
        else{
            if(a.cardNumber<b.cardNumber) return -1;
            else return 1;
        }
    })
    return ansArray;
}
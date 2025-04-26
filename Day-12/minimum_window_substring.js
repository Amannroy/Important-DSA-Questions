function minWindow(s, t) {
    if(t.length > s.length) return "";

    let freqT = new Map();
    let window = new Map();

    for(let char of t){
        freqT.set(char, (freqT.get(char) || 0) + 1);
    }

    let l = 0, r = 0, minLen = Infinity, start = 0;
    let match = 0;

    while(r < s.length){
        let char = s[r];
        window.set(char, (window.get(char) || 0) + 1);

        if(freqT.has(char) && window.get(char) === freqT.get(char)){
            match++;
        }

        while(match === freqT.size){
            if(r - l + 1 < minLen){
                minLen = r - l + 1;
                start = l;
            }
            let leftChar = s[l];
            window.set(leftChar, (window.get(leftChar) - 1));

            if(freqT.has(leftChar) && window.get(leftChar) < freqT.get(leftChar)){
                match--;
            }
            l++;
        }
        r++;
    }
    return minLen === Infinity ? "" : s.substring(start, start + minLen);

}
console.log(minWindow("OUZODYXAZV", "XYZ")); // YXAZ

// TC = O(n)
// SC = O(m)

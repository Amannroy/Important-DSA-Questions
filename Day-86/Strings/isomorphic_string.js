let isIsomorphic = function (s, t) {
    let char_index_s = new Map(); // Stores last seen index of characters in s
    let char_index_t = new Map(); // Stores last seen index of characters in t

    for (let i = 0; i < s.length; i++) {
        if (!char_index_s.has(s[i])) {
            char_index_s.set(s[i], i);
        }
        if (!char_index_t.has(t[i])) {
            char_index_t.set(t[i], i);
        }
        if (char_index_s.get(s[i]) !== char_index_t.get(t[i])) {
            return false;
        }
    }

    return true;

};

// TC = O(n)
// SC = O(k)
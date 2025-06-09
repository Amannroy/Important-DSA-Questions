let convertToTitle = function(columnNumber) {
    let result = [];

    while(columnNumber > 0){
        columnNumber--;

        let offset = columnNumber % 26;

        result.push(String.fromCharCode('A'.charCodeAt(0) + offset));

        columnNumber = Math.floor(columnNumber / 26);

    }
    return result.reverse().join("");
};
let floodFill = function(image, sr, sc, color) {
    let startColor = image[sr][sc];

    if(startColor === color) return image;

    function dfs(r, c){
        if(r < 0 || c < 0 || r >= image.length || c >= image[0].length) return;

        if(image[r][c] !== startColor) return;

        image[r][c] = color;

        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }
    dfs(sr, sc);

    return image;
};
let findContentChildren = function(g, s) {
   g.sort((a,b) => a - b);
   s.sort((a,b) => a - b);

   let l = 0;
   let r = 0;

   while(l < g.length && r < s.length){
      if(s[r] >= g[l]){
        l++;
      }
      r++;
   }
   return l;
};
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

maxname = friends[0].length;

let big_name = friends.filter((mx) => {
   return maxname < mx.length;
})

console.log(...big_name);///[herlalam]
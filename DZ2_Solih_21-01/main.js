
for (var num = 20; num >= 0; num--){
    console.log(num)
}

var empty = []

for(var i = 0; i < 11; i++){
    empty.push(i)
}
console.log(empty)


var trLight = prompt("Select a color (red,yellow,green)")
switch (trLight) {
    case "red":
        console.warn("STOP!!!")
        break;
    case "yellow":
        console.log("WAIT!")
        break;
    case "green":
        console.log("GO =>")
        break;
    default:
        console.log("Unknown color")

}

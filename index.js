// code your solution here
function superbowlWin(record){
    return record.find(element => element.result === "W").year;
}

console.log(superbowlWin(record));

function superbowlWin(record) {
    const win = record.find(element => element.result === "W");
    return win ? win.year : undefined;
  }
// code your solution here
 

const superbowlWin = (record) => {
    const win = record.find(item => item.result === "W");
    return win ? win.year : undefined;
};



// Example usage:
// const record = [
//     { year: "2018", result: "N/A" },
//     { year: "2017", result: "W" },
//     { year: "2016", result: "L" },
//     { year: "2015", result: "N/A" },
// ];
// console.log(superbowlWin(record)); // Output: "2017"



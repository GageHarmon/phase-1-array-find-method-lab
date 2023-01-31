const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
]

function superbowlWin(Array) {
    for (let item of Array) {
        if (item.result === "W") { return item.year; }
    }
}
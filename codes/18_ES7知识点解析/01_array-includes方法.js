const names = ["abc", "cba", "nba", "mba", NaN]

if (names.indexOf("cba") !== -1) {
}

// ES7 ES2016
if (names.includes("cba", 2)) {
}

if (names.indexOf(NaN) !== -1) {
}

if (names.includes(NaN)) {
}

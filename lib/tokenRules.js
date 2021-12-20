const reLib = [
    // false artinya di skip
    // Ini urutan prioritas
    { reString: /^ +/g, reName: false },
    { reString: /^\,/g, reName: false },
    { reString: /^\(/g, reName: "LP" },
    { reString: /^\)/g, reName: "RP" },
    { reString: /^[+-]?([0-9]*([.]|e[+-]))?[0-9]+/g, reName: "NUM" },
    { reString: /^[\+\*\/\^\-]/g, reName: "OP" },
    { reString: /^[A-Z][A-Za-z0-9_]*/g, reName: "CONST" },
    { reString: /^[a-z_][A-Za-z0-9_]*/g, reName: "FUNC" },
];

export { reLib };
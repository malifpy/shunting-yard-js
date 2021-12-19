const reLib = [
    // false artinya di skip
    // Ini urutan prioritas
    { reString: /^ +/g, reName: false },
    { reString: /^\,/g, reName: false },
    { reString: /^\(/g, reName: "LP" },
    { reString: /^\)/g, reName: "RP" },
    { reString: /^[+-]?([0-9]*([.]|e[+-]))?[0-9]+/g, reName: "NUM" },
    { reString: /^(e|pi)/g, reName: "NUM" },
    { reString: /^[\+\*\/\^\-]/g, reName: "OP" },
    { reString: /^[a-z_][A-Za-z0-9_]*/g, reName: "FUNC" },
];

export { reLib };
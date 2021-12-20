const op_property = {
  "+": {
    prec: 1,
    la: true,
  },
  "-": {
    prec: 1,
    la: true,
  },
  "*": {
    prec: 2,
    la: true,
  },
  "/": {
    prec: 2,
    la: true,
  },
  "^": {
    prec: 3,
    la: false,
  },
};

export { op_property };

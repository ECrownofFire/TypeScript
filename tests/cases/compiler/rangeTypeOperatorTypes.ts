declare var a: (> 2);
declare var b: (>= 3);
declare var c: (< 5);
declare var d: (<= 7);

let e1: (>= 5) = a + b;
let e2: (>= 5) = b + a;
let e3: number = a + c;
let e4: number = a + d;
let e5: number = b + c;
let e6: number = b + d;

let e7: (> 8) = a + 6;
let e8: (> 8) = 6 + a;
let e9: (< 7) = c + 2;
let e10: (< 7) = 2 + c;


let f1: number = a - a;
let f2: number = a - b;
let f3: (> -3) = a - c;
let f4: (> -5) = a - d;
let f5: number = b - a;
let f6: number = b - b;
let f7: (> -2) = b - c;
let f8: (>= -4) = b - d;
let f9: (< 3) = c - a;
let f10: (< 2) = c - b;
let f11: number = c - c;
let f12: number = c - d;
let f13: (< 5) = d - a;
let f14: (<= 4) = d - b;
let f15: number = d - c;
let f16: number = d - d;

let f17: (> -1) = a - 3;
let f18: (< 1) = 3 - a;
let f19: (< 3) = c - 2;
let f20: (> -3) = 2 - c;


let g1: (> 4) = a * a;
let g2: (> 6) = a * b;
let g3: number = a * c;
let g4: number = a * d;
let g5: (> 6) = b * a;
let g6: (>= 9) = b * b;
let g7: number = b * c;
let g8: number = b * d;
let g9: number = c * c;
let g10: number = c * d;
let g11: number = d * d;

let g12: (> 4) = a * 2;
let g13: (> 4) = 2 * a;
let g14: (<= 42) = d * 6;
let g15: (<= 42) = 6 * d;


let h1: (>= 0) = a / a;
let h2: (>= 0) = a / b;
let h3: number = a / c;
let h4: number = a / d;
let h5: (>= 0) = b / a;
let h6: number = b / c;
let h7: number = b / d;
let h8: (< 2.5) = c / a;
let h9: number = c / c;
let h10: number = c / d;
let h11: (< 3.5) = d / a;
let h12: number = d / c;

let h13: (> 2) = a / 1;
let h14: (> 4) = a / 0.5;
let h15: (>= 0) & (< 0.5) = 1 / a;
let h16: number = 1 / c;

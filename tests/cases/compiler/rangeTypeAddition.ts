declare var a: (> 1);
declare var b: (> 2);
declare var c: (>= 4)

// range + range
var d: (> 3) = a + b;
var e: (>= 5) = a + c;

// range + literal
var f: (> 3) = a + 2;
var g: (>= 8) = c + 4;

// literal + range
var h: (> 3) = 2 + a;
var i: (>= 8) = 4 + c;

// +=
var j: (> 2) = a += a;
var k: (> 4) = b += 2;

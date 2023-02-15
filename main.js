function noSpace(x) {
  let arrayStr = x.split(" ");

  return arrayStr.join("");
}

let aa = noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");

document.getElementsByTagName("h1")[0].innerHTML = aa;

// assert.strictEqual(lovefunc(1,4), true)
// assert.strictEqual(lovefunc(2,2), false)
// assert.strictEqual(lovefunc(0,1), true)
// assert.strictEqual(lovefunc(0,0), false)

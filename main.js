function digitize(n) {
  let m = Array.from(n.toString());
  console.log(m);
  let newArray = [];
  for (i = m.length - 1; i >= 0; i--) {
    console.log(`i = ${i} /// m[i] = ${m[i]} `);
    newArray.push(Number(m[i]));
  }
  return newArray;
}

// assert.deepEqual(digitize(35231),[1,3,2,5,3]);
// assert.deepEqual(digitize(0),[0]);

console.log(digitize(35231));

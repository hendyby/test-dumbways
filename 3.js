function sort_array(data) {
  let ray0 = data[0].sort();
  let ray1 = data[1].sort();
  let panjang0 = ray0.length;
  let panjang1 = ray1.length;
  let result = "";

  if (panjang0 < panjang1) {
    result = [ray0, ray1];
  } else {
    result = [ray1, ray0];
  }

  if (data.length == 3) {
    let ray2 = "";
    ray2 = data[2].sort();
    let panjang2 = ray2.length;
    if (panjang0 < panjang1 && panjang0 < panjang2) {
      if (panjang1 < panjang2) {
        result = [ray0, ray1, ray2];
      } else {
        result = [ray0, ray2, ray1];
      }
    }
    if (panjang1 < panjang0 && panjang1 < panjang2) {
      if (panjang0 < panjang2) {
        result = [ray1, ray0, ray2];
      } else {
        ray1, ray2, ray0;
      }
    }
    if (panjang2 < panjang0 && panjang2 < panjang1) {
      if (panjang0 < panjang1) {
        result = [ray2, ray0, ray1];
      } else {
        result = [ray2, ray1, ray0];
      }
    }
  }
  return result;
}

let data = [
  ["a", "c", "b", "e", "d"],
  ["g", "e", "f"],
];
let datalain = [
  ["g", "h", "i", "j"],
  ["a", "c", "b", "e", "d"],
  ["g", "e", "f"],
];

console.log(sort_array(data));
console.log(sort_array(datalain));

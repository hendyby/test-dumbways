function count_handshake(number) {
  let result = "";
  for (let j = 1; j <= number * ((number - 1) / 2); j++) {
    result += 1;
  }
  console.log(result.length);
}

count_handshake(6);

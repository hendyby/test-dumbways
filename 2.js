function generate(number) {
  let result = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let k = 0; k < number; k++) {
    let result = "\n";
    for (let l = 0; l < 4; l++) {
      let sementara = "";
      for (let i = 0; i < 4; i++) {
        sementara += possible.charAt(
          Math.floor(Math.random() * possible.length)
        );
      }
      result += sementara += "-";
    }
    console.log(result);
  }
}
generate(3);

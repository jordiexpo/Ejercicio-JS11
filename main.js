/* Sexta parte */
const arr = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (i < arr.length - 1 && arr[i] === arr[i + 1]) {
        result.push("🃏");
    }
}
console.log(result);
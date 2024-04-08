/* Cuarta parte */
const arr = ["🍓","🍋","🍓","🍋","🍓"];
const mushroom = arr.map((item) => {
 if (item === "🍓"){
  return "🍄";
 }
 return item;
});
console.log(mushroom)


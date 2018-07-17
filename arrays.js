var chocolateBars = ["snickers" , "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (chocolateBars,pizza) {
  return [pizza,...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray (chocolateBars,pizza) {
  return [chocolateBars, pizza];
  chocolateBars.unshift (pizza);
  return
}
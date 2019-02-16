// Write your solution in this file!
const driver = {};

function updateDriverWithKeyandValue(driver, key, value) {
  const newDriver = { ...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]= value;
  return driver;
}
function deleteFromDriverByKey(driver, key) {}
function destructivelyDeleteFromDriverByKey(driver, key) {}
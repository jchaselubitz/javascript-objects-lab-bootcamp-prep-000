var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var x = {}
  Object.assign({x}, object, {[key]: value})
  return x
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value
  return object
}



var obj = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)

console.log(updateObjectWithKeyAndValue())

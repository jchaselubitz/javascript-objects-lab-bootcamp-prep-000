var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = {}
  Object.assign({newObject}, object, {[key]: value})
  return newObject

}

var obj = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)

console.log(updateObjectWithKeyAndValue())

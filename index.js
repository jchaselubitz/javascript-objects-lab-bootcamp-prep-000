var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key]: value})
  return newObject

}

var obj = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)

console.log(updateObjectWithKeyAndValue())

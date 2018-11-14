var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  
  Object.assign({x}, object, {[key]: value})
  return x
}

var obj = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)

console.log(updateObjectWithKeyAndValue())

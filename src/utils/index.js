// 正整数1234567 => 1,234,567
export const numberFormat = (dataStr) => {
  if (!['number', 'string'].includes(typeof dataStr)) {
    throw TypeError('Type error!')
  }
  const origin = dataStr + ''
  let res = ''
  let index = origin.length
  while (index > 0) {
    res = ',' + origin.substring(index - 3, index) + res
    index -= 3
  }
  return res.substring(1, res.length)
}

// 秒=>date 1605859868 => yyyy-MM-dd hh:mm:ss
export const dateFormat = (dateStr) => {
  if (!dateStr && parseInt(dateStr) !== 0) return dateStr
  const date = new Date(parseInt(dateStr) * 1000)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return (
    date.getFullYear() +
    '-' +
    (month < 10 ? `0${month}` : month) +
    '-' +
    (day < 10 ? `0${day}` : day) +
    ' ' +
    (hours < 10 ? `0${hours}` : hours) +
    ':' +
    (minutes < 10 ? `0${minutes}` : minutes) +
    ':' +
    (seconds < 10 ? `0${seconds}` : seconds)
  )
}

// 深拷贝
export const deepCopy = (data, hash = new WeakMap()) => {
  if (typeof data !== 'object' || data === null) {
    throw new TypeError('Instance is not an Object!')
  }
  // 判断传入的待拷贝对象的引用是否存在于hash中
  if (hash.has(data)) {
    return hash.get(data)
  }
  const newData = Array.isArray(data) ? [] : {}
  const dataKeys = Object.keys(data)
  dataKeys.forEach((value) => {
    const currentDataValue = data[value]
    // 基本数据类型的值和函数直接赋值拷贝
    if (typeof currentDataValue !== 'object' || currentDataValue === null) {
      newData[value] = currentDataValue
    } else if (Array.isArray(currentDataValue)) {
      // 实现数组的深拷贝
      newData[value] = [...currentDataValue]
    } else if (currentDataValue instanceof Set) {
      // 实现set数据的深拷贝
      newData[value] = new Set([...currentDataValue])
    } else if (currentDataValue instanceof Map) {
      // 实现map数据的深拷贝
      newData[value] = new Map([...currentDataValue])
    } else {
      // 将这个待拷贝对象的引用存于hash中
      hash.set(data, data)
      // 普通对象则递归赋值
      newData[value] = deepCopy(currentDataValue, hash)
    }
  })
  return newData
}

/**
 * 防抖
 * @param {function} fnName function
 * @param {Number} time 控制在多少毫秒内
 */
export function debounce(fn, time = 100) {
  let timeout = null
  return function() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn(...arguments)
    }, time)
  }
}

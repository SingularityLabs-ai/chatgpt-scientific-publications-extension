export function isDate(dateToTest: string) {
  try {
    if (dateToTest) {
      dateToTest = dateToTest.replace(/\s+$/, '')
    }
    return isNaN(dateToTest) && !isNaN(Date.parse(dateToTest))
  } catch (err) {
    return false
  }
}

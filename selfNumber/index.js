function generateNumber(n) {
  const splitNumber = String(n).split('')

  let result = 0

  splitNumber.forEach((number) => {
    result += Number(number)
  })

  result += n

  return result
}

function findSelfNumbersInRange(start, end) {
  const generated = new Set()

  for (let i = start; i <= end; i++) {
    const generatedNumber = generateNumber(i)
    generated.add(generatedNumber)
  }

  const selfNumbers = []
  for (let i = start; i <= end; i++) {
    if (!generated.has(i)) {
      selfNumbers.push(i)
    }
  }

  return selfNumbers
}

const start = 1
const end = 5000
const selfNumbers = findSelfNumbersInRange(start, end)
console.log(`Self-numbers from ${start} to ${end}:`, selfNumbers)

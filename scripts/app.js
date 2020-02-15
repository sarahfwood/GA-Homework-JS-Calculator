while (true) {
  
  const num1 = parseFloat(prompt('Enter first number'))
  const operator = prompt('Enter operator')
  const num2 = parseFloat(prompt('Enter second number'))
  let result

  if (typeof num1 !== 'number') {
    alert('Please enter a first number')
    continue
  }
  if (typeof num2 !== 'number') {
    alert('Please enter a second number')
    continue
  }

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = (num1 / num2).toFixed(1)
      break
    default:
      alert('Please enter a valid operator')
      continue
  }
  alert(result)
  break
}

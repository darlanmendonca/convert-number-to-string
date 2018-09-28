function convertNumberToString(number) {
  const translations = [
    ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
    ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezeseis', 'dezesete', 'dezoito', 'dezenove'],
    ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
    ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seicentos', 'setecentos', 'oitocentos', 'novecentos'],
    ['mil'],
    ['milhao'],
    ['bilhao'],
  ]

  const splitted = (number)
    .toString()
    .split('')

  let string = splitted
    .reverse()
    .map((value, index) => translations[index][+value])
    .reverse()
    // .join()


  switch (string.length) {
    case 1:
      string = string
      break
    case 2:
      console.log(splitted[1], splitted[0])
      string = [translations[1][splitted[0]]]
      break;
  }

  // console.log(string)

  return string.join()
}

module.exports = convertNumberToString
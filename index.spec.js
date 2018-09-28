const convertNumberToString = require('./index.js')
const {expect} = require('chai')

describe('convertNumberToString', () => {
  test('should be a function', () => {
    expect(convertNumberToString).to.be.an('function')
  })

  test('should convert units', () => {
    expect(convertNumberToString(0)).to.be.equal('zero')
    expect(convertNumberToString(1)).to.be.equal('um')
    expect(convertNumberToString(2)).to.be.equal('dois')
    expect(convertNumberToString(3)).to.be.equal('tres')
    expect(convertNumberToString(4)).to.be.equal('quatro')
    expect(convertNumberToString(5)).to.be.equal('cinco')
    expect(convertNumberToString(6)).to.be.equal('seis')
    expect(convertNumberToString(7)).to.be.equal('sete')
    expect(convertNumberToString(8)).to.be.equal('oito')
    expect(convertNumberToString(9)).to.be.equal('nove')
  })

  test('should convert ten to nineten', () => {
    expect(convertNumberToString(10)).to.be.equal('dez')
    expect(convertNumberToString(11)).to.be.equal('onze')
    expect(convertNumberToString(12)).to.be.equal('doze')
    expect(convertNumberToString(13)).to.be.equal('treze')
    expect(convertNumberToString(14)).to.be.equal('quatorze')
    expect(convertNumberToString(15)).to.be.equal('quinze')
    expect(convertNumberToString(16)).to.be.equal('dezeseis')
    expect(convertNumberToString(17)).to.be.equal('dezesete')
    expect(convertNumberToString(18)).to.be.equal('dezoito')
    expect(convertNumberToString(19)).to.be.equal('dezenove')
  })

  test('should convert dozens', () => {
    expect(convertNumberToString(20)).to.be.equal('vinte')
    expect(convertNumberToString(30)).to.be.equal('trinta')
    // expect(convertNumberToString(40)).to.be.equal('doze')
    // expect(convertNumberToString(50)).to.be.equal('treze')
    // expect(convertNumberToString(60)).to.be.equal('quatorze')
    // expect(convertNumberToString(70)).to.be.equal('quinze')
    // expect(convertNumberToString(80)).to.be.equal('dezeseis')
    // expect(convertNumberToString(90)).to.be.equal('dezesete')
  })
})
const D = require('../src/index.js')
const { months, shortMonths, days, shortDays } = require('../src/utils')

const today = new Date()
const d = new D(today)
console.log(d)
const bDay = new D(1965, 8, 26)

test('D.year', () => {
    expect(d.year).toBe(today.getFullYear())
    expect(bDay.year).toBe(1965)
})

test('D.yr', () => {
    expect(d.yr).toBe(today.getFullYear() % 100)
})

test('D.month', () => {
    expect(d.month).toBe(months[today.getMonth()])
    expect(bDay.month).toBe(months[8])
    expect(d.month).toBe('September')
})

test('D.mon', () => {
    expect(d.mon).toBe(shortMonths[today.getMonth()])
    expect(bDay.mon).toBe(shortMonths[8])
})

test('D.day', () => {
    expect(d.day).toBe(days[today.getDay()])
    expect(d.day).toBe(days[0])
})

test('D.dy', () => {
    expect(d.dy).toBe(shortDays[today.getDay()])
    expect(d.dy).toBe(shortDays[0])
})

test('D.date', () => {
    expect(d.date).toBe(today.getDate())
    expect(bDay.date).toBe(26)
})

test('D.hours', () => {
    expect(d.hours).toBe(today.getHours())
    expect(bDay.hours).toBe(0)

})

test('D.mins', () => {
    expect(d.mins).toBe(today.getUTCMinutes())
    expect(bDay.mins).toBe(0)
})

test('D.secs', () => {
    expect(d.secs).toBe(today.getUTCSeconds())
    expect(bDay.secs).toBe(0)
})




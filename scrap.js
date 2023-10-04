const d = new D(2019, 0, 1)
console.log(d)
console.log(d.year) // 2019
console.log(d.day) // Tuesday
console.log(d.month) // January
console.log(d.mon) // Jan
console.log(d.date) // 1
console.log(d.hours) // 
console.log(d.mins) // 
console.log(d.secs) // 
// ******************************
const ok = new D()
console.log(ok.year)
console.log(ok.day)

// Make a date with values for Y, M, D etc.
const newDate = new D(2017, 0, 2, 3, 4, 5)
console.log(newDate.format())              // 2017 January 02
console.log(newDate.format('y/m/d'))       // 17/Jan/2
console.log(newDate.format('H:I:S'))       // 03:04:05
console.log(newDate.format('h:i:s'))       // 3:4:5
console.log(newDate.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 

const d2 = new D(2023, 2, 2, 3, 4, 5)
console.log(d2.when()) // 6 months ago
const d3 = new D(2024, 4, 2, 3, 4, 5)
console.log(d3.when()) // 4 months from now
const d4 = new D(2024, 9, 2, 3, 4, 5)
console.log(d4.when()) // 5 years from now
const d5 = new D(2019, 6, 30, 3, 4, 5)
console.log(d5.when()) // 3 days from now
const d6 = new D()
console.log(d6.when()) // today
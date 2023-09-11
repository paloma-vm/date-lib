const { months, shortMonths, days, shortDays } = require('./utils')
class D {
    

    constructor(...args) {
        this._date = new Date(...args)
    }

    get year() {
        return this._date.getFullYear()
    }

    get yr() {
        return this._date.getFullYear() % 100
    }

    get month() {
        return months[this._date.getMonth()]
    }

    get mon() {
        return shortMonths[this._date.getMonth()] 
    }

    get day() { 
        return days[this._date.getDay()]
    }

    get dy() {
        return shortDays[this._date.getDay()]
    }

    get date() {
        return this._date.getDate()
    }

    get hours() {
        return this._date.getHours()
    }

    get mins() {
        return this._date.getMinutes()
    }

    get secs() {
        return this._date.getSeconds()
    }

    format(maskString = 'Y M D') {
        const formatOptions = {
            'Y': this.year, // (Year full)
            'y': this.yr, // (Year short)
            'M': this.month, // (Month full)
            'm': this.mon, // (Month short)
            'D': String(this.date).padStart(2, 0), // (date padded, 01, 02, 03, etc.)
            'd': this.date, // (date not padded)
            'L': this.day, // (Day full)
            'l': this.dy, // (Day short)
            '#': this.dateSuffix, // (Date suffix)
            'H': String(this.hours).padStart(2,0), // (Hours padded)
            'h': this.hours, // (Hours not padded)
            'I': String(this.mins).padStart(2,0), // (Minutes padded)
            'i': this.mins, // (Minutes not padded)
            'S': String(this.secs).padStart(2,0), // (Seconds padded)
            's': this.secs, // (Seconds not padded)
        }

        let formattedDate = ''

        for (let i = 0; i < maskString.length; i++) {
            const char = maskString[i]
            if (formatOptions[char]) {
                formattedDate += formatOptions[char]
            } else {
                formattedDate += char
            }
        }
        return formattedDate
    }

    dateSuffix() {
        const date = this.date
        const suffix = date % 10
        if (suffix === 1) {
            return `${date}st`
        } else if (suffix === 2) {
            return `${date}nd`
        } else if (suffix === 3) {
            return `${date}rd`
        } else {
            return `${date}th`
        }
    }



}

module.exports = D

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

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

    when() {
        const now = new Date()
        const diff = now - this._date
        const seconds = Math.floor(diff / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)
        const months = Math.floor(days / 30)
        const years = Math.floor(months / 12)

        if (years > 0) {
            return `${years} years ago`
        } else if (months > 0) {
            return `${months} months ago`
        } else if (days > 0) {
            return `${days} days ago`
        } else if (hours > 0) {
            return `${hours} hours ago`
        } else if (minutes > 0) {
            return `${minutes} minutes ago`
        } else if (seconds > 0) {
            return `${seconds} seconds ago`
        } else {
            return 'today'
        }

    }
}

module.exports = D


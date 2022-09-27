// Your code here
const createEmployeeRecord = (employeeArray) => {
    const employeeRecord = {
        firstName:employeeArray[0],
        familyName:employeeArray[1],
        title:employeeArray[2],
        payPerHour:employeeArray[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
    return employeeRecord
}

const createEmployeeRecords = recordArray => {
    const employeeArray = []
    recordArray.forEach(employee => {
        employeeArray.push(createEmployeeRecord(employee))
    })
    return employeeArray
}

const createTimeInEvent = (employeeRecord, date) => {
    employeeRecord.timeInEvents.push({
        type:"TimeIn", 
        hour:parseInt(date.slice(-4)), 
        date:date.slice(0,10)
    })
    return employeeRecord
}

const createTimeOutEvent = (employeeRecord, date) => {
    employeeRecord.timeOutEvents.push({
        type:"TimeOut", 
        hour:parseInt(date.slice(-4)), 
        date:date.slice(0,10)
    })
    return employeeRecord
}

const hoursWorkedOnDate = (employeeRecord, date) => {
    for (let i = 0; i < employeeRecord.timeInEvents.length; i++){
        if (date === employeeRecord.timeInEvents[i].date) {
            // const clockInHour  = parseInt(employeeRecord.timeInEvents[i].hour.slice(0,2))
            // const clockInMin   = parseInt(employeeRecord.timeInEvents[i].hour.slice(2,4))
            // const clockOutHour = parseInt(employeeRecord.timeOutEvents[i].hour.slice(0,2))
            // const clockOutMin  = parseInt(employeeRecord.timeOutEvents[i].hour.slice(2,4))
            // const hoursWorked = (clockOutHour + clockOutMin/60) - (clockInHour + clockInMin/60)
            const hoursWorked = (employeeRecord.timeOutEvents[i].hour - employeeRecord.timeInEvents[i].hour) / 100
            return Math.floor(hoursWorked)
        }
    }
}

const wagesEarnedOnDate = (employeeRecord, date) => {
    const wagesEarned = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
    return wagesEarned
}

const allWagesFor = employeeRecord => {
    let totalWages = 0
    for (let date of employeeRecord.timeInEvents){
        totalWages += wagesEarnedOnDate(employeeRecord, date.date)
    }
    return totalWages

}

const calculatePayroll = employeeRecords => {
    let totalPayroll = 0
    employeeRecords.forEach(employeeRecord => totalPayroll += allWagesFor(employeeRecord))
    return totalPayroll
}

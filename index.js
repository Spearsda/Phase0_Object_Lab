let employee = {
    name : 'slenderMan',
    streetAddress : '65 Backyard',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee['name'] = 'Sam';

    newEmployee['streetAddress'] = '11 Broadway'

    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value

    return employee
}


function deleteFromEmployeeByKey(employee, key) {

    const cloneEmployee = {...employee};

    delete cloneEmployee.name; 

    return cloneEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

        delete employee[key]

        return employee
}



window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function() {
        if (name.value.length == 0) {
            textError.textContent = " ";
        } else {
            try {
                new EmployeePayrollData().name = name.value;
                textError.textContent = " ";
            } catch (e) {
                textError.textContent = e;
            }
        }
    });

    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener("input", function() {
        output.textContent = salary.value;
    });
});

/** On form submit populate employee payroll data object */
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(EmployeePayrollData);

    } catch (e) {
        return;
    }
    alert(employeePayrollData.toString());
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.startDate = new Date(Date.parse(date));
    setTextValue('.date-error', e)
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked == true)
            setItems.push(item.value);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

// UC4 Saving Employee payroll to local storage
function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [EmployeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

/** Reset employee payroll form */

const resetForm = () => {
    setTextValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[nmae=department]');
    setValue('#salary', '');
    setValue('#notes', '');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2021');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
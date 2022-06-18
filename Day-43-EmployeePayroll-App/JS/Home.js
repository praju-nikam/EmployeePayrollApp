//UC4_DisplayEmployeeDetailsinTabularFormatusingTemplateLiterals
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal 
const createInnerHtml = () => {
    const headerHtml = "<th></th></th><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
            <tr>
                <td><img class="profile" src="../Assets/profile-images/Ellipse -1.png"></td>
                <td>${EmployeePayrollData._name}</td>
                <td>${EmployeePayrollData._gender}</td>
                <td>${EmployeePayrollData._department}</td>
                <td>${EmployeePayrollData._salary}</td>
                <td>${EmployeePayrollData._startDate}</td>
                
                <td>
                    <img name="${EmployeePayrollData._id}" onclick="remove(this)" src="../Assets/icons/delete-black-18dp.svg" alt="delete">
                    <img name="${EmployeePayrollData._id}" onclick="update(this)" src="../Assets/icons/create-black-18dp.svg" alt="delete">
                </td>
            </tr>    
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Ashvini Kanojia',
            _gender: 'male',
            _department: [
                'Finance',
                'Engineer'
            ],
            _salary: '499999',
            _startDate: '14 May 2016',
            _note: 'Hi There',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Yashraj',
            _gender: 'female',
            _department: ['Others'],
            _salary: '299999',
            _startDate: '21 Feb 2020',
            _note: 'Hello',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
    }
    return deptHtml;
}
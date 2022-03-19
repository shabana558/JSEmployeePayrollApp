let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList=getEmployeePayrollDatafromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.Length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDatafromStorage=() => {
    return localStorage.getItem('EmployeePayrollList') ?
    JSON.parse(localStorage.getItem('EmployeePayrollList')): [];
}

// Template literal ES6 feature
const createInnerHtml = () => {
    const headerHTML = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+"<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length==0)return;
    
    let employeePayrollData= createEmployeePayrollJSON()[0];
    const innerHtml =`${headerHtml}
    for (const empPayrollData of empPayrollList){
    }
    <tr>
    <td><img class="profile src="${employeePayrollData._profilepic}" alt=""></td>
    <td>${employeePayrollData._name}</td>
    <td>${EmployeePayrollData._gender}</td>
    <td>
    <div class='dept-label'>${EmployeePayrollData._department[0]}</div>
    <div class='dept-label'>${EmployeePayrollData._department[1]}</div>
    </td>
    <td>${EmployeePayrollData._Salary}</td>
    <td>${EmployeePayrollData._StartDate}</td>
    <td>
    <img name="${EmployeePayrollData._id}" onClick="remove(this)"
    src="../assets/Delete.png" alt="delete">
    <img name="${EmployeePayrollData._id}" onClick="update(this)"
    src="../assets/edit-text(1).png" alt="edit">
    </td>
    </tr>
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>
    <tr>
    <td><img class="profile" alt=""
        src=".../assets/Profile-Images/Ellipse-2.png">
        </td>
        <td>Shabana</td>
        <td>Female</td>
        <td><div class='dept-label'>HR</div>
            <div class='dept-label'>Finance</div></td>
            <td>3000000</td>
            <td>1 March 2022</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                src="../assets/Delete.png">
                <img id="1" alt="edit" onclick="update(this)"
                src="../assets/edit-text (1).png">
            </td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;  
}
const createEmployeePayrollJSON= () => {
    let employeePayrollListLocal = [
        {
        _name: 'Shaik Shabana',
        _gender: 'Female',
        _department: [
            'Engineering',
            'Finance'
        ],
        _Salary: '500000',
        _StartDate: '1 March 2022',
        _note: '',
        _id: new Date().getTime(),
        _profilepic: '.../assets/Profile-Images/Ellipse-2.png'
    },
    {
     _name: 'Amarpa Shashanka Keerthi Kumar',
     _gender: 'female',
     _department: [
         'Sales'
     ],
     _Salary: '400000',
     _StartDate: '1 March 2022',
     _note: '',
     _id: new Date().getTime() + 1,
     _profilepic: '../assests/Profile-Images/Ellipse-1.png'
    }
    ];
    return employeePayrollListLocal;
}

    const update=(node) => {
        let employeePayrollData=employeeList.find(empData._name==node.id)
        if(!employeePayrollData) return;
        localStorage.setItem('editEmp',JSON.stringify(employeePayrollData))
        window.location.replace(site_Properties.add_emp_Payroll_page);
}
const remove =node => {
    let employeePayrollData=empPayrollList.find(empData => empData._name==name.id);
    if(!employeePayrollData) return;
    const index=empPayrollList
    .map(empData => empData._name)
    .indexof(employeePayrollData._name);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent=empPayrollList.Length;
    createInnerHtml();
}
var citySelect = document.getElementById("city");
var departmentSelect = document.getElementById("department");
var employeeSelect = document.getElementById("employee");
var brigadeSelect = document.getElementById("brigade");

citySelect.addEventListener("change", updateDepartments);
departmentSelect.addEventListener("change", updateEmployees);

function updateDepartments() {
    var selectedCity = citySelect.value;
    departmentSelect.innerHTML = "<option value=''>-- Выберите цех --</option>";

    if (selectedCity === "city1") {
        var option1 = new Option("Производство", "dept1");
        var option2 = new Option("Логистика", "dept2");
        departmentSelect.add(option1);
        departmentSelect.add(option2);
    } else if (selectedCity === "city2") {
        var option3 = new Option("Склад", "dept3");
        var option4 = new Option("Транспорт", "dept4");
        var option5 = new Option("Монтаж", "dept5");
        departmentSelect.add(option3);
        departmentSelect.add(option4);
        departmentSelect.add(option5);
    }
}

function updateEmployees() {
    var selectedDepartment = departmentSelect.value;
    employeeSelect.innerHTML = "<option value=''>-- Выберите сотрудника --</option>";

    if (selectedDepartment === "dept1") {
        addEmployeeOptions(["Иван Иванов", "Екатерина Петрова", "Андрей Смирнов"]);
    } else if (selectedDepartment === "dept2") {
        addEmployeeOptions(["Павел Сидоров", "Анна Козлова", "Максим Федоров"]);
    } else if (selectedDepartment === "dept3") {
        addEmployeeOptions(["Сергей Иванов", "Ольга Петрова", "Денис Семенов"]);
    } else if (selectedDepartment === "dept4") {
        addEmployeeOptions(["Алексей Смирнов", "Мария Сидорова", "Артем Козлов"]);
    } else if (selectedDepartment === "dept5") {
        addEmployeeOptions(["Владимир Федоров", "Татьяна Иванова", "Павел Сидоров"]);
    }
}

function addEmployeeOptions(employees) {
    for (var i = 0; i < employees.length; i++) {
        var option = new Option(employees[i], "emp" + i);
        employeeSelect.add(option);
    }
}

updateDepartments();
updateEmployees();
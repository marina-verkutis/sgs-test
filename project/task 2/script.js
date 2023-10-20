new Vue({
    el: '#app',
    data: {
        selectedCity: '',
        selectedDepartment: '',
        selectedEmployee: '',
        selectedBrigade: '',
        departments: [],
        employees: [],
    },
    created: function () {
        this.updateDepartments();
        this.updateEmployees();
        this.selectedCity = this.getCookie('selectedCity');
        this.updateDepartments();
        this.selectedDepartment = this.getCookie('selectedDepartment');
        this.updateEmployees();
        this.selectedEmployee = this.getCookie('selectedEmployee');
        this.selectedBrigade = this.getCookie('selectedBrigade');
    },
    methods: {
        saveToCookie: function () {
            this.setCookie('selectedCity', this.selectedCity, 1);
            this.setCookie('selectedDepartment', this.selectedDepartment, 1);
            this.setCookie('selectedEmployee', this.selectedEmployee, 1);
            this.setCookie('selectedBrigade', this.selectedBrigade, 1);
        },
        clearCookie: function () {
            this.setCookie('selectedCity', '', -1);
            this.setCookie('selectedDepartment', '', -1);
            this.setCookie('selectedEmployee', '', -1);
            this.setCookie('selectedBrigade', '', -1);
            this.selectedCity = '';
            this.selectedDepartment = '';
            this.selectedEmployee = '';
            this.selectedBrigade = '';
        },
        updateDepartments: function () {
            if (this.selectedCity === "Москва") {
                this.departments = [
                    { label: "Производство", value: "Производство" },
                    { label: "Логистика", value: "Логистика" },
                ];
            } else if (this.selectedCity === "Санкт-Петербург") {
                this.departments = [
                    { label: "Склад", value: "Склад" },
                    { label: "Транспорт", value: "Транспорт" },
                    { label: "Монтаж", value: "Монтаж" },
                ];
            } else {
                this.departments = [];
            }
        },
        updateEmployees: function () {
            if (this.selectedDepartment === "Производство") {
                this.employees = [
                    { label: "Иван Иванов", value: "Иван Иванов" },
                    { label: "Екатерина Петрова", value: "Екатерина Петрова" },
                    { label: "Андрей Смирнов", value: "Андрей Смирнов" },
                ];
            } else if (this.selectedDepartment === "Логистика") {
                this.employees = [
                    { label: "Павел Сидоров", value: "Павел Сидоров" },
                    { label: "Анна Козлова", value: "Анна Козлова" },
                    { label: "Максим Федоров", value: "Максим Федоров" },
                ];
            } else if (this.selectedDepartment === "Склад") {
                this.employees = [
                    { label: "Сергей Иванов", value: "Сергей Иванов" },
                    { label: "Ольга Петрова", value: "Ольга Петрова" },
                    { label: "Денис Семенов", value: "Денис Семенов" },
                ];
            } else if (this.selectedDepartment === "Транспорт") {
                this.employees = [
                    { label: "Алексей Смирнов", value: "Алексей Смирнов" },
                    { label: "Мария Сидорова", value: "Мария Сидорова" },
                    { label: "Артем Козлов", value: "Артем Козлов" },
                ];
            } else if (this.selectedDepartment === "Монтаж") {
                this.employees = [
                    { label: "Владимир Федоров", value: "Владимир Федоров" },
                    { label: "Татьяна Иванова", value: "Татьяна Иванова" },
                    { label: "Павел Сидоров", value: "Павел Сидоров" },
                ];
            } else {
                this.employees = [];
            }
        },
        getCookie: function (name) {
            return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(name).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
        },
        setCookie: function (name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
        },
    }
});
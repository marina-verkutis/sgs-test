
CREATE TABLE Cities (
    CityID INT PRIMARY KEY IDENTITY(1,1),
    CityName NVARCHAR(255) NOT NULL
);


CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY IDENTITY(1,1),
    DepartmentName NVARCHAR(255) NOT NULL,
    CityID INT REFERENCES Cities (CityID)
);


CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    EmployeeName NVARCHAR(255) NOT NULL,
    DepartmentID INT REFERENCES Departments (DepartmentID)
);


CREATE TABLE Brigades (
    BrigadeID INT PRIMARY KEY IDENTITY(1,1),
    BrigadeName NVARCHAR(255) NOT NULL,
    EmployeeID INT REFERENCES Employees (EmployeeID)
);

CREATE DATABASE Bank;
USE Bank;
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    DOB DATE,
    Balance DECIMAL(10,2),
    LastModified DATETIME
);

CREATE TABLE Accounts (
    AccountID INT PRIMARY KEY,
    CustomerID INT,
    AccountType VARCHAR(20),
    Balance DECIMAL(10,2),
    LastModified DATETIME,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Position VARCHAR(50),
    Salary DECIMAL(10,2),
    Department VARCHAR(50),
    HireDate DATE
);



INSERT INTO Customers VALUES
(1, 'Ananya Reddy', '1985-05-15', 1000, NOW()),
(2, 'Kavya Sharma', '1990-07-20', 1500, NOW());

INSERT INTO Accounts VALUES
(1, 1, 'Savings', 1000, NOW()),
(2, 1, 'Checking', 500, NOW()),
(3, 2, 'Savings', 2000, NOW());

INSERT INTO Employees VALUES
(1, 'Priya Nair', 'Manager', 70000, 'HR', '2015-06-15'),
(2, 'Sneha Iyer', 'Developer', 60000, 'IT', '2017-03-20');


DELIMITER $$

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';
END$$

DELIMITER ;



DELIMITER $$

CREATE PROCEDURE UpdateEmployeeBonus(
    IN dept_name VARCHAR(50),
    IN bonus_percent DECIMAL(5,2)
)
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percent / 100)
    WHERE Department = dept_name;
END$$

DELIMITER ;


DELIMITER $$

CREATE PROCEDURE TransferFunds(
    IN from_account INT,
    IN to_account INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE from_balance DECIMAL(10,2);

    -- Check balance
    SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_account;

    IF from_balance >= amount THEN
        START TRANSACTION;

        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_account;

        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_account;

        COMMIT;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient balance in source account.';
    END IF;
END$$

DELIMITER ;

CALL ProcessMonthlyInterest();


CALL UpdateEmployeeBonus('IT', 10);


CALL TransferFunds(1, 2, 400);

SELECT * FROM Accounts;


SELECT * FROM Employees;

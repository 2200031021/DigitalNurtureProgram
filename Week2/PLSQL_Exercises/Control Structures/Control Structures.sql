CREATE DATABASE BankDB;
USE BankDB;
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
CREATE TABLE Transactions (
    TransactionID INT PRIMARY KEY,
    AccountID INT,
    TransactionDate DATETIME,
    Amount DECIMAL(10,2),
    TransactionType VARCHAR(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);
CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    LoanAmount DECIMAL(10,2),
    InterestRate DECIMAL(5,2),
    StartDate DATE,
    EndDate DATE,
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
ALTER TABLE Customers ADD COLUMN IsVIP BOOLEAN DEFAULT FALSE;
INSERT INTO Customers VALUES
(1, 'Ananya Reddy', '1985-05-15', 1000, NOW(), FALSE),
(2, 'Kavya Sharma', '1990-07-20', 1500, NOW(), FALSE),
(3, 'Meena Joshi', '1950-01-10', 12000, NOW(), FALSE); -- Age > 60

INSERT INTO Accounts VALUES
(1, 1, 'Savings', 1000, NOW()),
(2, 2, 'Checking', 1500, NOW());

INSERT INTO Transactions VALUES
(1, 1, NOW(), 200, 'Deposit'),
(2, 2, NOW(), 300, 'Withdrawal');

INSERT INTO Loans VALUES
(1, 1, 5000, 5.00, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 60 MONTH)),
(2, 3, 7000, 7.50, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 20 DAY)); 

INSERT INTO Employees VALUES
(1, 'Priya Nair', 'Manager', 70000, 'HR', '2015-06-15'),
(2, 'Sneha Iyer', 'Developer', 60000, 'IT', '2017-03-20');
DELIMITER $$

CREATE PROCEDURE ApplySeniorDiscount()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_customerID INT;

    DECLARE cur CURSOR FOR 
        SELECT CustomerID 
        FROM Customers 
        WHERE TIMESTAMPDIFF(YEAR, DOB, CURDATE()) > 60;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;
    discount_loop: LOOP
        FETCH cur INTO v_customerID;
        IF done THEN
            LEAVE discount_loop;
        END IF;

        UPDATE Loans 
        SET InterestRate = InterestRate - 1 
        WHERE CustomerID = v_customerID;
    END LOOP;
    CLOSE cur;
END$$

DELIMITER ;
DELIMITER $$

CREATE PROCEDURE PromoteToVIP()
BEGIN
    UPDATE Customers
    SET IsVIP = TRUE
    WHERE Balance > 10000;
END$$

DELIMITER ;
DELIMITER $$

CREATE PROCEDURE SendLoanReminders()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_name VARCHAR(100);
    DECLARE v_endDate DATE;

    DECLARE cur CURSOR FOR
        SELECT c.Name, l.EndDate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;
    reminder_loop: LOOP
        FETCH cur INTO v_name, v_endDate;
        IF done THEN
            LEAVE reminder_loop;
        END IF;

        SELECT CONCAT('Reminder: ', v_name, ', your loan is due on ', v_endDate) AS Message;
    END LOOP;

    CLOSE cur;
END$$

DELIMITER ;
CALL ApplySeniorDiscount();
CALL PromoteToVIP();
CALL SendLoanReminders();
SELECT * FROM Customers;
SELECT * FROM Loans;


CREATE DATABASE IF NOT EXISTS DigitalNurtureDB;
USE DigitalNurtureDB;
DELIMITER //
CREATE PROCEDURE greet_user(IN name VARCHAR(100))
BEGIN
   SELECT CONCAT('Hello, ', name, '!') AS greeting;
END;
//
DELIMITER ;
CALL greet_user('Anitha');

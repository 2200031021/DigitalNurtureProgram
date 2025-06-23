-- MySQL version of Control Structure using IF...ELSE
SET @marks = 75;

-- Use CASE in SELECT for similar logic
SELECT 
    CASE 
        WHEN @marks >= 50 THEN 'Passed'
        ELSE 'Failed'
    END AS result;

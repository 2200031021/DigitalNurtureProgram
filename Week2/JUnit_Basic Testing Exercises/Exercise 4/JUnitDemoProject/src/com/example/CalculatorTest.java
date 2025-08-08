package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("🔧 Setup done.");
    }

    
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("🧹 Teardown done.");
    }

    
    @Test
    public void testAdd() {
        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
        System.out.println("✅ testAdd executed.");
    }

    
    @Test
    public void testSubtract() {
        // Arrange
        int a = 50;
        int b = 20;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(30, result);
        System.out.println("✅ testSubtract executed.");
    }
}

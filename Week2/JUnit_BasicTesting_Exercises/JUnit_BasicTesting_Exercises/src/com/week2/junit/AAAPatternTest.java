package com.week2.junit;

import static org.junit.Assert.*;
import org.junit.Test;

public class AAAPatternTest {
    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10, b = 4;

        // Act
        int result = a - b;

        // Assert
        assertEquals(6, result);
        System.out.println("Test Passed: 10 - 4 = " + result);
    }
}

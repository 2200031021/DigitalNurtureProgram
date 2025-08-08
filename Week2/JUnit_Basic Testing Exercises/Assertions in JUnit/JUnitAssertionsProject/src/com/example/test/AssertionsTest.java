package com.example.test;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        System.out.println("Running assertion tests...");

        // Assert equals
        assertEquals("Checking 2 + 3 == 5", 5, 2 + 3);
        System.out.println("✔ assertEquals passed");

        // Assert true
        assertTrue("Checking 5 > 3", 5 > 3);
        System.out.println("✔ assertTrue passed");

        // Assert false
        assertFalse("Checking 5 < 3 is false", 5 < 3);
        System.out.println("✔ assertFalse passed");

        // Assert null
        assertNull("Checking null is null", null);
        System.out.println("✔ assertNull passed");

        // Assert not null
        assertNotNull("Checking new Object() is not null", new Object());
        System.out.println("✔ assertNotNull passed");

        System.out.println("All assertions passed successfully.");
    }
}

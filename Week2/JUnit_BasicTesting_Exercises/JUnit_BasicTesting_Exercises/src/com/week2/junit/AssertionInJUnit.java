package com.week2.junit;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionInJUnit {
    @Test
    public void testAddition() {
        assertEquals(5, 2 + 3);
        System.out.println("Test Passed: 2 + 3 = 5");
    }
}

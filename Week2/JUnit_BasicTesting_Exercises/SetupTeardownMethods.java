package com.week2.junit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class SetupTeardownMethods {
    @Before
    public void setUp() {
        System.out.println("Setup before test");
    }

    @After
    public void tearDown() {
        System.out.println("Cleanup after test");
    }

    @Test
    public void testSomething() {
        System.out.println("Actual test running");
    }
}

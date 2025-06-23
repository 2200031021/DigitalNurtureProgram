package com.week2.junit;

import org.junit.Before;
import org.junit.Test;

public class TestFixtures {
    @Before
    public void setup() {
        System.out.println("Before test runs");
    }

    @Test
    public void sampleTest() {
        System.out.println("Test is running");
    }
}

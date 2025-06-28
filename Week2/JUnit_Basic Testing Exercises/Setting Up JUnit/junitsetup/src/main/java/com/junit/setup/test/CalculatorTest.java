package com.junit.setup.test;

import org.junit.Test;
import static org.junit.Assert.*;

import com.junit.setup.main.Calculator;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        int result = calc.add(2, 3);                     
        System.out.println("Addition Result: " + result);
        assertEquals(5, result);                          
    }
}

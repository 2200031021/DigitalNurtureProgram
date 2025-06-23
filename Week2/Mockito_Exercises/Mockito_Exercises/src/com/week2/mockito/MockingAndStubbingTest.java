package com.week2.mockito;

import static org.mockito.Mockito.*;
import java.util.List;
import org.junit.Test;

public class MockingAndStubbingTest {

    @SuppressWarnings("unchecked")
    @Test
    public void testMockList() {
        List<String> mockList = (List<String>) mock(List.class);
        when(mockList.get(0)).thenReturn("Mocked Value");
        System.out.println(mockList.get(0)); // prints "Mocked Value"
    }
}

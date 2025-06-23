package com.week2.mockito;

import static org.mockito.Mockito.*;
import java.util.List;
import org.junit.Test;

public class VerifyingInteractionsTest {

    @SuppressWarnings("unchecked")
    @Test
    public void testVerify() {
        List<String> mockList = (List<String>) mock(List.class);
        mockList.add("Hello");
        verify(mockList).add("Hello"); // verifies interaction

        System.out.println("✅ Interaction verified successfully!");
    }
}

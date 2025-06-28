package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import org.mockito.stubbing.Answer;
import org.mockito.invocation.InvocationOnMock;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Add behavior to print to console when getData is called
        doAnswer(new Answer<Void>() {
            public Void answer(InvocationOnMock invocation) {
                System.out.println("Mock method getData() was called");
                return null;
            }
        }).when(mockApi).getData();

        // Call method
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Verify interaction
        verify(mockApi).getData();
        System.out.println("Verification successful: getData() was called");
    }
}

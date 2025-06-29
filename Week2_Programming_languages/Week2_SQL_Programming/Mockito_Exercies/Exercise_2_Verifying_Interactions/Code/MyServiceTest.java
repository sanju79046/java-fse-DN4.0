package org.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest2 {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Call the method with specific arguments
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Step 3: Verify the method interaction
        verify(mockApi).getData();
    }
}

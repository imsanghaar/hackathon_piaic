import React from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';

export function ChatComponent() {
  const { control } = useChatKit({
    workflowId: 'your_workflow_id', // Replace with your actual workflow ID
    api: {
      async getClientSecret(existing) {
        if (existing) {
          console.log("Attempting to refresh existing ChatKit session:", existing);
        }
        try {
          const res = await fetch('http://localhost:8000/api/chatkit/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const { client_secret } = await res.json();
          return client_secret;
        } catch (error) {
          console.error("Failed to obtain ChatKit client secret:", error);
          return null;
        }
      },
    },
  });

  if (!control) {
    return <div>Loading ChatKit...</div>;
  }

  return (
    <div style={{ height: '500px', width: '400px' }}>
      <ChatKit control={control} />
    </div>
  );
}

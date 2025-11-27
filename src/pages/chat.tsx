import React from 'react';
import Layout from '@theme/Layout';
import Chat from '../components/Chat';

function ChatPage() {
  return (
    <Layout title="Chat" description="Chat with the AI assistant about the book.">
      <main>
        <Chat />
      </main>
    </Layout>
  );
}

export default ChatPage;

import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Add top padding to account for fixed header */}
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      
      {/* ElevenLabs ConvAI Widget - Available on all pages */}
      <elevenlabs-convai agent-id="agent_01jwgcr30vesv9wdg5eg7jn06y"></elevenlabs-convai>
    </div>
  );
};

export default Layout;
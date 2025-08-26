import React, { useState, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { MessageCircle, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// Using public image

const AIAlexLiveChat = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to AI Alex');
      setIsConnected(true);
      setError(null);
    },
    onDisconnect: () => {
      console.log('Disconnected from AI Alex');
      setIsConnected(false);
    },
    onError: (error) => {
      console.error('Conversation error:', error);
      setError('Failed to connect to AI Alex. Please try again.');
      setIsConnected(false);
    },
    onMessage: (message) => {
      console.log('Received message:', message);
    }
  });

  const { status, isSpeaking } = conversation;

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      setError(null);
    } catch (err) {
      setError('Microphone access is required for voice chat with AI Alex.');
      setHasPermission(false);
    }
  };

  const startConversation = async () => {
    if (!hasPermission) {
      await requestMicrophonePermission();
      if (!hasPermission) return;
    }

    try {
      await conversation.startSession({
        agentId: 'agent_01jwgcr30vesv9wdg5eg7jn06y'
      });
    } catch (err) {
      setError('Failed to start conversation with AI Alex. Please try again.');
      console.error('Failed to start conversation:', err);
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
      setIsConnected(false);
    } catch (err) {
      console.error('Failed to end conversation:', err);
    }
  };

  useEffect(() => {
    // Check microphone permission on mount
    navigator.permissions.query({ name: 'microphone' as PermissionName }).then((result) => {
      setHasPermission(result.state === 'granted');
    });
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className={`w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-2 ${
            isConnected ? 'border-green-500 shadow-lg shadow-green-500/25' : 'border-primary shadow-lg shadow-primary/25'
          }`}>
            <img 
              src="/work/Alex.png" 
              alt="Alex Bradbury" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <CardTitle className="text-xl">
          {isConnected ? 'Live Chat with AI Alex' : 'Talk to AI Alex'}
        </CardTitle>
        <CardDescription>
          {isConnected 
            ? (isSpeaking ? 'Alex is speaking...' : 'Listening for your questions')
            : 'Start a voice conversation with AI Alex about FlawlessCX, services, and DiscoveryStack'
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {error && (
          <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
            {error}
          </div>
        )}

        {!hasPermission && !isConnected && (
          <div className="p-3 bg-muted text-muted-foreground text-sm rounded-md">
            <p className="mb-2">🎤 Microphone access required</p>
            <p>AI Alex uses voice chat to provide the best experience. Please allow microphone access when prompted.</p>
          </div>
        )}

        <div className="flex flex-col space-y-3">
          {!isConnected ? (
            <Button 
              onClick={startConversation}
              size="lg"
              className="w-full"
              disabled={status === 'connecting'}
            >
              {status === 'connecting' ? (
                <>
                  <Mic className="mr-2 h-4 w-4 animate-pulse" />
                  Connecting...
                </>
              ) : (
                <>
                  <Phone className="mr-2 h-4 w-4" />
                  Start Voice Chat
                </>
              )}
            </Button>
          ) : (
            <Button 
              onClick={endConversation}
              variant="destructive"
              size="lg"
              className="w-full"
            >
              <PhoneOff className="mr-2 h-4 w-4" />
              End Chat
            </Button>
          )}
        </div>

        {isConnected && (
          <div className="text-center space-y-2">
            <div className={`flex items-center justify-center space-x-2 ${
              isSpeaking ? 'text-green-600' : 'text-muted-foreground'
            }`}>
              {isSpeaking ? (
                <>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  <span className="text-sm">Alex is responding...</span>
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4" />
                  <span className="text-sm">Speak your question</span>
                </>
              )}
            </div>
          </div>
        )}

        <div className="text-xs text-muted-foreground text-center">
          Ask about FlawlessCX services, DiscoveryStack features, CX best practices, and more!
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAlexLiveChat;
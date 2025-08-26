import React from 'react';
import { X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AIAlexVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartVoiceChat: () => void;
}

const AIAlexVoiceModal = ({ isOpen, onClose, onStartVoiceChat }: AIAlexVoiceModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl p-6 max-w-md w-full mx-4 relative shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20">
              <img 
                src="/work/Alex.png" 
                alt="AI Alex" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Talk to AI Alex
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Start a voice conversation with AI Alex about FlawlessCX, services, and DiscoveryStack
            </p>
          </div>
          
          <Button 
            onClick={onStartVoiceChat}
            className="w-full py-3 text-base font-medium mb-4"
            size="lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Start Voice Chat
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Ask about FlawlessCX services, DiscoveryStack features, CX best practices, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAlexVoiceModal;
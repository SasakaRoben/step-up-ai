import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, Send, User, Sparkles } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi! I'm your AI career advisor. Tell me about your interests, skills, or the type of work environment you prefer, and I'll help you discover career paths that match your profile.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const mockResponses = [
    "Based on your interests, I recommend exploring careers in Software Development, Data Science, or UX Design. These fields offer strong growth potential and align with your technical interests.",
    "Great choice! For a career in Data Science, I suggest starting with Python programming, statistics, and machine learning. Here's a personalized learning path I've created for you.",
    "Your profile suggests you'd excel in creative tech roles. Consider Product Management, Technical Writing, or Digital Marketing. Would you like me to create a detailed roadmap?",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-background rounded-full px-4 py-2 border border-border mb-4">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Try Our AI Career Advisor</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Chat with <span className="bg-gradient-hero bg-clip-text text-transparent">AI Career Advisor</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get instant career guidance powered by advanced AI
          </p>
        </div>

        <Card className="shadow-elevated border-border">
          <CardContent className="p-0">
            {/* Chat Header */}
            <div className="border-b border-border p-4 bg-muted/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">AI Career Advisor</div>
                  <div className="text-sm text-muted-foreground">Online • Ready to help</div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.isBot ? "" : "flex-row-reverse space-x-reverse"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isBot 
                      ? "bg-gradient-hero" 
                      : "bg-secondary"
                  }`}>
                    {message.isBot ? (
                      <Bot className="h-4 w-4 text-white" />
                    ) : (
                      <User className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`max-w-md p-3 rounded-lg ${
                    message.isBot
                      ? "bg-muted border border-border"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted border border-border p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Tell me about your interests or ask for career advice..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-gradient-hero shadow-glow"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-hero shadow-glow">
            <Sparkles className="mr-2 h-5 w-5" />
            Get Full AI Analysis
          </Button>
        </div>
      </div>
    </section>
  );
};
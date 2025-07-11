"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeftIcon,
  PaperAirplaneIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import Navbar from "../../../components/Navbar";
import TypingIndicator from "../../../components/TypingIndicator";

// Types for our chat interface
interface Message {
  id: string;
  text: string;
  sender: "user" | "match";
  timestamp: Date;
  isRead?: boolean;
}

interface ChatPartner {
  id: string;
  name: string;
  photo: string;
  isOnline: boolean;
  lastActive?: Date;
}

// Dummy user data
const DUMMY_CHAT_PARTNER: ChatPartner = {
  id: "user123",
  name: "Anjali Perera",
  photo: "/images/couple-1.svg", // Using placeholder image
  isOnline: true,
  lastActive: new Date(),
};

// Dummy message data
const DUMMY_MESSAGES: Message[] = [
  {
    id: "msg1",
    text: "Hey there! I noticed we both love hiking. Have you tried the trails at Horton Plains?",
    sender: "match",
    timestamp: new Date(2025, 6, 10, 14, 23),
    isRead: true,
  },
  {
    id: "msg2",
    text: "Hi Anjali! Yes, I've been to World's End! The views are spectacular. Have you visited Adam's Peak?",
    sender: "user",
    timestamp: new Date(2025, 6, 10, 14, 25),
  },
  {
    id: "msg3",
    text: "Not yet, but it's on my list! I heard the sunrise from there is magical. Would love to go there sometime.",
    sender: "match",
    timestamp: new Date(2025, 6, 10, 14, 30),
    isRead: true,
  },
  {
    id: "msg4",
    text: "It really is beautiful. Maybe we could plan a hike together if we continue to hit it off? 😊",
    sender: "user",
    timestamp: new Date(2025, 6, 10, 14, 33),
  },
  {
    id: "msg5",
    text: "I'd like that! What other outdoor activities do you enjoy?",
    sender: "match",
    timestamp: new Date(2025, 6, 10, 14, 40),
    isRead: true,
  },
];

export default function ChatPage() {
  const router = useRouter();
  const { userId } = useParams() as { userId: string };
  const [messages, setMessages] = useState<Message[]>(DUMMY_MESSAGES);
  const [newMessage, setNewMessage] = useState("");
  const [partner, setPartner] = useState<ChatPartner>(DUMMY_CHAT_PARTNER);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages when new messages arrive or typing status changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const newMsg: Message = {
      id: `msg${Date.now()}`,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage("");
    
    // Simulate received message after a delay
    if (messages.length < 10) { // Just to limit dummy responses
      // First show typing indicator
      setIsTyping(true);
      
      // Then hide typing indicator and show response
      setTimeout(() => {
        setIsTyping(false);
        
        setTimeout(() => {
          const response: Message = {
            id: `msg${Date.now() + 1}`,
            text: "That sounds wonderful! I'm looking forward to chatting more about our shared interests.",
            sender: "match",
            timestamp: new Date(),
            isRead: false,
          };
          setMessages(prev => [...prev, response]);
        }, 500);
      }, 2500);
    }
  };
  
  const formatMessageTime = (date: Date) => {
    return format(date, "h:mm a");
  };
  
  const goBack = () => {
    router.push("/matches");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900/20 to-neutral-900/30">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/50 to-neutral-900 opacity-80"></div>
      </div>
      
      <Navbar />

      {/* Main content with proper navbar spacing */}
      <div className="relative z-10">
        {/* Navbar spacer - creates space for the fixed navbar */}
        <div className="h-20 lg:h-24"></div>
        
        {/* Chat container */}
        <div className="max-w-3xl mx-auto pb-20 md:pb-4 px-2 sm:px-4">
          {/* Chat header */}
          <motion.div 
            className="bg-white/10 backdrop-blur-xl rounded-t-2xl border border-white/20 p-3 flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={goBack}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Go back to matches"
            >
              <ArrowLeftIcon className="h-5 w-5 text-white" />
            </button>
            
            <div className="relative">
              <Image
                src={partner.photo}
                alt={partner.name}
                width={40}
                height={40}
                className="rounded-full object-cover border border-white/20"
              />
              {partner.isOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-emerald-500 rounded-full border-2 border-neutral-900"></span>
              )}
            </div>
            
            <div>
              <h2 className="font-medium text-white">{partner.name}</h2>
              <p className="text-xs text-emerald-400">
                {partner.isOnline ? "Online" : "Last active " + format(partner.lastActive || new Date(), "h:mm a")}
              </p>
            </div>
          </motion.div>
          
          {/* Messages container */}
          <motion.div 
            className="bg-neutral-900/50 backdrop-blur-sm h-[calc(100vh-13rem)] sm:h-[calc(100vh-15rem)] overflow-y-auto p-4 border-l border-r border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {messages.length === 0 ? (
              <motion.div 
                className="flex flex-col items-center justify-center h-full text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-full p-6 mb-4">
                  <Image 
                    src="/images/couple-2.svg"
                    alt="Say hi"
                    width={60}
                    height={60}
                    className="opacity-80"
                  />
                </div>
                <p className="text-white/80 text-lg font-light">Say hi to start the conversation 💬</p>
                <p className="text-white/50 text-sm mt-2 max-w-xs">
                  Break the ice with a friendly message to get to know each other better
                </p>
              </motion.div>
            ) : (
              <>
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className={`max-w-[80%] md:max-w-[70%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-indigo-600 text-white rounded-br-sm"
                              : "bg-white/10 backdrop-blur-md text-white/90 rounded-bl-sm"
                          }`}
                        >
                          <p>{message.text}</p>
                        </div>
                        <div 
                          className={`text-xs mt-1 text-white/50 flex items-center gap-1 ${
                            message.sender === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          {formatMessageTime(message.timestamp)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing indicator */}
                  <AnimatePresence>
                    {isTyping && <TypingIndicator />}
                  </AnimatePresence>
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </>
            )}
          </motion.div>
          
          {/* Message input */}
          <motion.div 
            className="bg-white/10 backdrop-blur-xl rounded-b-2xl border border-white/20 p-3 flex items-center gap-2 sticky bottom-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <button 
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              aria-label="Add emoji"
            >
              <FaceSmileIcon className="h-5 w-5" />
            </button>
            
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
            />
            
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors ${
                !newMessage.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="h-5 w-5 text-white" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

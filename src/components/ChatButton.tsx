import React from 'react';
import Link from 'next/link';
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

interface ChatButtonProps {
  userId: string;
  hasNewMessages?: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ userId, hasNewMessages = false }) => {
  return (
    <Link href={`/chat/${userId}`}>
      <motion.button
        className={`flex items-center justify-center p-2 rounded-full ${
          hasNewMessages 
            ? "bg-indigo-600 hover:bg-indigo-500" 
            : "bg-white/10 hover:bg-white/20"
        } transition-colors relative`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
        
        {hasNewMessages && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500"></span>
        )}
      </motion.button>
    </Link>
  );
};

export default ChatButton;

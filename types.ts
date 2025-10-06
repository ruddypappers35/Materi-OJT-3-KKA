
import React from 'react';

export interface Slide {
  id: number;
  content: React.ReactNode;
}

export interface ChatMessage {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    options?: ChatOption[];
}

export interface ChatOption {
    id: number;
    text: string;
}

export interface QuizQuestion {
    question: string;
    correctAnswer: string;
}


import React, { useState, useMemo } from 'react';
import type { QuizQuestion } from '../types';
import { Gamepad2, Check, X, RefreshCw } from 'lucide-react';

const QUIZ_DATA: QuizQuestion[] = [
    { question: "Membantu customer service online 24 jam", correctAnswer: "Chatbot" },
    { question: "Menerjemahkan bahasa secara real-time", correctAnswer: "Translator" },
    { question: "Membantu menulis email dan dokumen", correctAnswer: "AI Writer" },
    { question: "Menjawab pertanyaan dengan suara", correctAnswer: "Voice Assistant" },
];

const OPTIONS = ["Chatbot", "Voice Assistant", "Translator", "AI Writer"];

const Quiz: React.FC = () => {
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const shuffledOptions = useMemo(() => [...OPTIONS].sort(() => Math.random() - 0.5), [currentQuestionIndex, gameState]);

    const handleStart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setGameState('playing');
    };

    const handleAnswer = (answer: string) => {
        if (selectedAnswer) return;

        setSelectedAnswer(answer);
        const correct = answer === QUIZ_DATA[currentQuestionIndex].correctAnswer;
        setIsCorrect(correct);
        if (correct) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < QUIZ_DATA.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setGameState('finished');
            }
        }, 1500);
    };

    const getButtonClass = (option: string) => {
        if (!selectedAnswer) return 'bg-indigo-500 hover:bg-indigo-600';
        if (option === QUIZ_DATA[currentQuestionIndex].correctAnswer) return 'bg-green-500 scale-105 shadow-lg';
        if (option === selectedAnswer) return 'bg-red-500 opacity-70';
        return 'bg-slate-400 opacity-70';
    };

    return (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-slate-800">
            <Gamepad2 size={60} className="text-green-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kuis Interaktif</h2>
            <p className="text-slate-600 text-base sm:text-lg mb-6">Cocokkan peran AI dengan fungsi komunikasinya!</p>

            <div className="w-full max-w-2xl bg-slate-50 p-4 md:p-8 rounded-2xl shadow-lg">
                {gameState === 'idle' && (
                    <button onClick={handleStart} className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105">
                        Mulai Kuis
                    </button>
                )}

                {gameState === 'playing' && (
                    <>
                        <p className="text-slate-500 mb-2">Pertanyaan {currentQuestionIndex + 1}/{QUIZ_DATA.length}</p>
                        <div className="bg-white p-4 md:p-6 rounded-lg mb-6 text-lg md:text-xl font-semibold min-h-[80px] flex items-center justify-center">
                            {QUIZ_DATA[currentQuestionIndex].question}
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {shuffledOptions.map(option => (
                                <button
                                    key={option}
                                    onClick={() => handleAnswer(option)}
                                    disabled={!!selectedAnswer}
                                    className={`text-white font-semibold p-3 sm:p-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform disabled:cursor-wait ${getButtonClass(option)}`}
                                >
                                    {selectedAnswer && option === QUIZ_DATA[currentQuestionIndex].correctAnswer && <Check />}
                                    {selectedAnswer && option === selectedAnswer && option !== QUIZ_DATA[currentQuestionIndex].correctAnswer && <X />}
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {gameState === 'finished' && (
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Kuis Selesai!</h3>
                        <p className="text-xl mb-4">Skor Anda:</p>
                        <p className="text-5xl font-bold text-green-500 mb-6">{score} <span className="text-3xl text-slate-500">/ {QUIZ_DATA.length}</span></p>
                        <button onClick={handleStart} className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform hover:scale-105 flex items-center gap-2 mx-auto">
                            <RefreshCw size={20}/> Ulangi Kuis
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;

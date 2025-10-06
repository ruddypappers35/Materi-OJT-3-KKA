import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage, ChatOption } from '../types';
import { Bot, User } from 'lucide-react';

const ChatbotSimulation: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [options, setOptions] = useState<ChatOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initialBotMessage: ChatMessage = {
            id: 1,
            text: "Halo! Selamat datang di layanan pelanggan TokoKu. Saya adalah chatbot yang siap membantu Anda. Silakan pilih salah satu opsi di bawah ini:",
            sender: 'bot',
        };
        const initialOptions: ChatOption[] = [
            { id: 1, text: "Lacak status pesanan saya" },
            { id: 2, text: "Informasi produk" },
            { id: 3, text: "Saya mau komplain barang rusak" },
        ];

        setIsLoading(true);
        setTimeout(() => {
            setMessages([initialBotMessage]);
            setOptions(initialOptions);
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);


    const handleOptionSelect = (option: ChatOption) => {
        const userMessage: ChatMessage = {
            id: Date.now(),
            text: option.text,
            sender: 'user',
        };
        setMessages(prev => [...prev, userMessage]);
        setOptions([]);
        setIsLoading(true);

        setTimeout(() => {
            let botResponse: ChatMessage;
            let nextOptions: ChatOption[] = [];

            switch (option.id) {
                case 1: // Lacak pesanan
                    botResponse = { id: Date.now() + 1, text: "Tentu. Mohon masukkan nomor pesanan Anda (contoh: TK12345).", sender: 'bot' };
                    nextOptions = [{ id: 99, text: "Maaf, saya tidak mau melacak, saya mau komplain." }];
                    break;
                case 2: // Informasi produk
                    botResponse = { id: Date.now() + 1, text: "Silakan sebutkan nama produk yang ingin Anda ketahui.", sender: 'bot' };
                    nextOptions = [{ id: 99, text: "Bukan itu, sepatu saya rusak." }];
                    break;
                case 3: // Komplain
                    botResponse = { id: Date.now() + 1, text: "Mohon maaf atas ketidaknyamanannya. Saya akan coba bantu. Apa masalah yang Anda alami?", sender: 'bot' };
                    nextOptions = [
                        { id: 4, text: "Barang yang diterima rusak" },
                        { id: 5, text: "Pesanan belum sampai" },
                        { id: 6, text: "Barang tidak sesuai" },
                    ];
                    break;
                case 4: // Barang rusak
                case 6: // Barang tidak sesuai
                    botResponse = { id: Date.now() + 1, text: "Saya mengerti. Untuk melanjutkan, mohon unggah foto produk yang bermasalah melalui menu 'Unggah Foto' di aplikasi kami.", sender: 'bot' };
                    nextOptions = [{ id: 7, text: "Saya tidak menemukan menunya. Bisa bicara dengan manusia?" }];
                    break;
                case 5: // Pesanan belum sampai
                    botResponse = { id: Date.now() + 1, text: "Status pesanan Anda sedang dalam pengiriman dan diperkirakan tiba dalam 2 hari kerja. Terima kasih telah bersabar.", sender: 'bot' };
                    nextOptions = [{ id: 8, text: "Kembali ke menu utama" }];
                    break;
                case 7: // Bicara dengan manusia
                    botResponse = { id: Date.now() + 1, text: "Maaf, semua agen kami sedang sibuk. Silakan coba kembali beberapa saat lagi atau kembali ke menu utama.", sender: 'bot' };
                    nextOptions = [{ id: 8, text: "Kembali ke menu utama" }];
                    break;
                case 8: // Kembali ke menu utama
                     botResponse = { id: Date.now() + 1, text: "Baik, kembali ke menu utama. Ada lagi yang bisa saya bantu?", sender: 'bot' };
                     nextOptions = [
                         { id: 1, text: "Lacak status pesanan saya" },
                         { id: 2, text: "Informasi produk" },
                         { id: 3, text: "Saya mau komplain barang rusak" },
                     ];
                    break;
                case 99: // User frustrasi
                    botResponse = { id: Date.now() + 1, text: "Maaf, saya tidak mengerti. Silakan pilih salah satu dari opsi berikut:", sender: 'bot' };
                    nextOptions = [
                         { id: 1, text: "Lacak status pesanan saya" },
                         { id: 2, text: "Informasi produk" },
                         { id: 3, text: "Saya mau komplain barang rusak" },
                    ];
                    break;
                default:
                    botResponse = { id: Date.now() + 1, text: "Maaf, terjadi kesalahan. Kembali ke menu utama.", sender: 'bot' };
                    nextOptions = [
                        { id: 1, text: "Lacak status pesanan saya" },
                        { id: 2, text: "Informasi produk" },
                        { id: 3, text: "Saya mau komplain barang rusak" },
                    ];
            }

            setMessages(prev => [...prev, botResponse]);
            setOptions(nextOptions);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="h-full w-full flex flex-col items-center justify-center text-slate-800 p-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Simulasi Chatbot</h2>
            <h3 className="text-lg md:text-xl font-semibold text-indigo-600 mb-2">"Kasus Sepatu Rusak Siti"</h3>
            <div className="w-full max-w-md flex-grow min-h-0 bg-slate-100 rounded-2xl shadow-lg flex flex-col overflow-hidden border-4 border-slate-200">
                <div className="bg-indigo-600 text-white p-2 flex items-center gap-3 shadow-md flex-shrink-0">
                    <Bot size={24} />
                    <div>
                        <h4 className="font-semibold text-sm">Chatbot TokoKu</h4>
                        <p className="text-xs text-indigo-200">Online</p>
                    </div>
                </div>

                <div className="flex-grow p-2 space-y-2 overflow-y-auto">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'bot' && <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white flex-shrink-0"><Bot size={18} /></div>}
                            <div className={`max-w-[80%] p-2 px-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-green-500 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none shadow-sm'}`}>
                                {msg.text}
                            </div>
                             {msg.sender === 'user' && <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0"><User size={18} /></div>}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                             <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white flex-shrink-0"><Bot size={18} /></div>
                            <div className="p-2 px-3 bg-white rounded-2xl rounded-bl-none shadow-sm">
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0s]"></span>
                                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-2 bg-slate-200 border-t border-slate-300 flex-shrink-0">
                    <div className="grid grid-cols-1 gap-1.5">
                        {options.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => handleOptionSelect(opt)}
                                className="bg-white text-indigo-700 font-semibold p-2 rounded-lg text-xs sm:text-sm text-center transition-colors hover:bg-indigo-50 border border-indigo-200 shadow-sm disabled:opacity-50"
                                disabled={isLoading}
                            >
                                {opt.text}
                            </button>
                        ))}
                         {!isLoading && options.length === 0 && messages.length > 1 && (
                            <p className="text-center text-xs text-slate-500 italic p-1">Simulasi selesai. Chatbot tidak dapat menyelesaikan masalah kompleks. Diskusikan mengapa manusia lebih unggul dalam situasi ini.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotSimulation;
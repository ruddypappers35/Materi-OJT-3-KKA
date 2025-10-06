import React from 'react';
import type { Slide } from './types';
import ChatbotSimulation from './components/ChatbotSimulation';
import Quiz from './components/Quiz';
import ThumbDanceChallenge from './components/ThumbDanceChallenge';
import ThankYouSlide from './components/ThankYouSlide';
import {
  BrainCircuit,
  Smile,
  Rocket,
  MessageSquare,
  Target,
  Calendar,
  Lightbulb,
  BookOpen,
  Bot,
  Users,
  Presentation,
  CheckCircle,
  XCircle,
  UserCheck,
  Cpu,
  ArrowRight,
  ClipboardList,
  Mic,
  Clapperboard,
  Gamepad2,
  Trophy,
  MessageCircle,
  Sparkles,
  Languages,
  Accessibility,
  AlarmClockCheck,
  MessageSquareQuote,
  Voicemail,
  SpellCheck,
  MonitorSpeaker,
  FileText,
  HelpCircle,
} from 'lucide-react';

const SlideWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-full w-full flex flex-col items-center justify-center text-center text-slate-800">{children}</div>
);

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">{children}</h1>
);

// FIX: Added className prop to Subtitle component to allow for custom styling.
const Subtitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <h2 className={`text-2xl md:text-3xl font-semibold text-indigo-600 mb-6 ${className}`}>{children}</h2>
);

const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <p className={`text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto ${className}`}>{children}</p>
);

const HighlightBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`p-4 md:p-6 rounded-2xl my-4 md:my-6 max-w-2xl mx-auto text-lg md:text-xl font-medium text-white shadow-lg ${className}`}>
    {children}
  </div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string, icon?: React.ReactNode }> = ({ children, className = '', icon }) => (
  <div className={`bg-slate-50/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-slate-200/50 shadow-md text-center transition-transform hover:-translate-y-1 ${className}`}>
      {icon && <div className="mb-3 flex justify-center">{icon}</div>}
      {children}
  </div>
);

export const SLIDES: Slide[] = [
  { id: 1, content: <SlideWrapper>
      <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-6">
        <BrainCircuit size={64} className="text-white" />
      </div>
      <Title>PERAN KECERDASAN ARTIFISIAL DALAM KOMUNIKASI</Title>
      <p className="text-lg sm:text-xl text-slate-700">Fase D – Koding dan Kecerdasan Artifisial (KKA)</p>
      <div className="mt-8 text-slate-600 text-center">
        <p>Disusun oleh: Rudy Susanto, S.Pd.</p>
        <p>SMPN 2 TUNGKAL JAYA</p>
      </div>
    </SlideWrapper>
  },
  { id: 2, content: <SlideWrapper>
      <Smile size={80} className="text-yellow-500 mb-6" />
      <Subtitle>Bagaimana kabarmu hari ini?</Subtitle>
      <p className="text-6xl my-6">👋</p>
      <Paragraph className="text-indigo-600 !font-semibold">Selamat datang di pembelajaran yang menarik!</Paragraph>
    </SlideWrapper>
  },
  { id: 3, content: <SlideWrapper>
      <MessageCircle size={80} className="text-blue-500 mb-6" />
      <Subtitle>Motivasi Awal</Subtitle>
      <div className="bg-amber-50 border border-amber-200 p-4 sm:p-6 rounded-xl max-w-3xl italic">
          <Paragraph>"Belajar tentang AI itu penting, karena teknologi ini sudah ada di sekitar kita. Dengan memahami cara kerjanya, kalian bisa lebih bijak memanfaatkannya — bukan hanya jadi pengguna pasif."</Paragraph>
      </div>
      <div className="flex gap-6 text-5xl mt-8">
        <Rocket className="text-red-500"/>
        <Lightbulb className="text-yellow-500"/>
        <Target className="text-green-500"/>
      </div>
    </SlideWrapper>
  },
  { id: 4, content: <ThumbDanceChallenge /> },
  { id: 5, content: <SlideWrapper>
      <MessageSquare size={56} className="text-purple-500 mb-4" />
      <Subtitle className="!mb-3 sm:!mb-4">Apersepsi</Subtitle>
      <HighlightBox className="bg-gradient-to-r from-rose-400 to-orange-400 !my-2 sm:!my-3 !p-3 !text-base sm:!text-lg">
        Pernahkah kalian belanja online lalu yang membalas chat bukan manusia, tapi chatbot?
      </HighlightBox>
      <div className="w-full max-w-xs sm:max-w-sm bg-slate-100 p-2 sm:p-3 rounded-lg mt-2 sm:mt-3 text-left space-y-1.5 text-xs sm:text-sm">
        <div className="flex justify-end"><div className="bg-green-500 text-white p-2 rounded-lg rounded-br-none">Halo, saya mau tanya produk ini</div></div>
        <div className="flex justify-start"><div className="bg-blue-500 text-white p-2 rounded-lg rounded-bl-none">Halo! Saya chatbot. Ada yang bisa saya bantu?</div></div>
        <div className="flex justify-end"><div className="bg-green-500 text-white p-2 rounded-lg rounded-br-none">Kapan barang sampai?</div></div>
        <div className="flex justify-start"><div className="bg-blue-500 text-white p-2 rounded-lg rounded-bl-none">Estimasi pengiriman 2-3 hari kerja</div></div>
      </div>
      <Paragraph className="mt-2 sm:mt-3 !text-base">Chatbot memang cepat, tapi kadang jawabannya terasa kaku. Hari ini kita akan belajar kapan AI lebih baik, dan kapan manusia tetap unggul.</Paragraph>
    </SlideWrapper>
  },
  { id: 6, content: <SlideWrapper>
      <Target size={80} className="text-green-600 mb-6" />
      <Subtitle>Tujuan Pembelajaran</Subtitle>
      <Paragraph className="mb-6">Setelah pembelajaran ini, siswa dapat:</Paragraph>
      <ul className="text-left max-w-2xl mx-auto space-y-3 md:space-y-4 text-base sm:text-lg">
        <li className="flex items-start gap-3 p-3 md:p-4 bg-slate-50 rounded-lg"><CheckCircle className="text-indigo-500 mt-1 flex-shrink-0" /> Menganalisis kelebihan dan kekurangan komunikasi dengan AI dibanding manusia</li>
        <li className="flex items-start gap-3 p-3 md:p-4 bg-slate-50 rounded-lg"><CheckCircle className="text-indigo-500 mt-1 flex-shrink-0" /> Menyampaikan hasil analisis dalam diskusi dan presentasi</li>
        <li className="flex items-start gap-3 p-3 md:p-4 bg-slate-50 rounded-lg"><CheckCircle className="text-indigo-500 mt-1 flex-shrink-0" /> Menyimpulkan peran AI dalam kehidupan sehari-hari melalui bermain chatbot sederhana</li>
      </ul>
    </SlideWrapper>
  },
  { id: 7, content: <SlideWrapper>
      <Calendar size={80} className="text-cyan-500 mb-6" />
      <Subtitle>Agenda Pembelajaran</Subtitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mt-4">
        <Card icon={<Bot size={40} className="text-indigo-500"/>}><h3 className="text-lg md:text-xl font-semibold text-slate-700">🔬 Praktik menggunakan AI</h3></Card>
        <Card icon={<Users size={40} className="text-indigo-500"/>}><h3 className="text-lg md:text-xl font-semibold text-slate-700">👥 Diskusi Kelompok</h3></Card>
        <Card icon={<Presentation size={40} className="text-indigo-500"/>}><h3 className="text-lg md:text-xl font-semibold text-slate-700">📢 Presentasi</h3></Card>
      </div>
    </SlideWrapper>
  },
  { id: 8, content: <SlideWrapper>
      <Lightbulb size={80} className="text-yellow-400 mb-6" />
      <Subtitle>Pertanyaan Pemantik</Subtitle>
      <HighlightBox className="bg-gradient-to-r from-rose-400 to-orange-400">
        "Menurut kalian, apakah chatbot bisa menggantikan manusia dalam komunikasi sehari-hari?"
      </HighlightBox>
      <div className="flex gap-4 text-5xl mt-8">
        <HelpCircle className="text-gray-400"/>
        <Sparkles className="text-yellow-400"/>
        <Bot className="text-blue-500"/>
        <Users className="text-green-500"/>
      </div>
      <Paragraph className="text-slate-500 mt-4">Mari kita pikirkan bersama-sama!</Paragraph>
    </SlideWrapper>
  },
   { id: 9, content: <SlideWrapper>
      <BookOpen size={56} className="text-amber-600 mb-2" />
      <Subtitle className="!mb-2 sm:!mb-4">Orientasi Permasalahan</Subtitle>
      <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-2 sm:mb-3">Kisah Siti dan Chatbot Belanja Online</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-left w-full max-w-4xl mt-2 text-xs sm:text-sm">
        <div className="bg-blue-50 p-2 sm:p-3 rounded-lg border border-blue-200 h-full">
            <h4 className="font-bold text-blue-800">📦 Situasi:</h4>
            <p>Siti menerima sepatu yang rusak dari toko online "TokoKu". Solnya lepas dan ada sobekan.</p>
        </div>
        <div className="bg-green-50 p-2 sm:p-3 rounded-lg border border-green-200 h-full">
            <h4 className="font-bold text-green-800">💭 Harapan Siti:</h4>
            <p>Mendapat solusi cepat (refund/tukar) dengan berbicara ke CS yang mengerti.</p>
        </div>
        <div className="bg-red-50 p-2 sm:p-3 rounded-lg border border-red-200 h-full">
            <h4 className="font-bold text-red-800">😤 Kenyataan yang Dialami:</h4>
            <p>Chatbot hanya memberikan menu terbatas, tidak ada opsi komplain, dan jawabannya kaku. Siti merasa frustrasi.</p>
        </div>
      </div>
       <HighlightBox className="bg-gradient-to-r from-indigo-500 to-purple-600 !text-sm sm:!text-base mt-2 sm:mt-4 !p-3 !my-2 sm:!my-4">
        🤔 Mengapa chatbot tidak bisa membantu Siti? Mari kita coba simulasinya!
      </HighlightBox>
    </SlideWrapper>
  },
  { id: 10, content: <ChatbotSimulation /> },
  { id: 11, content: <SlideWrapper>
      <Bot size={80} className="text-indigo-600 mb-6" />
      <Subtitle>Apa Itu Kecerdasan Artifisial (AI)?</Subtitle>
      <Paragraph className="mb-6">
        AI adalah sistem yang dibuat agar komputer dapat berpikir, belajar, dan mengambil keputusan seperti manusia.
      </Paragraph>
      <h3 className="text-2xl font-semibold text-slate-700 mb-4">Contoh penerapan:</h3>
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
         <Card icon={<MessageSquareQuote size={32} className="text-indigo-500" />}>
           <h4 className="font-semibold text-lg">Chatbot</h4><p className="text-sm text-slate-500">Asisten virtual</p>
         </Card>
         <Card icon={<Voicemail size={32} className="text-indigo-500" />}>
            <h4 className="font-semibold text-lg">Google Assistant</h4><p className="text-sm text-slate-500">Asisten suara pintar</p>
         </Card>
         <Card icon={<Languages size={32} className="text-indigo-500" />}>
            <h4 className="font-semibold text-lg">Penerjemah Otomatis</h4><p className="text-sm text-slate-500">Google Translate</p>
         </Card>
       </div>
    </SlideWrapper>
  },
  { id: 12, content: <SlideWrapper>
      <MonitorSpeaker size={80} className="text-teal-500 mb-6" />
      <Subtitle>AI dalam Komunikasi Sehari-hari</Subtitle>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-2">
         <Card><h4 className="font-semibold">🛒 Chatbot Toko Online</h4><p className="text-sm text-slate-500">Membantu 24/7</p></Card>
         <Card><h4 className="font-semibold">🎤 Voice Assistant</h4><p className="text-sm text-slate-500">Menjawab dengan suara</p></Card>
         <Card><h4 className="font-semibold">🌍 Penerjemah Bahasa</h4><p className="text-sm text-slate-500">Komunikasi lintas bahasa</p></Card>
         <Card><h4 className="font-semibold">📲 Auto-Reply</h4><p className="text-sm text-slate-500">Balasan otomatis</p></Card>
       </div>
       <HighlightBox className="bg-gradient-to-r from-sky-400 to-blue-500 mt-6 !text-base sm:!text-lg">
        🧠 Artinya, AI sudah menjadi "teman bicara digital" dalam berbagai aktivitas kita!
      </HighlightBox>
    </SlideWrapper>
  },
  { id: 13, content: <SlideWrapper>
      <CheckCircle size={80} className="text-green-500 mb-6" />
      <Subtitle>Kelebihan AI dalam Komunikasi</Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-2">
        <Card className="border-l-4 border-green-400"><h4 className="font-semibold">⚡ Cepat Merespons</h4><p className="text-sm text-slate-500">Jawaban instan</p></Card>
        <Card className="border-l-4 border-green-400"><h4 className="font-semibold">🕐 Aktif 24 Jam</h4><p className="text-sm text-slate-500">Tidak pernah lelah</p></Card>
        <Card className="border-l-4 border-green-400"><h4 className="font-semibold">🌍 Multi Bahasa</h4><p className="text-sm text-slate-500">Memahami banyak bahasa</p></Card>
        <Card className="border-l-4 border-green-400"><h4 className="font-semibold">📊 Konsisten</h4><p className="text-sm text-slate-500">Informasi yang sama</p></Card>
      </div>
    </SlideWrapper>
  },
  { id: 14, content: <SlideWrapper>
      <XCircle size={80} className="text-red-500 mb-6" />
      <Subtitle>Keterbatasan AI dalam Komunikasi</Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-2">
        <Card className="border-l-4 border-red-400"><h4 className="font-semibold">😕 Kurang Empati</h4><p className="text-sm text-slate-500">Tidak memahami emosi</p></Card>
        <Card className="border-l-4 border-red-400"><h4 className="font-semibold">🤷 Jawaban Terbatas</h4><p className="text-sm text-slate-500">Tergantung data</p></Card>
        <Card className="border-l-4 border-red-400"><h4 className="font-semibold">❤️ Tidak Ada Perasaan</h4><p className="text-sm text-slate-500">Komunikasi kaku</p></Card>
        <Card className="border-l-4 border-red-400"><h4 className="font-semibold">📚 Butuh Data Besar</h4><p className="text-sm text-slate-500">Untuk belajar</p></Card>
      </div>
    </SlideWrapper>
  },
  { id: 15, content: <SlideWrapper>
      <div className="flex gap-4 items-center mb-4 sm:mb-6"><UserCheck size={52} className="text-green-500" /> <span className="text-3xl sm:text-4xl font-bold">vs</span> <Cpu size={52} className="text-blue-500" /></div>
      <Subtitle className="!mb-4">Manusia vs AI dalam Komunikasi</Subtitle>
      <div className="w-full max-w-3xl px-2 sm:px-0">
        <table className="w-full text-xs sm:text-sm md:text-base border-collapse table-auto">
            <thead className="bg-slate-100">
                <tr>
                    <th className="p-2 sm:p-3 font-semibold text-slate-700 text-left">Aspek</th>
                    <th className="p-2 sm:p-3 font-semibold text-slate-700 text-center">🤖 AI</th>
                    <th className="p-2 sm:p-3 font-semibold text-slate-700 text-center">👨‍👩‍👧‍👦 Manusia</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-slate-200">
                    <td className="p-2 sm:p-3 text-slate-600 font-medium">Kecepatan</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Sangat cepat</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Tergantung</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 sm:p-3 text-slate-600 font-medium">Emosi/Empati</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Tidak punya</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Punya</td>
                </tr>
                <tr className="border-b border-slate-200">
                    <td className="p-2 sm:p-3 text-slate-600 font-medium">Fleksibilitas</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Terbatas</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Sangat Fleksibel</td>
                </tr>
                <tr className="bg-slate-50">
                    <td className="p-2 sm:p-3 text-slate-600 font-medium">Kreativitas</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Rendah</td>
                    <td className="p-2 sm:p-3 text-slate-600 text-center">Tinggi</td>
                </tr>
            </tbody>
        </table>
      </div>
      <HighlightBox className="bg-gradient-to-r from-emerald-400 to-cyan-500 mt-4 sm:mt-6 !text-base sm:!text-lg">
        🧩 AI membantu, tapi manusia unggul dalam memahami perasaan.
      </HighlightBox>
    </SlideWrapper>
  },
  { id: 16, content: <SlideWrapper>
      <Clapperboard size={80} className="text-purple-500 mb-6" />
      <Subtitle>Contoh Visual</Subtitle>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-6">
          <div className="text-center space-y-2"><Users size={60} className="text-green-500 mx-auto"/><span className="font-semibold">Manusia</span></div>
          <ArrowRight size={40} className="text-slate-400 rotate-90 md:rotate-0" />
          <div className="text-center space-y-2"><Bot size={60} className="text-blue-500 mx-auto"/><span className="font-semibold">AI</span></div>
          <ArrowRight size={40} className="text-slate-400 rotate-90 md:rotate-0" />
          <div className="text-center space-y-2"><MonitorSpeaker size={60} className="text-teal-500 mx-auto"/><span className="font-semibold">Komunikasi</span></div>
      </div>
      <Paragraph className="text-indigo-600 !font-semibold mt-4">AI menjadi penghubung dalam komunikasi modern.</Paragraph>
    </SlideWrapper>
  },
  { id: 17, content: <SlideWrapper>
      <Users size={80} className="text-orange-500 mb-6" />
      <Subtitle>Ayo Diskusikan dengan Kelompokmu!</Subtitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
        <Card className="bg-gradient-to-br from-orange-400 to-rose-400 text-white"><h3 className="text-xl font-semibold">🔍 Analisis Bersama</h3></Card>
        <Card className="bg-gradient-to-br from-orange-400 to-rose-400 text-white"><h3 className="text-xl font-semibold">💭 Sharing Ide</h3></Card>
        <Card className="bg-gradient-to-br from-orange-400 to-rose-400 text-white"><h3 className="text-xl font-semibold">📝 Catat Hasil</h3></Card>
      </div>
    </SlideWrapper>
  },
  { id: 18, content: <SlideWrapper>
      <ClipboardList size={80} className="text-sky-600 mb-6" />
      <Subtitle>Bacalah Instruksi pada LKPD!</Subtitle>
      <div className="w-full max-w-xl text-left space-y-4">
        <div className="flex items-center gap-4 p-3 md:p-4 bg-slate-50 rounded-lg"><div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div><div><h4 className="font-semibold">Baca Instruksi</h4><p className="text-sm text-slate-500">Pahami tugas di LKPD</p></div></div>
        <div className="flex items-center gap-4 p-3 md:p-4 bg-slate-50 rounded-lg"><div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div><div><h4 className="font-semibold">Diskusi Kelompok</h4><p className="text-sm text-slate-500">Kerjakan bersama</p></div></div>
        <div className="flex items-center gap-4 p-3 md:p-4 bg-slate-50 rounded-lg"><div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div><div><h4 className="font-semibold">Tulis Hasil</h4><p className="text-sm text-slate-500">Catat semua ide</p></div></div>
      </div>
    </SlideWrapper>
  },
  { id: 19, content: <SlideWrapper>
      <Mic size={80} className="text-rose-500 mb-6" />
      <Subtitle>Ayo Presentasikan Hasil Kerjamu!</Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-2">
        <Card className="border-l-4 border-rose-400"><h4 className="font-semibold">🗣️ Berbicara Jelas</h4></Card>
        <Card className="border-l-4 border-rose-400"><h4 className="font-semibold">👀 Kontak Mata</h4></Card>
        <Card className="border-l-4 border-rose-400"><h4 className="font-semibold">📊 Gunakan Data</h4></Card>
        <Card className="border-l-4 border-rose-400"><h4 className="font-semibold">❓ Siap Pertanyaan</h4></Card>
      </div>
    </SlideWrapper>
  },
  { id: 20, content: <SlideWrapper>
      <Sparkles size={80} className="text-amber-500 mb-6" />
      <Subtitle>Penguatan Materi: Peran AI</Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-2">
        <Card className="border-l-4 border-amber-400"><h4 className="font-semibold">⚡ Efisiensi</h4><p className="text-sm text-slate-500">Mempercepat respons</p></Card>
        <Card className="border-l-4 border-amber-400"><h4 className="font-semibold">🌍 Penerjemahan</h4><p className="text-sm text-slate-500">Komunikasi lintas bahasa</p></Card>
        <Card className="border-l-4 border-amber-400"><h4 className="font-semibold">♿ Aksesibilitas</h4><p className="text-sm text-slate-500">Membantu disabilitas</p></Card>
        <Card className="border-l-4 border-amber-400"><h4 className="font-semibold">⏰ Pengingat Otomatis</h4><p className="text-sm text-slate-500">Mengingatkan jadwal</p></Card>
      </div>
    </SlideWrapper>
  },
  { id: 21, content: <SlideWrapper>
      <Cpu size={80} className="text-slate-600 mb-6" />
      <Subtitle>Penguatan Materi: Jenis AI</Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-2">
        <Card icon={<MessageSquareQuote size={32}/>}><h4 className="font-semibold">Chatbot</h4><small>Customer service</small></Card>
        <Card icon={<Voicemail size={32}/>}><h4 className="font-semibold">Voice Assistant</h4><small>Siri, Google Assistant</small></Card>
        <Card icon={<Languages size={32}/>}><h4 className="font-semibold">Translator</h4><small>Google Translate</small></Card>
        <Card icon={<FileText size={32}/>}><h4 className="font-semibold">AI Writer</h4><small>ChatGPT, Grammarly</small></Card>
      </div>
    </SlideWrapper>
  },
   { id: 22, content: <SlideWrapper>
      <HelpCircle size={80} className="text-purple-500 mb-6" />
      <Subtitle>Refleksi</Subtitle>
       <div className="w-full max-w-2xl text-left space-y-4">
        <Card className="border-l-4 border-purple-400 !text-left !items-start"><h4>1️⃣ Apa yang sudah kamu pelajari hari ini?</h4><p className="text-sm text-slate-500">Pikirkan konsep baru tentang AI yang kamu dapatkan.</p></Card>
        <Card className="border-l-4 border-purple-400 !text-left !items-start"><h4>2️⃣ Bagaimana AI membantu komunikasi?</h4><p className="text-sm text-slate-500">Sebutkan contoh konkret dari pengalamanmu.</p></Card>
        <Card className="border-l-4 border-purple-400 !text-left !items-start"><h4>3️⃣ Kapan manusia lebih baik daripada AI?</h4><p className="text-sm text-slate-500">Jelaskan situasi di mana empati manusia diperlukan.</p></Card>
      </div>
    </SlideWrapper>
  },
  { id: 23, content: <Quiz /> },
  { id: 24, content: <ThankYouSlide /> },
];
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Send, 
  User, 
  GraduationCap, 
  Play, 
  Video, 
  Users, 
  RefreshCcw,
  Sparkles,
  ChevronRight,
  Monitor
} from 'lucide-react';

interface Dialogue {
  id: number;
  sender: 'Youssef' | 'Omar';
  text: string;
  avatar: string;
}

const dialogue: Dialogue[] = [
  {
    id: 1,
    sender: 'Youssef',
    text: "أنا عايز أتعلم مهارة جديدة… بس الكورسات غالية ومفيش وقت خالص.",
    avatar: "👨🏻‍💻"
  },
  {
    id: 2,
    sender: 'Omar',
    text: "طب ما تتعلم أونلاين.",
    avatar: "🧑🏻‍💻"
  },
  {
    id: 3,
    sender: 'Youssef',
    text: "لا يا عم… مش بحس إنه تعليم بجد.",
    avatar: "👨🏻‍💻"
  },
  {
    id: 4,
    sender: 'Omar',
    text: "طب اسمع بس… عندنا دكتورة مهارات العرض بتدينا الكورس أونلاين، وطريقتها حلوة جدًا.",
    avatar: "🧑🏻‍💻"
  },
  {
    id: 5,
    sender: 'Youssef',
    text: "أونلاين إزاي؟ يعني فيديو وخلاص؟",
    avatar: "👨🏻‍💻"
  },
  {
    id: 6,
    sender: 'Omar',
    text: "لا خالص… لايف، بتشرح، وبتسألنا، وكأننا في قاعة بالظبط. وكمان بتخلينا نعرض قدام بعض ونتناقش.",
    avatar: "🧑🏻‍💻"
  },
  {
    id: 7,
    sender: 'Youssef',
    text: "بجد؟ يعني في تفاعل؟",
    avatar: "👨🏻‍💻"
  },
  {
    id: 8,
    sender: 'Omar',
    text: "آه طبعًا… وكمان تقدر تعيد الفيديو لو مفهمتش، وده مش موجود في الكورس العادي.",
    avatar: "🧑🏻‍💻"
  },
  {
    id: 9,
    sender: 'Youssef',
    text: "طب والتطبيق؟ ولا كله نظري؟",
    avatar: "👨🏻‍💻"
  },
  {
    id: 10,
    sender: 'Omar',
    text: "لا يا معلم… كل حصة بنطبق، وبتدينا فيدباك على عرضك. حرفيًا بتتطور بسرعة.",
    avatar: "🧑🏻‍💻"
  },
  {
    id: 11,
    sender: 'Youssef',
    text: "أنا كنت فاكر أونلاين يعني تمشي فيديو وخلاص…",
    avatar: "👨🏻‍💻"
  },
  {
    id: 12,
    sender: 'Omar',
    text: "ده كان زمان… دلوقتي الموضوع بقى احترافي جدًا.",
    avatar: "🧑🏻‍💻"
  },
  {
    id: 13,
    sender: 'Youssef',
    text: "طب ابعتلي الكورس ده… شكلي كنت غلطان.",
    avatar: "👨🏻‍💻"
  },
  {
    id: 14,
    sender: 'Omar',
    text: "مش مهم كنت غلطان… المهم إنك تبدأ 😉",
    avatar: "🧑🏻‍💻"
  }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < dialogue.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-arabic bg-vibrant-cream" dir="rtl">
      {/* Sidebar - Vibrant Yellow */}
      <aside className="w-full lg:w-80 bg-vibrant-yellow border-l-[4px] border-black p-8 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center text-3xl neobrutal-shadow-sm">
            🎓
          </div>
          <h2 className="font-[900] text-3xl leading-none">مهارات-العرض</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border-2 border-black p-4 rounded-[12px] font-black text-center neobrutal-shadow-sm">
            🏆 1,240 نقطة
          </div>
          <div className="bg-white border-2 border-black p-4 rounded-[12px] font-black text-center neobrutal-shadow-sm">
            🔥 15 يوم متواصل
          </div>
        </div>

        <div className="mt-auto bg-vibrant-blue p-6 neobrutal-card text-white">
          <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-black mb-2 inline-block">
            دورة نشطة
          </span>
          <h3 className="font-black text-xl mb-1 mt-2">مهارات العرض الفعال</h3>
          <p className="text-sm opacity-90 mb-4">د. نهال النحاس</p>
          <div className="h-3 bg-black/20 rounded-full">
            <div className="w-[65%] h-full bg-vibrant-yellow rounded-full border-r-2 border-black"></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 lg:p-8 relative">
        {/* Header */}
        <header className="bg-vibrant-red p-4 lg:p-6 neobrutal-border neobrutal-shadow rounded-[16px] flex items-center justify-between mb-8">
          <h1 className="font-[900] text-xl lg:text-3xl text-white [text-shadow:1px_1px_0_#000]">
            دردشة المهارات الجديدة
          </h1>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full neobrutal-border bg-vibrant-yellow flex items-center justify-center text-xl hover:scale-110 transition-transform">
              📞
            </button>
            <button className="w-12 h-12 rounded-full neobrutal-border bg-vibrant-yellow flex items-center justify-center text-xl hover:scale-110 transition-transform">
              📹
            </button>
            <button 
              onClick={handleReset}
              className="w-12 h-12 rounded-full neobrutal-border bg-white flex items-center justify-center text-xl hover:scale-110 transition-transform"
              title="إعادة المحادثة"
            >
              <RefreshCcw className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-6 pb-24 px-2"
        >
          <AnimatePresence mode="popLayout">
            {dialogue.slice(0, currentStep + 1).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col max-w-[85%] lg:max-w-[70%] ${
                  msg.sender === 'Youssef' ? 'self-start' : 'self-end'
                }`}
              >
                <div className={`p-4 lg:p-6 neobrutal-border neobrutal-shadow-sm font-bold text-lg lg:text-xl leading-relaxed ${
                  msg.sender === 'Youssef' 
                    ? 'bg-white rounded-[0_20px_20px_20px]' 
                    : 'bg-vibrant-green rounded-[20px_0_20px_20px]'
                }`}>
                  <span className="block text-xs font-[900] uppercase tracking-widest mb-2 opacity-60">
                    {msg.sender === 'Youssef' ? 'يوسف' : 'عمر'}
                  </span>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area (Next Button) */}
        <div className="absolute bottom-8 left-4 right-4 lg:left-8 lg:right-8">
          {currentStep < dialogue.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full bg-white neobrutal-border p-6 rounded-[16px] neobrutal-shadow flex items-center justify-between group overflow-hidden relative"
            >
              <span className="text-slate-400 font-bold">
                {currentStep === 0 ? "اضغط لتبدأ المحادثة..." : "استمر في القراءة..."}
              </span>
              <div className="bg-vibrant-red text-white p-3 rounded-xl neobrutal-border transform group-hover:rotate-12 transition-transform">
                <ChevronRight className="w-6 h-6" />
              </div>
            </motion.button>
          ) : (
            <div className="bg-vibrant-green p-6 neobrutal-card text-white text-center font-black text-xl">
              تمت المحادثة! استمتع برحلة تعلمك الجديدة 💡
              <button 
                onClick={handleReset}
                className="block mx-auto mt-2 text-sm underline decoration-2 underline-offset-4"
              >
                إعادة العرض
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Floating Info Cards for Desktop */}
      <div className="hidden xl:flex flex-col gap-6 p-8 w-80 bg-vibrant-bg border-r-[4px] border-black">
        <h3 className="font-[900] text-xl mb-2">مميزات الأونلاين</h3>
        <FeatureCard 
          icon="📹"
          title="حصص مباشرة"
          description="تفاعل حقيقي مع المدرب والزملاء."
        />
        <FeatureCard 
          icon="🤝"
          title="تفاعل ومناقشة"
          description="اعرض شغلك وناقش أفكارك."
        />
        <FeatureCard 
          icon="🛠️"
          title="تطبيق عملي"
          description="مش بس كلام، لكن تطبيق حقيقي."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white p-5 neobrutal-border neobrutal-shadow-sm rounded-[20px]"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-black text-lg mb-1">{title}</h4>
      <p className="text-sm opacity-80 leading-snug">{description}</p>
    </motion.div>
  );
}

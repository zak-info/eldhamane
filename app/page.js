"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Clock, Star, Shield, Users, Award, Heart, Zap } from 'lucide-react';
import Image from 'next/image';

const HajjUmrahLanding = () => {
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            icon: "🌙",
            title: "رحلات العمرة",
            description: "عمرة مقبولة بإذن الله مع برامج متنوعة تناسب جميع الأعمار والاحتياجات بأسعار مناسبة.",
            color: "from-red-600 to-red-800"
        },
        {
            icon: "🏨",
            title: "إقامة فندقية فاخرة",
            description: "إقامة في أفضل الفنادق القريبة من الحرمين الشريفين مع خدمات 5 نجوم وراحة تامة.",
            color: "from-amber-500 to-orange-600"
        },
        {
            icon: "✈️",
            title: "الطيران والنقل",
            description: "رحلات طيران مريحة وآمنة مع خدمات النقل المكيفة من وإلى المطار والأماكن المقدسة.",
            color: "from-yellow-400 to-amber-500"
        },
        {
            icon: "👨‍🏫",
            title: "الإرشاد الديني",
            description: "مرشدين دينيين متخصصين لتعليم مناسك العمرة وتقديم النصائح الروحية.",
            color: "from-red-500 to-red-700"
        },
        {
            icon: "🍽️",
            title: "الإطعام الفاخر",
            description: "وجبات شهية ومتنوعة تناسب جميع الأذواق مع مراعاة النظافة والجودة العالية.",
            color: "from-amber-400 to-yellow-500"
        }
    ];

    const features = [
        { icon: <Star className="w-8 h-8" />, title: "خبرة 12 عام", desc: "خبرة طويلة في تنظيم رحلات العمرة" },
        { icon: <Shield className="w-8 h-8" />, title: "أمان وثقة", desc: "شركة مرخصة ومعتمدة من الجهات الرسمية" },
        { icon: <Award className="w-8 h-8" />, title: "أسعار تنافسية", desc: "أفضل الأسعار مع جودة عالية في الخدمات" },
        { icon: <Users className="w-8 h-8" />, title: "خدمة شخصية", desc: "اهتمام فردي بكل حاج ومعتمر" },
        { icon: <Zap className="w-8 h-8" />, title: "دعم 24/7", desc: "خدمة عملاء متاحة على مدار الساعة" },
        { icon: <Heart className="w-8 h-8" />, title: "رضا العملاء", desc: "آلاف العملاء الراضين عن خدماتنا" }
    ];

    const FloatingParticles = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}
                >
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-40"></div>
                </div>
            ))}
        </div>
    );

    const AnimatedKaaba = () => (
        <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-16 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    {/* <div className="w-96 h-40 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-2xl flex items-center justify-center">
                        <span className="text-6xl">🕋</span>
                    </div> */}
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"> */}
                        <Image src="/images/logo.png" alt="Kaaba" width={1000} height={1000} className='w-96 h-40' />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-x-hidden" dir="rtl">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-reverse space-x-4">
                            <div className="text-2xl">🕋</div>
                            <div className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent">
                                الضمان للسياحة و الاسفار
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-reverse space-x-8">
                            {['الرئيسية', 'خدماتنا', 'مميزاتنا', 'تواصل معنا'].map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${['home', 'services', 'features', 'contact'][index]}`}
                                    className="text-gray-700 hover:text-yellow-600 transition-all duration-300 relative group font-medium"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>

                        <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-6 py-2 rounded-full text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                            احجز الآن
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-amber-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-50/30 via-transparent to-yellow-50/20"></div>
                <FloatingParticles />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center lg:text-right">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-yellow-600 via-amber-700 to-yellow-800 bg-clip-text text-transparent animate-gradient">
                                    رحلة مقدسة
                                </span>
                                <br />
                                <span className="text-gray-800">إلى بيت الله الحرام</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-yellow-700 font-medium">
                                أداء العمرة بأمان وراحة تامة
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                نحن نقدم خدمات العمرة بأعلى معايير الجودة والراحة. رحلتك المقدسة تبدأ معنا بتجربة لا تُنسى مليئة بالطمأنينة والاهتمام بكل التفاصيل المقدسة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-8 py-4 rounded-full text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        🕋 احجز رحلتك الآن
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>

                                <button className="group border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    <span className="flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        تواصل معنا
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <AnimatedKaaba />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-yellow-600" />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-yellow-600 via-amber-700 to-red-700 bg-clip-text text-transparent">
                                خدماتنا المتميزة
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            نقدم مجموعة شاملة من الخدمات لضمان رحلة حج وعمرة مباركة ومريحة
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-6xl mb-6 text-center group-hover:animate-bounce">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 flex justify-center">
                                        <button className={`px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                                            اعرف المزيد
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-yellow-50/30"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-red-700 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                                لماذا تختارنا؟
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            نحن نتميز بالخبرة والمصداقية والالتزام بتقديم أفضل الخدمات
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 hover:border-red-400/50 transition-all duration-500 hover:transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-yellow-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-yellow-700">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent">
                                تواصل معنا
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
                            <h3 className="text-2xl font-bold mb-8 text-yellow-700">معلومات التواصل</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-700">العنوان</h4>
                                        <p className="text-gray-600">حمادي ، بومرداس</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-700">الهاتف</h4>
                                        <p dir='rtl' className="text-gray-600">0550836251</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-700">الهاتف</h4>
                                        <p dir='rtl' className="text-gray-600">0771860242</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-700">البريد الإلكتروني</h4>
                                        <p className="text-gray-600">edamaneomra@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-700">ساعات العمل</h4>
                                        <p className="text-gray-600">السبت - الخميس: 8:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
                            <h3 className="text-2xl font-bold mb-8 text-yellow-700">احجز استشارة مجانية</h3>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-yellow-700 font-semibold mb-2">الاسم الكامل</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                </div>

                                <div>
                                    <label className="block text-yellow-700 font-semibold mb-2">رقم الهاتف</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                                        placeholder="أدخل رقم الهاتف"
                                    />
                                </div>

                                <div>
                                    <label className="block text-yellow-700 font-semibold mb-2">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                                        placeholder="أدخل البريد الإلكتروني"
                                    />
                                </div>

                                <div>
                                    <label className="block text-yellow-700 font-semibold mb-2">نوع الخدمة</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:border-yellow-500 transition-colors">
                                        <option value="">اختر نوع الخدمة</option>
                                        {/* <option value="hajj">الحج</option> */}
                                        <option value="umrah">العمرة</option>
                                        <option value="both">العمرة</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-yellow-700 font-semibold mb-2">رسالتك</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                                        placeholder="اكتب رسالتك هنا..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                                >
                                    إرسال الطلب
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 border-t border-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🕋</div>
                                <h3 className="text-xl font-bold text-yellow-700">مكتب العمرة المبارك</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                نحن نقدم خدمات العمرة بأعلى معايير الجودة والأمان. رحلتك المقدسة تبدأ معنا.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-yellow-700 mb-4">خدماتنا</h3>
                            <ul className="space-y-2 text-gray-600">
                                {/* <li className="hover:text-yellow-600 cursor-pointer transition-colors">رحلات الحج</li> */}
                                <li className="hover:text-yellow-600 cursor-pointer transition-colors">رحلات العمرة</li>
                                <li className="hover:text-yellow-600 cursor-pointer transition-colors">الإقامة الفندقية</li>
                                <li className="hover:text-yellow-600 cursor-pointer transition-colors">الطيران والنقل</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-yellow-700 mb-4">تابعنا</h3>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <span className="text-white font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <span className="text-white font-bold">t</span>
                                </div>
                                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <span className="text-white font-bold">i</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
                        <p>&copy; 2024 الضمان للسياحة و الاسفار. جميع الحقوق محفوظة.</p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default HajjUmrahLanding;
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
            icon: "🕋",
            title: "رحلات الحج",
            description: "نقدم باقات شاملة لأداء فريضة الحج مع إقامة مريحة وخدمات متكاملة لضمان رحلة مباركة ومطمئنة.",
            color: "from-amber-400 to-yellow-600"
        },
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
            description: "مرشدين دينيين متخصصين لتعليم مناسك الحج والعمرة وتقديم النصائح الروحية.",
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
        { icon: <Star className="w-8 h-8" />, title: "خبرة 15 عام", desc: "خبرة طويلة في تنظيم رحلات الحج والعمرة" },
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
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-70"></div>
                </div>
            ))}
        </div>
    );

    const AnimatedKaaba = () => (
        <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-16 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-32 h-32 bg-gray-900 rounded-lg relative shadow-2xl border-4 border-yellow-400 animate-float">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-red-600 rounded-full shadow-lg"></div>
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle"></div>
            <div className="absolute -top-1 -right-3 w-1 h-1 bg-amber-500 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-3 -left-1 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-amber-400 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image src="/images/logo.png" alt="Kaaba" width={1000} height={1000} className='w-96 h-40' />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-x-hidden" dir="rtl">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-yellow-400/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-reverse space-x-4">
                            {/* <div className="text-2xl">🕋</div> */}
                            <Image src="/images/logo.png" alt="Kaaba" width={1000} height={1000} className='w-16 h-16 ' />
                            <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                الضمان للسياحة و الاسفار
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-reverse space-x-8">
                            {['الرئيسية', 'خدماتنا', 'مميزاتنا', 'تواصل معنا'].map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${['home', 'services', 'features', 'contact'][index]}`}
                                    className="text-white hover:text-yellow-400 transition-all duration-300 relative group"
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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-yellow-500/20"></div>
                <FloatingParticles />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center lg:text-right">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-gradient">
                                    رحلة مقدسة
                                </span>
                                <br />
                                <span className="text-white">إلى بيت الله الحرام</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-yellow-400 font-medium">
                                أداء الحج والعمرة بأمان وراحة تامة
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                                نحن نقدم خدمات الحج والعمرة بأعلى معايير الجودة والراحة. رحلتك المقدسة تبدأ معنا بتجربة لا تُنسى مليئة بالطمأنينة والاهتمام بكل التفاصيل المقدسة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-8 py-4 rounded-full text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        🕋 احجز رحلتك الآن
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>

                                <button className="group border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300">
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
                    <ChevronDown className="w-8 h-8 text-yellow-400" />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-red-600 bg-clip-text text-transparent">
                                خدماتنا المتميزة
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            نقدم مجموعة شاملة من الخدمات لضمان رحلة حج وعمرة مباركة ومريحة
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-red-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-6xl mb-6 text-center group-hover:animate-bounce">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 text-center leading-relaxed">
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
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900 to-yellow-900/20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                                لماذا تختارنا؟
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            نحن نتميز بالخبرة والمصداقية والالتزام بتقديم أفضل الخدمات
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-yellow-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm leading-relaxed">
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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                تواصل معنا
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-8 text-yellow-400">معلومات التواصل</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-400">العنوان</h4>
                                        <p className="text-gray-300">  حمادي ، بومرداس</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-400">الهاتف</h4>
                                        <p className="text-gray-300">+213 </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-400">البريد الإلكتروني</h4>
                                        <p className="text-gray-300">edamaneomra@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-400">ساعات العمل</h4>
                                        <p className="text-gray-300">السبت - الخميس: 8:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-8 text-yellow-400">احجز استشارة مجانية</h3>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-yellow-400 font-semibold mb-2">الاسم الكامل</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                </div>

                                <div>
                                    <label className="block text-yellow-400 font-semibold mb-2">رقم الهاتف</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                                        placeholder="أدخل رقم الهاتف"
                                    />
                                </div>

                                <div>
                                    <label className="block text-yellow-400 font-semibold mb-2">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                                        placeholder="أدخل البريد الإلكتروني"
                                    />
                                </div>

                                <div>
                                    <label className="block text-yellow-400 font-semibold mb-2">نوع الخدمة</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 transition-colors">
                                        <option value="">اختر نوع الخدمة</option>
                                        <option value="hajj">الحج</option>
                                        <option value="umrah">العمرة</option>
                                        <option value="both">الحج والعمرة</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-yellow-400 font-semibold mb-2">رسالتك</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
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
            <footer className="bg-gray-900 border-t border-yellow-400/30 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🕋</div>
                                <h3 className="text-xl font-bold text-yellow-400">مكتب الحج والعمرة المبارك</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                نحن نقدم خدمات الحج والعمرة بأعلى معايير الجودة والأمان. رحلتك المقدسة تبدأ معنا.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">خدماتنا</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li className="hover:text-yellow-400 cursor-pointer transition-colors">رحلات الحج</li>
                                <li className="hover:text-yellow-400 cursor-pointer transition-colors">رحلات العمرة</li>
                                <li className="hover:text-yellow-400 cursor-pointer transition-colors">الإقامة الفندقية</li>
                                <li className="hover:text-yellow-400 cursor-pointer transition-colors">الطيران والنقل</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">تابعنا</h3>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <span className="text-white font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <span className="text-white font-bold">t</span>
                                </div>
                                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <span className="text-white font-bold">i</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2024     الضمان للسياحة و الاسفار. جميع الحقوق محفوظة.</p>
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
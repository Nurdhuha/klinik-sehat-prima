"use client";

import { Clock, UserCheck, Building } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteData } from "@/config/site-data";

const iconMap = {
    Clock,
    UserCheck,
    Building,
};

export default function Hero() {
    const handleAppointment = () => {
        const waNumber = siteData.general.whatsappNumbers[0];
        const message = encodeURIComponent(siteData.general.whatsappMessage);
        window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
    };

    const handleContact = () => {
        const waNumber = siteData.general.whatsappNumbers[0];
        window.open(`https://wa.me/${waNumber}`, "_blank");
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-20 w-72 h-72 bg-teal-200 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
                            <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-teal-700">
                                Klinik Kesehatan Terpercaya
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            {siteData.hero.headline.split(" ").slice(0, 2).join(" ")}{" "}
                            <span className="text-teal-gradient">
                                {siteData.hero.headline.split(" ").slice(2).join(" ")}
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            {siteData.hero.subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg" onClick={handleAppointment}>
                                {siteData.hero.ctaPrimary}
                            </Button>
                            <Button variant="outline" size="lg" onClick={handleContact}>
                                {siteData.hero.ctaSecondary}
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 pt-6">
                            {siteData.hero.badges.map((badge, idx) => {
                                const Icon = iconMap[badge.icon as keyof typeof iconMap] || Clock;
                                return (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{badge.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="relative hidden lg:block">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Main Circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20" />
                            <div className="absolute inset-4 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full opacity-30" />
                            <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <UserCheck className="w-12 h-12 text-teal-600" />
                                    </div>
                                    <p className="text-slate-600 font-medium">Dokter Profesional</p>
                                    <p className="text-teal-600 text-2xl font-bold">24/7</p>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-lg">
                                <p className="text-xs text-slate-500">Pasien Puas</p>
                                <p className="text-xl font-bold text-teal-600">98%</p>
                            </div>
                            <div className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-xl shadow-lg">
                                <p className="text-xs text-slate-500">Tahun Pengalaman</p>
                                <p className="text-xl font-bold text-teal-600">15+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

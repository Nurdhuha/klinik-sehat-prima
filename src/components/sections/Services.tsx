"use client";

import { Stethoscope, Baby, FlaskConical, Scan, SmilePlus, Pill } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteData } from "@/config/site-data";

const iconMap = {
    Stethoscope,
    Baby,
    FlaskConical,
    Scan,
    SmilePlus,
    Pill,
};

export default function Services() {
    return (
        <section id="services" className="section-padding bg-white">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Layanan <span className="text-teal-gradient">Unggulan Kami</span>
                    </h2>
                    <p className="text-slate-600">
                        Kami menyediakan berbagai layanan kesehatan komprehensif untuk keluarga Anda
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteData.services.map((service, idx) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap] || Stethoscope;
                        return (
                            <div
                                key={idx}
                                className="group p-6 bg-white border border-slate-100 rounded-2xl card-hover shadow-soft"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                                    <Icon className="w-7 h-7 text-teal-600" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

"use client";

import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteData } from "@/config/site-data";

export default function Testimonials() {
    return (
        <section className="section-padding bg-white">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Apa Kata <span className="text-teal-gradient">Pasien Kami</span>
                    </h2>
                    <p className="text-slate-600">
                        Testimoni dari pasien yang telah mempercayakan kesehatan mereka kepada kami
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {siteData.testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-slate-700 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

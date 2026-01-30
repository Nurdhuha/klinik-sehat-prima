"use client";

import { Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteData } from "@/config/site-data";

export default function Doctors() {
    return (
        <section id="doctors" className="section-padding bg-slate-50">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Tim Dokter <span className="text-teal-gradient">Profesional Kami</span>
                    </h2>
                    <p className="text-slate-600">
                        Dokter berpengalaman siap memberikan pelayanan kesehatan terbaik untuk Anda
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteData.doctors.map((doctor, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-2xl overflow-hidden card-hover shadow-soft"
                        >
                            {/* Doctor Image Placeholder */}
                            <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                                <div className="w-24 h-24 bg-teal-200 rounded-full flex items-center justify-center">
                                    <span className="text-3xl font-bold text-teal-600">
                                        {doctor.name.charAt(4)}
                                    </span>
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                                    {doctor.name}
                                </h3>
                                <p className="text-teal-600 font-medium text-sm mb-2">
                                    {doctor.specialty}
                                </p>
                                <p className="text-slate-500 text-xs mb-4">
                                    {doctor.schedule}
                                </p>

                                {/* Contact Icons */}
                                <div className="flex justify-center gap-3">
                                    <button className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                    <button className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

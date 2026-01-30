"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteData } from "@/config/site-data";

const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleSocialClick = (platform: keyof typeof siteData.social) => {
        const url = siteData.social[platform];
        if (url) window.open(url, "_blank");
    };

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <Container>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <span className="text-xl font-bold">
                                {siteData.general.brandName}
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {siteData.footer.description}
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {Object.entries(siteData.social).map(([platform, url]) => {
                                const Icon = socialIcons[platform as keyof typeof socialIcons];
                                if (!Icon) return null;
                                return (
                                    <button
                                        key={platform}
                                        onClick={() => handleSocialClick(platform as keyof typeof siteData.social)}
                                        className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Navigasi</h4>
                        <div className="flex flex-col gap-2">
                            {siteData.footer.quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Layanan</h4>
                        <div className="flex flex-col gap-2">
                            {siteData.services.slice(0, 5).map((service, idx) => (
                                <Link
                                    key={idx}
                                    href="#services"
                                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                                >
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Hubungi Kami</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-4 h-4 mt-1 text-teal-500 shrink-0" />
                                <span className="text-sm">{siteData.general.address}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                                <span className="text-sm">{siteData.general.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                                <span className="text-sm">{siteData.general.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Clock className="w-4 h-4 text-teal-500 shrink-0" />
                                <span className="text-sm">{siteData.general.operationalHours}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© {currentYear} {siteData.general.brandName}. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}

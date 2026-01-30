"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteData } from "@/config/site-data";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const logoSrc = siteData.general.logo || "/logo.png";

    const handleAppointment = () => {
        const waNumber = siteData.general.whatsappNumbers[0];
        const message = encodeURIComponent(siteData.general.whatsappMessage);
        window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
            <Container>
                <div className="flex h-18 items-center justify-between py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">K</span>
                        </div>
                        <span className="text-xl font-bold text-slate-900">
                            {siteData.general.brandName}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {siteData.navbar.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-600 hover:text-teal-600 font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href={`tel:${siteData.general.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">{siteData.general.phone}</span>
                        </a>
                        <Button variant="primary" size="sm" onClick={handleAppointment}>
                            {siteData.hero.ctaPrimary}
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-100">
                        <div className="flex flex-col gap-2">
                            {siteData.navbar.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <Button variant="primary" className="w-full" onClick={handleAppointment}>
                                    {siteData.hero.ctaPrimary}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
}

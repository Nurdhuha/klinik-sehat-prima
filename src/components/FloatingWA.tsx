"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

interface FloatingWAProps {
    whatsappNumbers: string[];
    message?: string;
    features?: {
        enableFloatingWA?: boolean;
        waRotator?: boolean;
    };
}

export default function FloatingWA({
    whatsappNumbers,
    message = "Halo, saya ingin konsultasi.",
    features = { enableFloatingWA: true, waRotator: false },
}: FloatingWAProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000);
            const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
            return () => {
                clearTimeout(tooltipTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [isVisible]);

    if (!features.enableFloatingWA || whatsappNumbers.length === 0) return null;

    const getWhatsAppNumber = () => {
        if (features.waRotator && whatsappNumbers.length > 1) {
            const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
            return whatsappNumbers[randomIndex];
        }
        return whatsappNumbers[0];
    };

    const handleClick = () => {
        const number = getWhatsAppNumber();
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${number}?text=${encodedMessage}`, "_blank");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Tooltip */}
            {showTooltip && (
                <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
                    <div className="relative bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200"
                        >
                            <X className="w-3 h-3" />
                        </button>
                        <p className="text-sm text-slate-700">
                            Butuh bantuan? Chat dengan kami sekarang! 👋
                        </p>
                        <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-slate-100" />
                    </div>
                </div>
            )}

            {/* WhatsApp Button */}
            <button
                onClick={handleClick}
                className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                aria-label="Chat via WhatsApp"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </button>
        </div>
    );
}

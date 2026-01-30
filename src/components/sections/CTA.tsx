"use client";

import { MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteData } from "@/config/site-data";

export default function CTA() {
    const handleWhatsApp = () => {
        const waNumber = siteData.general.whatsappNumbers[0];
        const message = encodeURIComponent(siteData.general.whatsappMessage);
        window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
    };

    const handleCall = () => {
        window.location.href = `tel:${siteData.general.phone}`;
    };

    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-teal-600 to-teal-700">
            <Container>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {siteData.cta.headline}
                    </h2>
                    <p className="text-teal-100 mb-8 text-lg">
                        {siteData.cta.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="!bg-white !text-teal-700 hover:!bg-teal-50 w-full sm:w-auto"
                            onClick={handleWhatsApp}
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {siteData.cta.ctaWhatsApp}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="!border-white !text-white hover:!bg-white/10 w-full sm:w-auto"
                            onClick={handleCall}
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            {siteData.cta.ctaPhone}
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-teal-100">
                        <p>{siteData.general.address}</p>
                        <span className="hidden sm:block">•</span>
                        <p>{siteData.general.operationalHours}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

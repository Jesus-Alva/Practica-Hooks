'use client';
import Image from "next/image";
import UseStateHook from "../../components/features/dashboard/UseStateHook";

import { ROUTES_IMAGES } from "../constants/routes";
import NavbarComponent from "../../components/layouts/navbarComponent";
import { useTranslation } from "../../lib/hooks/useTranslation";

const Page: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <NavbarComponent />

            {/* <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-4 top-0 left-0 w-full h-full z-0">
                    <Image
                        src={ROUTES_IMAGES.dashboard}
                        alt="Programming background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                        {t('dashboardTitle')}
                    </h2>
                    <p className="text-2xl md:text-4xl font-light mb-12 drop-shadow-lg">
                        {t('dashboardSubtitle')}
                    </p>


                </div>
            </section> */}

            <section className="container mx-auto px-4 py-16 text-center">
                <UseStateHook></UseStateHook>
            </section>
            
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-300">
                        {t('footer_line1')}
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        {t('footer_line2')}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Page;
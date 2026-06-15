'use client';
import Image from "next/image";
import UseStateHook from "../../components/features/dashboard/UseStateHook";

import { ROUTES_IMAGES } from "../constants/routes";
import NavbarComponent from "../../components/layouts/navbarComponent";
import { useTranslation } from "../../lib/hooks/useTranslation";

const Page: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

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
'use client';
import Image from "next/image";
import UseStateHook from "../../components/features/dashboard/UseStateHook";

import { dashboard } from "../../types/dashboard";

import { ROUTES_IMAGES } from "../constants/routes";
import NavbarComponent from "../../components/layouts/navbarComponent";
import { useTranslation } from "../../lib/hooks/useTranslation";

const Page: React.FC = () => {
    const { t } = useTranslation();

    const dataDashboard = t('dashboard', { returnObjects: true }) as dashboard;

    const title = dataDashboard.init.title.split(':')

    return (
        <div className="min-h-screen bg-[#0a0e14] font-mono text-[#c8d3e0] selection:bg-emerald-400/20">

            {/* Hero */}
            <section className="container mx-auto px-4 pt-24 pb-20 text-center">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-[#1e2530] bg-[#0f1419] text-xs text-[#5f6b7a]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    react-hooks-guide
                </div>

                <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#5f6b7a]">
                        {title[0]}:
                    </h1>
                    <h1 className="text-4xl md:text-5xl uppercase tracking-tight font-extrabold text-emerald-400">
                        {title[1]}
                        <span className="inline-block w-[0.5ch] ml-1 bg-emerald-400 animate-[blink_1s_steps(1)_infinite]">&nbsp;</span>
                    </h1>
                </div>

                <p className="mt-6 max-w-xl mx-auto text-[#8b97a8] text-sm leading-relaxed">
                    {dataDashboard.init.description}
                </p>
            </section>

            <div className="container mx-auto px-4 flex flex-col gap-6 pb-20">

                {/* Hooks */}
                <section className="rounded-lg border border-[#1e2530] bg-[#0f1419] overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1e2530] bg-[#0c1015]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                        <span className="ml-3 text-xs text-[#5f6b7a]">~/hooks.ts</span>
                    </div>
                    <div className="px-5 py-5">
                        <h2 className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-3">
                            <span className="text-[#5f6b7a]">$</span> {dataDashboard.hooks.title}
                        </h2>
                        <div className="space-y-1.5 text-sm text-[#a9b4c2] pl-4 border-l border-[#1e2530]">
                            {dataDashboard.hooks.description.map((item, index) => (
                                <p key={index} className="leading-relaxed">
                                    <span className="text-[#3d4756] select-none"> </span>{item}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Levels */}
                <section className="rounded-lg border border-[#1e2530] bg-[#0f1419] overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1e2530] bg-[#0c1015]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                        <span className="ml-3 text-xs text-[#5f6b7a]">~/levels.ts</span>
                    </div>
                    <div className="px-5 py-5">
                        <h2 className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-2">
                            <span className="text-[#5f6b7a]">$</span> {dataDashboard.levels.title}
                        </h2>
                        <p className="text-sm text-[#8b97a8] mb-4 pl-4">
                            {dataDashboard.levels.description}
                        </p>
                        <div className="flex flex-col gap-2">
                            {dataDashboard.levels.level.map((item, index) => (
                                <div key={index} className="flex items-baseline gap-3 rounded-md bg-[#0c1015] border border-[#1e2530] px-4 py-3">
                                    <span className="text-[#3d4756] text-xs select-none w-5 text-right shrink-0">{String(index + 1).padStart(2, '0')}</span>
                                    <h3 className="font-bold text-pink-400 text-sm shrink-0">{item.type}</h3>
                                    <span className="text-[#a9b4c2] text-sm">{item.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Practice */}
                <section className="rounded-lg border border-[#1e2530] bg-[#0f1419] overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1e2530] bg-[#0c1015]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                        <span className="ml-3 text-xs text-[#5f6b7a]">~/practice.ts</span>
                    </div>
                    <div className="px-5 py-5">
                        <h2 className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-4">
                            <span className="text-[#5f6b7a]">$</span> {dataDashboard.practice.title}
                        </h2>
                        <div className="flex flex-col gap-3">
                            {dataDashboard.practice.hooksList.map((item, index) => (
                                <div key={index} className="rounded-md bg-[#0c1015] border border-[#1e2530] px-4 py-3">
                                    <h3 className="font-bold text-pink-400 text-sm mb-1.5">{item.type}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.typeList.map((entry, i) => (
                                            <span key={i} className="text-xs text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded px-2 py-1">
                                                {entry}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Rules */}
                <section className="rounded-lg border border-[#1e2530] bg-[#0f1419] overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1e2530] bg-[#0c1015]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                        <span className="ml-3 text-xs text-[#5f6b7a]">~/rules.ts</span>
                    </div>
                    <div className="px-5 py-5">
                        <h2 className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-2">
                            <span className="text-[#5f6b7a]">$</span> {dataDashboard.rules.title}
                        </h2>
                        <p className="text-sm text-[#8b97a8] mb-4 pl-4">
                            {dataDashboard.rules.description}
                        </p>
                        <ul className="flex flex-col gap-2">
                            {dataDashboard.rules.rule.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-[#a9b4c2]">
                                    <span className="text-emerald-400 mt-0.5">{'>'}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <footer className="border-t border-[#1e2530] bg-[#0c1015] py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-[#8b97a8] text-sm">
                        {t('footer_line1')}
                    </p>
                    <p className="text-[#3d4756] text-xs mt-2">
                        {t('footer_line2')}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Page;

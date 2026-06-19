// TerminalBlock.tsx
import React from 'react';

interface ComponentProps {
    /** Título que aparecerá con el símbolo `$` */
    title: string;
    /** Contenido HTML que se mostrará dentro del bloque con borde izquierdo */
    children: React.ReactNode;
    /** Nombre del archivo que aparece en la barra superior (opcional) */
    fileName?: string;
    /** Clases CSS adicionales para el contenedor exterior */
    className?: string;
}

export const CodeText: React.FC<ComponentProps> = ({
    title,
    children,
    fileName = '~/hooks.ts',
    className = '',
}) => {
    return (
        <section
            className={`rounded-lg border border-[#1e2530] bg-[#0f1419] overflow-hidden ${className}`}
        >
            
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1e2530] bg-[#0c1015]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs text-[#5f6b7a]">{fileName}</span>
            </div>

            <div className="px-5 py-5">
                <h2 className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-3">
                    <span className="text-[#5f6b7a]">$</span> {title}
                </h2>

                <div className="space-y-1.5 text-sm text-[#a9b4c2] pl-4 border-l border-[#1e2530]">
                    {children}
                </div>
            </div>
        </section>
    );
};
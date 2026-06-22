"use client";

interface ComponentProps {
     title: string;
}

const MiddleTitle: React.FC<ComponentProps> = ({title}) => {
    return (
        <div className="text-3xl md:text-xl font-bold bg-linear-to-r from-orange-600 via-yellow-500 to-orange-200 bg-clip-text text-transparent mb-4">
            {title}
        </div>
    )
}

export default MiddleTitle;
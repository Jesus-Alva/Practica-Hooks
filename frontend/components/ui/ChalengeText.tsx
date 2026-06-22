"use client";

interface ComponentProps {
    chalenge: string;
}

const ChalengeText: React.FC<ComponentProps> = ({chalenge}) => {
    return (
        <span className="text-lg font-normal text-gray-500 mb-4">
            {chalenge}
        </span>
    )
}

export default ChalengeText;
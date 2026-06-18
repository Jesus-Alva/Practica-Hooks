"use client";

import TaskList from "../../../components/features/UseState/easy/TaskList";

const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-16 text-center">
                <TaskList />
            </div>
        </div>
    );
}

export default Page;
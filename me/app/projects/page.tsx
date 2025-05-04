import BaseLayout from "../components/BaseLayout/BaseLayout";
import Threads from "../components/Threads/Threads";

export default function Project() {
    return (
        <div className="bg-[#001F54] min-h-screen">
            <BaseLayout>
                <div className="ml-30 w-[calc(130%-20rem)] h-full relative">
                    <div className="text-white">
                        Projects
                    </div>
                </div>
            </BaseLayout>
        </div>
    );
}

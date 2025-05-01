import BaseLayout from "../components/BaseLayout/BaseLayout";
import Threads from "../components/Threads/Threads";

export default function Skill() {
    return (
        <div className="bg-[#001F54] min-h-screen">
            <BaseLayout>
                <div className="ml-30 w-[calc(130%-20rem)] h-full relative">
                    <div className="text-white">
                        Skills
                    </div>
                    <Threads
                        amplitude={1}
                        distance={0}
                        enableMouseInteraction={true}
                    />
                </div>
            </BaseLayout>
        </div>
    );
}

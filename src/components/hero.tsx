import BorderMagicButton from "./ui/border-magic-button";
import { HeroHighlight } from "./ui/hero-highlight";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Hero() {
    return (
        <HeroHighlight>
            <div className="pb-20 pt-36">
                <div>
                    <Spotlight
                        className="-left-40 top-16 h-screen"
                        fill="blue"
                    />
                    <Spotlight
                        className="-left-16 top-16 h-[80vh] w-[50vw]"
                        fill="blue"
                    />
                    <Spotlight
                        className="left-30 top-10 h-[80vh] w-[50vw]"
                        fill="purple"
                    />
                    <Spotlight
                        className="-right-full top-28 h-[80vh] w-[50vw]"
                        fill="white"
                    />
                </div>

                <div className="relative z-10 my-20 flex justify-center">
                    <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
                        <h2 className="max-w-96 text-center text-xs uppercase tracking-widest text-blue-100 opacity-40">
                            I don&apos;t make spelling mistakes. <br /> But when
                            I do, it&apos;s probably intentional.
                        </h2>

                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words="Bringing ideas to life, one line of code at a time."
                        />
                        <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
                            Hi, I&apos;m Pushan and I like to{" "}
                            <span className="italic">buidl</span> stuff.
                        </p>
                        <BorderMagicButton
                            icon={<FaArrowUpRightFromSquare />}
                            text="Check out my work"
                            position={"right"}
                        />
                    </div>
                </div>
            </div>
        </HeroHighlight>
    );
}

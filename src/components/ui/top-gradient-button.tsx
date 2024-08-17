import { cn } from "@/lib/utils";

export default function TopGradientButton({ text }: { text: string }) {
    return (
        <button className="relative rounded-full border border-slate-600 px-8 py-2 text-sm text-white transition duration-200 hover:shadow-2xl hover:shadow-white/[0.1]">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-2xl" />
            <span className="relative z-20">{text}</span>
        </button>
    );
}

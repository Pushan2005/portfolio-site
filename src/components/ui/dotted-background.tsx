export default function DottedBackground() {
    return (
        <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white opacity-30 bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[1]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        </div>
    );
}

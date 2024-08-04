export const Title = ({ text }: { text: string }) => {
    return (
        <div class="relative">
            <div class="absolute h-[5px] bg-primary w-full -top-[15px]" />

            <h2 class="uppercase tracking-widest text-neutral text-3xl">
                {text}
            </h2>
        </div>
    );
};

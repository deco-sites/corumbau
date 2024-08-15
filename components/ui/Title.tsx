export const Title = ({ text }: { text: string }) => {
    return (
        <div class="relative">
            <div class="absolute h-[5px] bg-primary w-full -top-[15px]" />

            <h3
                dangerouslySetInnerHTML={{ __html: text }}
                class="uppercase tracking-widest text-neutral font-light"
            />
        </div>
    );
};

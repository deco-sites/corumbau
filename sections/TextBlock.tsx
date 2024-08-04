export interface Props {
    /** @format rich-text */
    text: string;
}

export default function TextBlock({ text }: Props) {
    return (
        <div class="w-full flex justify-center pt-10">
            <div class="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[70%]">
                <div
                    dangerouslySetInnerHTML={{ __html: text }}
                    class="font-light"
                />
            </div>
        </div>
    );
}

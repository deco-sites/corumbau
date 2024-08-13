import { LoadingFallbackProps } from "deco/mod.ts";

export interface Props {
    /**
     * @title Texto
     * @format rich-text
     */
    text: string;
}

export default function TextBlock({ text }: Props) {
    return (
        <div class="w-full flex justify-center pt-10 fade-in-down">
            <div class="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[70%]">
                <div
                    dangerouslySetInnerHTML={{ __html: text }}
                    class="reset_styles font-thin"
                />
            </div>
        </div>
    );
}

export const LoadingFallback = (
    { text }: LoadingFallbackProps<Props>,
) => (
    <div class="w-full flex justify-center pt-10 fade-in-down">
        <div class="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[70%]">
            <div
                dangerouslySetInnerHTML={{ __html: text || "" }}
                class="invisible"
            />
        </div>
    </div>
);

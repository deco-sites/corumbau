import { ImageWidget } from "apps/admin/widgets.ts";
import { Title } from "site/components/ui/Title.tsx";
import { CommonButton } from "site/components/ui/Button.tsx";

export interface Props {
    /**
     * @title Titulo
     */
    title: string;
    /**
     * @title Imagem de Fundo
     */
    image: ImageWidget;
    /**
     * @title Texto principal
     * @format rich-text
     */
    ctaText: string;
    /**
     * @title Texto do botão
     */
    buttonText: string;
    /**
     * @title URL do botão
     */
    href: string;
}

export default function CtaBanner(
    { buttonText, ctaText, href, image, title }: Props,
) {
    return (
        <div class="w-screen pt-10 flex flex-col items-center gap-5 fade-in-down">
            <Title text={title} />
            <div
                style={{ backgroundImage: `url(${image})` }}
                class={`w-full h-[50vh] md:h-[80vh] lg:h-[70vh] bg-cover flex items-center justify-center bg-center`}
            >
                <div class="flex flex-col items-center gap-8">
                    <div
                        dangerouslySetInnerHTML={{ __html: ctaText }}
                        class="text-center text-white text-3xl md:text-4xl font-extralight"
                    />
                    <CommonButton
                        href={href}
                        text={buttonText}
                        className="!text-base"
                    />
                </div>
            </div>
        </div>
    );
}

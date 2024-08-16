import { ImageWidget } from "apps/admin/widgets.ts";
import { Title } from "site/components/ui/Title.tsx";
import { CommonButton } from "site/components/ui/Button.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    /**
     * @title Titulo
     * @format rich-text
     */
    title: string;
    /**
     * @title Imagem de Fundo
     */
    image: ImageWidget;
    /**
     * @title Texto principal
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

const DEFAULT_PROPS: Props = {
    title: "Bem-vindo ao nosso site!",
    image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
    ctaText:
        "Descubra mais sobre nossos produtos e serviços. Aproveite as ofertas especiais e novidades exclusivas.",
    buttonText: "Saiba mais",
    href: "/sobre-nos",
};

export default function CtaBanner(
    props: Props,
) {
    const { buttonText, ctaText, href, image, title } = {
        ...DEFAULT_PROPS,
        ...props,
    };

    return (
        <div class="pt-10 flex flex-col items-center gap-5 fade-in-down">
            <Title text={title} />
            <div
                class={`relative w-full h-[50vh] md:h-[80vh] lg:h-[70vh] flex items-center justify-center`}
            >
                <Image
                    src={image}
                    alt={image}
                    class="w-full h-full object-cover"
                    width={1440}
                    height={618}
                    preload
                    loading="lazy"
                    fetchPriority="high"
                />
                <div class="flex flex-col items-center gap-8 absolute m-auto">
                    <p class="text-center text-white text-3xl md:text-[40px] font-extralight">
                        {ctaText}
                    </p>
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

export const LoadingFallback = () => {
    return (
        <div
            class={`relative w-full h-[50vh] md:h-[80vh] lg:h-[70vh]`}
        >
        </div>
    );
};

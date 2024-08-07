import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Title } from "site/components/ui/Title.tsx";

/** @titleBy alt */
interface ImageItem {
    /**
     * @title Imagem
     */
    image: ImageWidget;
    /**
     * @title Legenda da imagem
     * @description Atenção! Adicionar estilos no editor pode sobrescrever a estilização padrão do texto
     * @format rich-text
     */
    label: string;
    /**
     * @title URL
     * @description Link para onde o botão irá redirecionar. Se o objetivo for navegar no próprio site passar /caminho-da-pagina
     */
    href: string;
    alt: string;
}

export interface Props {
    title?: string;
    images: ImageItem[];
}

export default function Gallery({ images, title }: Props) {
    return (
        <div class="w-full flex flex-col items-center gap-6 justify-center  pt-10">
            {title && (
                <div class="fade-in-down">
                    <Title text={title} />
                </div>
            )}
            <div class="w-full max-w-[85%] flex flex-col lg:grid lg:grid-cols-3 gap-5 fade-in-down">
                {images.map((image) => (
                    <div class="group relative overflow-hidden lg:h-[70vh] max-w-fit">
                        <a
                            href={image.href}
                            class="w-full lg:w-auto lg:h-full"
                        >
                            <Image
                                src={image.image || ""}
                                alt={image.alt || ""}
                                width={518}
                                height={660}
                                class="hidden lg:block group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover"
                            />
                            <Image
                                src={image.image || ""}
                                alt={image.alt || ""}
                                width={806}
                                height={660}
                                class="group-hover:scale-110 transition-transform duration-500 w-full lg:hidden object-cover"
                            />
                        </a>
                        <div
                            class="bg-inverted-gradient-wider absolute bottom-0 left-0 text-white text-3xl w-full p-5 !tracking-[1.75px] leading-normal font-extralight"
                            dangerouslySetInnerHTML={{ __html: image.label }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

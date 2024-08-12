import { useId } from "site/sdk/useId.ts";
import Slider from "site/components/ui/Slider.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Title } from "site/components/ui/Title.tsx";

export interface Image {
    /**
     * @title Imagem
     */
    src: ImageWidget;
    alt: string;
    /**
     * @title URL
     * @description URL para qual o card deve redirecionar ao click. Caso passe apenas /nome-da-página o usuário será redirecionado no próprio site, caso passe todo o link com http, será aberta uma nova aba
     */
    href: string;
}

export interface Layout {
    /**
     * @title Numero de imagens no Mobile (Telas até 768px)
     * @description Se nenhum valor for passado o valor default é 1 imagem
     */
    mobile?: 1 | 2;
    /**
     * @title Numero de imagens no Desktop (Telas a partir de 768px)
     * @description Se nenhum valor for passado o valor default são 3 imagens
     */
    desktop?: 1 | 2 | 3 | 4 | 5;
}

export interface Props {
    /**
     * @title Imagens
     */
    slides: Image[];
    /**
     * @title Titulo
     */
    title?: string;
    /**
     * @title Intervalo do autoplay
     * @description tempo (em segundos) para a passagem automática de testemunho. Se nada for passado, a passagem será apenas pelos controladores (dots e setas)
     */
    interval?: number;
    /**
     * @title Opções de layout
     */
    layout?: {
        /**
         * @title numero de imagens no slide
         */
        numberOfSliders?: Layout;
    };
}

const DEFAULT_PROPS: Props = {
    slides: [
        {
            src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
            alt: "Imagem 1",
            href: "/pagina-imagem-1",
        },
        {
            src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
            alt: "Imagem 2",
            href: "/pagina-imagem-2",
        },
        {
            src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
            alt: "Imagem 3",
            href: "/pagina-imagem-3",
        },
    ],
};

function ProductShelf(props: Props) {
    const id = useId();
    const {
        slides,
        title,
        interval,
        layout,
    } = { ...DEFAULT_PROPS, ...props };

    if (!slides || slides.length === 0) {
        return null;
    }
    const slideDesktop = {
        1: "md:w-[90%]",
        2: "md:w-[48%]",
        3: "md:w-[32%]",
        4: "md:w-[24%]",
        5: "md:w-[18%]",
    };

    const slideMobile = {
        1: "w-[90%]",
        2: "w-[48%]",
    };
    return (
        <div class="w-full flex flex-col gap-4 items-center justify-center pt-10 fade-in-down">
            {title && <Title text={title} />}
            <div class="relative w-[90%] xl:w-[85%]">
                <div
                    id={id}
                    class={`grid grid-cols-[48px_1fr_48px] px-0 md:px-5 container`}
                >
                    <div class="flex items-center justify-center z-10 absolute left-0 top-1/2 group">
                        <Slider.PrevButton class="flex items-center justify-center p-4 group-hover:-translate-x-1 transition-all duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 11.08 20.17"
                                class="w-[16px] h-[30px] text-white"
                            >
                                <defs>
                                    <style></style>
                                </defs>
                                <title>prev</title>
                                <g id="Camada_2" data-name="Camada 2">
                                    <g
                                        id="Layer_2_copy_10"
                                        data-name="Layer 2 copy 10"
                                    >
                                        <path
                                            fill="#9EC537"
                                            class="cls-1"
                                            d="M6.67,20.17l4.41-2.91L6.47,10.11l4.61-7.2L6.67,0,0,10.11Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </Slider.PrevButton>
                    </div>
                    <Slider
                        class="carousel carousel-center w-full col-span-full row-span-full"
                        rootId={id}
                        interval={interval && interval * 1e3}
                        infinite
                    >
                        {slides?.map((slide, index) => (
                            <Slider.Item
                                index={index}
                                class={`carousel-item ${
                                    slideDesktop[
                                        layout?.numberOfSliders?.desktop ?? 3
                                    ]
                                } ${
                                    slideMobile[
                                        layout?.numberOfSliders?.mobile ?? 1
                                    ]
                                }`}
                            >
                                <a
                                    href={slide.href}
                                    target={slide?.href.includes("http")
                                        ? "_blank"
                                        : "_self"}
                                    rel="noopener"
                                    class="group overflow-hidden"
                                >
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        width={287}
                                        height={387}
                                        class="w-[90%] group-hover:scale-110 transition-transform duration-500"
                                    />
                                </a>
                            </Slider.Item>
                        ))}
                    </Slider>
                    <div class="flex items-center justify-center z-10 absolute right-0 top-1/2 group">
                        <Slider.NextButton class="flex items-center justify-center p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 11.08 20.17"
                                class="w-[16px] h-[30px] text-white group-hover:translate-x-1 transition-all duration-300"
                            >
                                <defs>
                                    <style></style>
                                </defs>
                                <title>next</title>
                                <g id="Camada_2" data-name="Camada 2">
                                    <g
                                        id="Layer_2_copy_10"
                                        data-name="Layer 2 copy 10"
                                    >
                                        <path
                                            fill="#9EC537"
                                            class="cls-1"
                                            d="M4.41,0,0,2.91l4.61,7.16L0,17.26l4.41,2.91,6.67-10.1Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </Slider.NextButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductShelf;

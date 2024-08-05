import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy alt
 */
export interface Image {
    src: ImageWidget;
    alt: string;
}

export interface Props {
    /**
     * @title Imagens
     */
    slides: Image[];
    /**
     * @title Intervalo do autoplay
     * @description tempo (em segundos) para a passagem automática de testemunho. Se nada for passado, a passagem será apenas pelos controladores (dots e setas)
     */
    interval?: number;
}

const DEFAULT_PROPS = {
    title: "This is where you'll put your customer testimonials",
    slides: [
        {
            content: {
                description:
                    "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
                avatar:
                    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
                alt: "Avatar",
                name: "Name Surname",
                position: "Position, Company name",
            },
        },
        {
            content: {
                description:
                    "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
                avatar:
                    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
                alt: "Avatar",
                name: "Name Surname",
                position: "Position, Company name",
            },
        },
        {
            content: {
                description:
                    "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
                avatar:
                    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
                alt: "Avatar",
                name: "Name Surname",
                position: "Position, Company name",
            },
        },
        {
            content: {
                description:
                    "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
                avatar:
                    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
                alt: "Avatar",
                name: "Name Surname",
                position: "Position, Company name",
            },
        },
        {
            content: {
                description:
                    "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
                avatar:
                    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
                alt: "Avatar",
                name: "Name Surname",
                position: "Position, Company name",
            },
        },
    ],
};

function SliderItem(
    { slide, id }: { slide: Image; id: string },
) {
    const {
        src,
        alt,
    } = slide;

    return (
        <div
            id={id}
            class="w-full flex justify-center h-[80vh]"
        >
            <Image
                src={src}
                alt={alt}
                width={1619}
                height={733}
                preload
                loading="eager"
                fetchPriority="high"
                class="object-cover"
            />
        </div>
    );
}

function Dots({ slides }: Props) {
    return (
        <>
            <ul class="carousel col-span-full gap-[10px] z-10">
                {slides?.map((_, index) => (
                    <li class="carousel-item">
                        <Slider.Dot index={index}>
                            <div class="py-5">
                                <div class="w-3 h-3 rounded-full dot bg-neutral group-disabled:bg-white" />
                            </div>
                        </Slider.Dot>
                    </li>
                ))}
            </ul>
        </>
    );
}

function Carousel(props: Props) {
    const id = useId();
    const { slides, interval } = { ...DEFAULT_PROPS, ...props };

    return (
        <div
            id={id}
            class="w-full flex justify-center pt-10 fade-in-down"
        >
            <div class="relative w-[90%] xl:w-[85%]">
                <div class="flex items-center justify-center z-10 absolute left-0 top-1/2">
                    <Slider.PrevButton class="flex items-center justify-center p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 11.08 20.17"
                            class="w-[10px] h-[25px] text-white"
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
                                        fill="white"
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
                            class="carousel-item w-full flex-grow"
                        >
                            <SliderItem
                                slide={slide}
                                id={`${id}::${index}`}
                            />
                        </Slider.Item>
                    ))}
                </Slider>
                <div class="flex items-center justify-center z-10 absolute right-0 top-1/2">
                    <Slider.NextButton class="flex items-center justify-center p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 11.08 20.17"
                            class="w-[10px] h-[25px] text-white"
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
                                        fill="white"
                                        class="cls-1"
                                        d="M4.41,0,0,2.91l4.61,7.16L0,17.26l4.41,2.91,6.67-10.1Z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </Slider.NextButton>
                </div>
                <div class="w-full flex justify-center absolute bottom-4">
                    <Dots slides={slides} interval={interval} />
                </div>
            </div>
        </div>
    );
}

export default Carousel;

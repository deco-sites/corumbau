import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Title } from "site/components/ui/Title.tsx";

/** @titleBy alt */
interface ImageItem {
    image: ImageWidget;
    /** @format rich-text */
    label: string;
    href: string;
    alt: string;
}

export interface Props {
    title?: string;
    images: ImageItem[];
}

export default function Gallery({ images, title }: Props) {
    return (
        <div class="w-full flex flex-col items-center gap-6 justify-center fade-in-down pt-10">
            {title && <Title text={title} />}
            <div class="w-full max-w-[85%] flex flex-col lg:grid lg:grid-cols-3 gap-5">
                {images.map((image) => (
                    <div class="group relative overflow-hidden lg:h-[70vh]">
                        <a href={image.href} class="w-full lg:w-auto lg:h-full">
                            <Image
                                src={image.image || ""}
                                alt={image.alt || ""}
                                width={518}
                                height={660}
                                class="hidden lg:block group-hover:scale-110 transition-transform duration-500 h-full"
                            />
                            <Image
                                src={image.image || ""}
                                alt={image.alt || ""}
                                width={806}
                                height={660}
                                class="group-hover:scale-110 transition-transform duration-500 w-full lg:hidden"
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

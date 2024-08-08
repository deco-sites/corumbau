import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    /**
     * @title Imagem
     */
    src: ImageWidget;
    alt: string;
    /**
     * @title Texto principal
     * @format rich-text
     */
    description: string;
}

export default function ({ alt, description, src }: Props) {
    return (
        <div class="w-full flex justify-center pt-10 fade-in-down relative">
            <div class="w-[90%] xl:w-[85%] mx-auto">
                <div class="relative h-[50vh]">
                    <div class="max-fit h-full lg-h-auto">
                        <Image
                            src={src}
                            alt={alt}
                            width={1026}
                            height={377}
                            class="w-full max-w-[1000px] h-full object-cover"
                        />
                    </div>
                    <div
                        class="absolute bottom-0 left-0 p-[30px] !font-light bg-inverted-gradient-wider w-full max-w-[1000px]"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
            </div>
        </div>
    );
}

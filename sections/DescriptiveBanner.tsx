import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Placeholder } from "site/components/ui/SectionPlaceholder.tsx";

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

const DEFAULT_PROPS: Props = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
    alt: "Descrição da imagem",
    description:
        "<p>Esta é uma <strong>descrição detalhada</strong> da imagem, fornecendo informações adicionais sobre o conteúdo e o contexto visual apresentado. <a href='https://example.com'>Saiba mais</a>.</p>",
};

export default function (props: Props) {
    const { alt, description, src } = { ...DEFAULT_PROPS, ...props };

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
                        class="absolute bottom-0 left-0 p-[30px] font-extralight bg-inverted-gradient-wider w-full max-w-[1000px]"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
            </div>
        </div>
    );
}

export const LoadingFallback = () => <Placeholder height="50vh" />;
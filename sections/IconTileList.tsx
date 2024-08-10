import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Title } from "site/components/ui/Title.tsx";

/**
 * @titleBy alt
 */
interface ListItem {
    /**
     * @title Ícone
     */
    icon: ImageWidget;
    alt: string;
    /**
     * @title Título
     */
    title: string;
    /**
     * @format rich-text
     * @title Descrição
     */
    description: string;
}

export interface Props {
    /**
     * @title Titulo da seção
     */
    title?: string;
    /**
     * @title Itens
     */
    itens?: ListItem[];
}

const DEFAULT_PROPS: Props = {
    itens: [
        {
            icon:
                "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
            alt: "Ícone 1",
            title: "Título do Item 1",
            description:
                "<p><strong>Item 1:</strong> Esta é a descrição do primeiro item. Pode incluir <em>estilos</em> e <a href='https://example.com'>links</a> para mais informações.</p>",
        },
        {
            icon:
                "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
            alt: "Ícone 2",
            title: "Título do Item 2",
            description:
                "<p><strong>Item 2:</strong> Esta é a descrição do segundo item. Pode incluir <em>estilos</em> e <a href='https://example.com'>links</a> para mais informações.</p>",
        },
        {
            icon:
                "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
            alt: "Ícone 3",
            title: "Título do Item 3",
            description:
                "<p><strong>Item 3:</strong> Esta é a descrição do terceiro item. Pode incluir <em>estilos</em> e <a href='https://example.com'>links</a> para mais informações.</p>",
        },
    ],
};

export default function IconTileList(props: Props) {
    const { itens, title } = { ...DEFAULT_PROPS, ...props };

    return (
        <div class="w-full flex flex-col items-center pt-10 gap-4 fade-in-down">
            {title && (
                <div class="w-[90%] xl:w-[85%] flex justify-start">
                    <Title text={title} />
                </div>
            )}
            <div class="w-[90%] xl:w-[85%] flex justify-start">
                <ul class="flex flex-col gap-2">
                    {itens?.map((item) => (
                        <li>
                            <div class="flex items-center gap-2">
                                <div class="bg-primary rounded-full p-2 flex items-center justify-center">
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                        width={32}
                                        height={32}
                                        class="w-7 h-7"
                                    />
                                </div>
                                <h4 class="text-neutral font-medium text-xl">
                                    {item.title}
                                </h4>
                            </div>
                            <div
                                class="reset_styles text-neutral ml-8"
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

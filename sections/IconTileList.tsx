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

export default function IconTileList({ itens, title }: Props) {
    return (
        <div class="w-full flex justify-center pt-10 fade-in-down">
            {title && <Title text={title} />}
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

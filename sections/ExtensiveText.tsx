export interface Props {
    /**
     * @format rich-text
     * @title Conteúdo
     */
    content: string;
}

export default function ExtensiveText({ content }: Props) {
    return (
        <div
            class="p-[5%] reset_styles"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}

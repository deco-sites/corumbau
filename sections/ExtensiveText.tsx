export interface Props {
    /**
     * @format rich-text
     * @title Conteúdo
     */
    content: string;
}

const DEFAULT_PROPS: Props = {
    content:
        "<h1>Bem-vindo!</h1><p>Este é um exemplo de <strong>conteúdo em rich-text</strong>. Você pode usar <em>itálico</em>, <strong>negrito</strong>, e até mesmo <a href='https://example.com'>links</a> para enriquecer o texto.</p>",
};

export default function ExtensiveText(props: Props) {
    const { content } = { ...DEFAULT_PROPS, ...props };

    return (
        <div
            class="p-[5%] reset_styles"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}

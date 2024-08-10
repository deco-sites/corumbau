export interface Props {
    /** @format rich-text */
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

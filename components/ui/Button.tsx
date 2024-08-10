interface CommonButtonProps {
    id?: string;
    href: string;
    text: string;
    className?: string;
}

export const CommonButton = (
    { id, href, text, className }: CommonButtonProps,
) => {
    return (
        <a
            key={id}
            id={id}
            href={href ?? "#"}
            target={href.includes("http") ? "_blank" : "_self"}
            class={`font-extralight text-center text-xs bg-primary text-white rounded-sm py-[15px] transition-all duration-300 px-5 uppercase min-w-36 hover:bg-secondary ${className}`}
        >
            {text}
        </a>
    );
};

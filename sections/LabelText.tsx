import { CommonButton } from "site/components/ui/Button.tsx";

export interface Props {
    /**
     * @title Titulo
     */
    title: string;
    /**
     * @title Descrição
     */
    description: string;
    /**
     * @title Botão
     */
    button?: { href: string; text: string };
}

export default function LabelText({ description, title, button }: Props) {
    return (
        <div class="w-full flex justify-center pt-10 fade-in-down">
            <div class="flex flex-col md:flex-row  gap-5 md:gap-1 md:items-center flex-wrap xl:flex-nowrap text-neutral w-[90%] xl:w-[85%] md:justify-between">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p class="pl-5 md:pl-9 border-l-[5px] border-neutral w-fit text-[32px] font-light uppercase md:w-1/2 tracking-[.2em]">
                        {title}
                    </p>
                    <p
                        class={`md:pl-9 md:w-1/2 ${
                            !button && "min-w-[70%] flex-grow"
                        } text-xl font-extralight lg:text-[22px] md:text-right`}
                    >
                        {description}
                    </p>
                </div>
                {button && (
                    <CommonButton
                        href={button.href}
                        text={button.text}
                        className="xl:ml-[5%] self-start md:w-[40%] min-w-[230px] !text-base"
                    />
                )}
            </div>
        </div>
    );
}

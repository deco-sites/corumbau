import { CommonButton } from "site/components/ui/Button.tsx";
import { Placeholder } from "site/components/ui/SectionPlaceholder.tsx";

export interface Props {
    /**
     * @title Titulo
     */
    title: string;
    /**
     * @title Descrição
     * @format textarea
     */
    description: string;
    /**
     * @title Alinhamento da Descrição
     */
    alignment?: "Esquerda" | "Direita";
    /**
     * @title Tamanho da Descrição
     */
    size?: "Medio" | "Padrão";
    /**
     * @title Largura máxima da descrição
     * @description "Total" ajusta até 70% do tamanho da tela, enquanto "Metade" apenas 50%
     */
    growth?: "Metade" | "Total";
    /**
     * @title Botão
     */
    button?: { href?: string; text?: string };
}

const DEFAULT_PROPS: Props = {
    title: "Título da Seção",
    description:
        "Esta é uma descrição detalhada que pode ser ajustada conforme necessário. Pode incluir informações adicionais e detalhes relevantes para o conteúdo apresentado.",
};

const ALIGNMENT = {
    Direita: "md:text-right",
    Esquerda: "md:text-left",
};

const SIZE = {
    Medio: "text-lg",
    Padrão: "text-xl lg:text-[22px]",
};

const GROWTH = {
    Total: "md:max-w-[72%]",
    Metade: "md:max-w-[50%]",
};

export default function LabelText(
    props: Props,
) {
    const {
        description,
        title,
        button,
        alignment = "Direita",
        size = "Padrão",
        growth = "Total",
    } = { ...DEFAULT_PROPS, ...props };

    const hasButton = button && button.href && button.text;

    return (
        <div class="w-full  flex justify-center pt-10 fade-in-down">
            <div class="flex flex-col md:flex-row  gap-5 md:gap-1 md:items-center flex-wrap xl:flex-nowrap text-neutral w-[90%] xl:w-[85%] md:justify-between">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between flex-grow md:flex-wrap">
                    <p class="pl-5 md:pl-9 border-l-[5px] border-neutral w-fit text-[32px] font-light uppercase md:max-w-1/2 tracking-[.2em]">
                        {title}
                    </p>
                    <div
                        class={`md:pl-9 tracking-widest md:w-1/2 ${
                            GROWTH[growth]
                        } ${!hasButton && "flex-grow"} font-extralight ${
                            SIZE[size]
                        } ${ALIGNMENT[alignment]}`}
                    >
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                {button && button.href && button.text && (
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

export const LoadingFallback = () => <Placeholder height="88px" />;

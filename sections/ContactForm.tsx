import IframeModal from "../components/ui/IframeModal.tsx";

interface Policy {
    /**
     * @title Descrição
     */
    description: string;
    /**
     * @title Texto
     */
    text: string;
    /**
     * @title URL
     * @description Passe a URL da sua página de politica de privacidade. Se ela estiver no mesmo domínio que o restante do site, passe apenas /nome-da-pagina
     */
    link: string;
}

interface FormLabel {
    /**
     * @title Input Nome
     */
    name: string;
    /**
     * @title Input Email
     */
    email: string;
    /**
     * @title Input Telefone
     */
    phone: string;
    /**
     * @title Textarea de mensagem
     */
    message: string;
    /**
     * @title Texto do botão
     */
    button: string;
}

export interface Props {
    /**
     * @title Politica de privacidade
     */
    policy: Policy;
    /**
     * @title Placeholders dos inputs
     * @description Definirá os placeholders que será exibido em cada input do formulário
     */
    formLabels: FormLabel;
}

const DEFAULT_PROPS: Props = {
    policy: {
        description: "Aceito os termos de uso dos dados conforme indicado na",
        text:
            "Sua privacidade é importante para nós. Leia nossa política para entender como coletamos e usamos seus dados.",
        link: "/politica_privacidade",
    },
    formLabels: {
        email: "Se email",
        message: "Deixe sua mensagem aqui...",
        name: "Seu nome",
        phone: "Seu telefone",
        button: "Enviar",
    },
};

export default function ContactForm(props: Props) {
    const { policy, formLabels } = { ...DEFAULT_PROPS, ...props };

    return (
        <div class="w-full flex justify-center pt-10 fade-in-down">
            <div class="relative w-[90%] xl:w-[85%]">
                <form class="w-full mt-24 font-extralight flex flex-col gap-8 text-base-gray items-start">
                    <div class="w-full flex flex-col gap-8">
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="text"
                                name="name"
                                placeholder={`${formLabels.name}*`}
                                arial-label="Seu nome"
                            />
                        </div>
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="email"
                                name="email"
                                placeholder={`${formLabels.email}*`}
                                arial-label="Seu email"
                            />
                        </div>
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="tel"
                                name="phone"
                                placeholder={`${formLabels.phone}*`}
                                arial-label="Seu telefone"
                            />
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="relative">
                            <textarea
                                class="p-9 bg-accent w-full h-80 text-area focus:outline-none"
                                name="message"
                                placeholder={`${formLabels.message}*`}
                            >
                            </textarea>
                            <span>
                                <i></i>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p class="text-secondary">
                                <input
                                    type="checkbox"
                                    name="accept"
                                    id="accept"
                                    required
                                    style="width: initial;"
                                />{" "}
                                <label for="accept">
                                    {policy.description}
                                    {" "}
                                </label>
                                <IframeModal
                                    buttonText={policy.text}
                                    iframeLink={policy.link}
                                    customClass="font-bold !no-underline !text-base"
                                />
                            </p>
                        </div>
                    </div>
                    <button
                        class={`font-normal mt-7 text-center text-base bg-primary text-white rounded-sm py-[15px] transition-all duration-300 px-5 min-w-36 hover:bg-secondary`}
                    >
                        {formLabels.button}
                    </button>
                </form>
            </div>
        </div>
    );
}

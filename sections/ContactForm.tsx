import IframeModal from "site/islands/IframeModal.tsx";

export interface Props {
    policy: {
        text: string;
        link: string;
    };
}

export default function ContactForm({ policy }: Props) {
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
                                placeholder="Seu nome*"
                                arial-label="Seu nome"
                            />
                        </div>
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="email"
                                name="email"
                                placeholder="Seu email*"
                                arial-label="Seu email"
                            />
                        </div>
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="tel"
                                name="phone"
                                placeholder="Seu telefone*"
                                arial-label="Seu telefone"
                            />
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="relative">
                            <textarea
                                class="p-9 bg-accent w-full h-80 text-area focus:outline-none"
                                name="message"
                                placeholder="Deixe sua mensagem aqui..."
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
                                    Aceito os termos de uso dos dados conforme
                                    indicado na{" "}
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
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

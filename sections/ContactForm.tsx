import IframeModal from "../components/ui/IframeModal.tsx";
import { useComponent } from "../sections/Component.tsx";
import { AppContext } from "site/apps/site.ts";
import type { AppContext as ResendApp } from "apps/resend/mod.ts";

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
    sentEmail?: boolean;
}

export async function action(
    props: Props,
    req: Request,
    ctx: AppContext & ResendApp,
) {
    console.log(props);

    const formData = await req.formData();

    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";

    await ctx.invoke.resend.actions.emails.send({
        html: `
        <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template de E-mail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
        }
        h1 {
            font-size: 24px;
            color: #333;
        }
        p {
            font-size: 16px;
            color: #555;
            line-height: 1.5;
        }
        .info {
            margin-bottom: 10px;
        }
        .info strong {
            display: block;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Nova Mensagem de Contato</h1>
        <p>Você recebeu uma nova mensagem através do formulário de contato. Veja abaixo os detalhes:</p>
        <div class="info">
            <strong>Nome:</strong>
            <p>${name}</p>
        </div>
        <div class="info">
            <strong>E-mail:</strong>
            <p>${email}</p>
        </div>
        <div class="info">
            <strong>Telefone:</strong>
            <p>${phone}</p>
        </div>
        <div class="info">
            <strong>Mensagem:</strong>
            <p>${message}</p>
        </div>
    </div>
</body>
</html>

        `,
        subject: "Formulário de contato",
    });

    return { ...props, sentEmail: true };
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
    const { policy, formLabels, sentEmail } = { ...DEFAULT_PROPS, ...props };

    return (
        <div class="w-full flex justify-center pt-10 fade-in-down" id="wrapper">
            <div class="relative w-[90%] xl:w-[85%]">
                <form
                    hx-post={useComponent(import.meta.url, props)}
                    hx-trigger="submit"
                    hx-swap="outerHTML"
                    hx-target="#wrapper"
                    class="w-full mt-24 font-extralight flex flex-col gap-8 text-base-gray items-start"
                >
                    <div class="w-full flex flex-col gap-8 md:flex-row">
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="text"
                                name="name"
                                placeholder={`${formLabels.name}*`}
                                arial-label="Seu nome"
                                required
                            />
                        </div>
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="email"
                                name="email"
                                placeholder={`${formLabels.email}*`}
                                arial-label="Seu email"
                                required
                            />
                        </div>
                        <div class="w-full">
                            <input
                                class="pb-5 border-b border-base-gray w-full focus:border-b-primary focus:outline-none text-base-gray"
                                type="tel"
                                name="phone"
                                placeholder={`${formLabels.phone}*`}
                                arial-label="Seu telefone"
                                required
                            />
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="relative">
                            <textarea
                                class="p-9 bg-accent w-full h-80 text-area focus:outline-none"
                                name="message"
                                placeholder={`${formLabels.message}*`}
                                required
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
                    {sentEmail && (
                        <div class="bg-primary p-4 rounded-sm text-white">
                            Email enviado com sucesso!
                        </div>
                    )}
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

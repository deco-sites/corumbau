import { useScript } from "deco/hooks/useScript.ts";
import { useId } from "site/sdk/useId.ts";
import IframeModal from "site/islands/IframeModal.tsx";

const script = (id: string) => {
    const handleScroll = () => {
        const KEY = "store-cookie-consent";
        const ACCEPTED = "accepted";
        const HIDDEN = "translate-y-[200%]";

        const consent = localStorage.getItem(KEY);
        const elem = document.getElementById(id);

        if (consent !== ACCEPTED && elem) {
            const accept = elem.querySelector("[data-button-cc-accept]");
            accept && accept.addEventListener("click", () => {
                localStorage.setItem(KEY, ACCEPTED);
                elem.classList.add(HIDDEN);
            });
            const close = elem.querySelector("[data-button-cc-close]");
            close &&
                close.addEventListener(
                    "click",
                    () => elem.classList.add(HIDDEN),
                );
            elem.classList.remove(HIDDEN);
        }
    };

    addEventListener("scroll", handleScroll, { once: true });
};

interface Props {
    text: string;
    policy: {
        text: string;
        link: string;
    };
    buttons?: {
        allowText: string;
        cancelText?: string;
    };
}

function CookieConsent(
    {
        text =
            "Guardamos estatísticas de visitas para melhorar sua experiência de navegação.",
        policy = {
            text: "Saiba mais sobre sobre política de privacidade",
            link: "/politica-de-privacidade",
        },
        buttons = {
            allowText: "Aceitar",
            cancelText: "Fechar",
        },
    }: Props,
) {
    const id = useId();

    return (
        <>
            <div
                id={id}
                class="transform-gpu translate-y-[200%] transition fixed bottom-0 w-screen z-50 sm:flex sm:bottom-2 sm:justify-start ml-2"
            >
                <div class=" mx-4 my-2 flex flex-col shadow-spread bg-base-100 sm:flex-row sm:items-end">
                    <div class="p-3">
                        <div class="flex flex-col items-center sm:flex-row sm:items-end flex-wrap sm:gap-1">
                            <p class="text-[10px] text-center sm:text-start max-w-[422px]">
                                {text}
                                <span>{" "}</span>
                                <IframeModal
                                    iframeLink={policy.link}
                                    buttonText={policy.text}
                                />
                            </p>
                        </div>
                    </div>

                    <button
                        class="bg-black hover:opacity-70 py-5 px-4 uppercase text-white font-bold text-[10px]"
                        data-button-cc-accept
                    >
                        {buttons.allowText}
                    </button>
                </div>
            </div>
            <script
                type="module"
                dangerouslySetInnerHTML={{ __html: useScript(script, id) }}
            />
        </>
    );
}

export const LoadingFallback = () => null;

export default CookieConsent;

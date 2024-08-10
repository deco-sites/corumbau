import { useScript } from "deco/hooks/useScript.ts";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";

interface Props {
    iframeLink: string;
    buttonText: string;
    customClass?: string;
}

function script(id: string) {
    const handleClick = () => {
        (globalThis.document.getElementById(
            id,
        ) as HTMLDialogElement)
            ?.showModal();
    };

    const handleClose = () => {
        (globalThis.document.getElementById(
            id,
        ) as HTMLDialogElement)
            ?.close();
    };

    globalThis.document.getElementById(`button-${id}`)?.addEventListener(
        "click",
        handleClick,
    );
    globalThis.document.getElementById(`button-${id}-close`)?.addEventListener(
        "click",
        handleClose,
    );
}

const IframeModal = ({ buttonText, iframeLink, customClass }: Props) => {
    const id = useId();
    return (
        <>
            <button
                id={`button-${id}`}
                class={`text-[10px] underline text-center ${customClass}`}
                type="button"
                onClick={() => {
                    console.log("test");

                    (globalThis.document.getElementById(
                        id,
                    ) as HTMLDialogElement)
                        ?.showModal();
                }}
            >
                {buttonText}
            </button>
            <dialog id={id} className="modal hidden open:grid">
                <div className="modal-box p-0 rounded-none h-[90vh] md:h-[80vh] min-w-[90%] max-w-[768px]">
                    <iframe
                        id="myIframe"
                        src={iframeLink}
                        class="w-full h-full"
                    >
                    </iframe>
                </div>
                <div method="dialog" className="modal-backdrop z-auto">
                    <button type="button" id={`button-${id}-close`}>
                        close
                        <span class="fixed top-0 right-0 p-4 bg-black bg-opacity-70 z-50">
                            <Icon id="XMark" size={25} class="text-white" />
                        </span>
                    </button>
                </div>
            </dialog>
            <script
                type="module"
                dangerouslySetInnerHTML={{ __html: useScript(script, id) }}
            />
        </>
    );
};

export default IframeModal;

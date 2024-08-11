import Icon from "site/components/ui/Icon.tsx";

const InternationalizationController = (
    { languageVersion }: { languageVersion: "PT" | "ENG" | "ES" },
) => {
    const languages = [
        { language: "PT", code: "pt-BR" },
        { language: "ENG", code: "en-US" },
        { language: "ES", code: "es-ES" },
    ];

    const filteredLanguages = languages.filter((language) =>
        language.language !== languageVersion
    );

    function setCookie(cvalue: string) {
        const d = new Date();
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();

        globalThis.document.cookie = `language=${cvalue};${expires};path=/`;

        globalThis.location.reload();
    }

    return (
        <div class="group relative  ">
            <div class="flex items-center gap-2 pl-5 border-l border-white">
                <Icon id="Earth" size={15} strokeWidth={0.1} />
                <p class="text-xs">{languageVersion}</p>
                <Icon id="ArrowDown" size={10} strokeWidth={0.1} />
            </div>
            <div class="hidden group-hover:flex absolute top-[15px] right-0 ">
                <ul class="text-black text-xs flex flex-col gap-1 mt-1 bg-[#f9f9f9]">
                    {filteredLanguages.map((language) => (
                        <li
                            onClick={() => setCookie(language.code)}
                            class="cursor-pointer hover:bg-[#f1f1f1] bg-[#f9f9f9] py-3 px-4"
                        >
                            {language.language}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InternationalizationController;

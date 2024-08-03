import Icon from "site/components/ui/Icon.tsx";

const InternationalizationController = () => {
    return (
        <div class="group relative  ">
            <div class="flex items-center gap-2 pl-5 border-l border-white">
                <Icon id="Earth" size={15} strokeWidth={0.1} />
                <p class="text-xs">PT</p>
                <Icon id="ArrowDown" size={10} strokeWidth={0.1} />
            </div>
            <div class="hidden group-hover:flex">
                <ul class=" absolute top-[15px] right-0 bg-[#f9f9f9] py-3 px-4 text-black text-xs">
                    <li>ENG</li>
                </ul>
            </div>
        </div>
    );
};

export default InternationalizationController;

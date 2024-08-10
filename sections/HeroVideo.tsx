import { VideoWidget } from "apps/admin/widgets.ts";

export interface Props {
    /**
     * @title Video
     * @description O tamanho máximo suportado para o video é de 20mb
     */
    srcDesktop: VideoWidget;
    /**
     * @title Tamanho
     * @description O tamanho grande aplica um tamanho fixo na seção, com cerca de 90% do tamanho da tela, enquanto o médio assume tamanhos diferentes baseado na largura da tela
     */
    size: "medio" | "grande";
}

export default function HeroVideo({
    srcDesktop,
    size,
}: Props) {
    return (
        <div className="fade-in relative">
            <div
                className={`${
                    size === "grande"
                        ? "max-h-[90vh]"
                        : "max-h-[50vh] md:max-h-[80vh] lg:max-h-[70vh]"
                } overflow-hidden`}
            >
                <div className="w-full h-full m-0">
                    <video
                        src={srcDesktop}
                        autoPlay
                        muted
                        loop
                        width={520}
                        height={300}
                        preload="auto"
                        webkit-playsinline
                        x5-playsinline
                        playsInline
                        className="w-full max-h-full object-cover object-center"
                    >
                        Video não suportado!
                    </video>
                </div>
            </div>
        </div>
    );
}

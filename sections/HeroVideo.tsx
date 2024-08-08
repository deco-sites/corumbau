import { VideoWidget } from "apps/admin/widgets.ts";

export interface Props {
    /**
     * @title Video
     * @description O tamanho máximo suportado para o video é de 20mb
     */
    srcDesktop: VideoWidget;
}

export default function HeroVideo({
    srcDesktop,
}: Props) {
    return (
        <div className="fade-in relative">
            <div className="max-h-[90vh] overflow-hidden">
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

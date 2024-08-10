export interface Props {
    /**
     * @title Altura do mapa
     */
    height: string;
    /**
     * @title Link do mapa
     * @description Você pode obter esse link pelo google maps em: Compartilhar > Incorporar um mapa > Copiar o link fornecido no "src" do iframe gerado
     */
    src: string;
}

const DEFAULT_PROPS: Props = {
    height: "300px",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58578.24874528575!2d-46.42897920000001!3d-23.4192896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8af96f722a25%3A0x8071626c51a7154a!2sAeroporto%20Internacional%20de%20Guarulhos!5e0!3m2!1spt-BR!2sbr!4v1723310864502!5m2!1spt-BR!2sbr",
};

export default function Map(props: Props) {
    const { height, src } = { ...DEFAULT_PROPS, ...props };

    return (
        <div class="w-full flex justify-center pt-10 fade-in-down relative">
            <div class="w-[90%] xl:w-[85%] mx-auto">
                <iframe
                    src={src}
                    width="100%"
                    height={height}
                    style="border:0;"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    class="w-full max-w-[1000px]"
                >
                </iframe>
            </div>
        </div>
    );
}

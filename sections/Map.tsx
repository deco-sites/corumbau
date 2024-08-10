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

export default function Map({ height, src }: Props) {
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

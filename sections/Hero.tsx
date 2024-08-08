import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Titulo
   */
  title?: string;
  /**
   * @title Imagem
   */
  image: ImageWidget;
  /**
   * @title Tamanho
   * @description O tamanho grande aplica um tamanho fixo na seção, com cerca de 90% do tamanho da tela, enquanto o médio assume tamanhos diferentes baseado na largura da tela
   */
  size: "medio" | "grande";
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  image,
  size,
}: Props) {
  return (
    <div
      class={` ${
        size === "grande" ? "h-[90vh]" : "h-[50vh] md:h-[80vh] lg:h-[70vh]"
      } flex items-end justify-start fade-in relative`}
    >
      <Image
        src={image}
        class="w-full h-full object-cover"
        width={1440}
        height={size == "grande" ? 819 : 637}
      />
      <h2 class="absolute bottom-0 bg-inverted-gradient w-full text-start px-10 py-5 text-white text-2xl md:text-4xl lg:text-5xl tracking-wider font-extralight !leading-tight">
        {title}
      </h2>
    </div>
  );
}

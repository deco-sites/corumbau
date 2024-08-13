import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { LoadingFallbackProps } from "deco/mod.ts";

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

const DEFAULT_PROPS: Props = {
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
  size: "grande",
};

export default function HeroFlats(props: Props) {
  const {
    title,
    image,
    size,
  } = { ...DEFAULT_PROPS, ...props };

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
        preload
        loading="eager"
        fetchPriority="high"
      />
      <h2 class="absolute bottom-0 bg-inverted-gradient w-full text-start px-10 py-5 text-white text-2xl md:text-4xl lg:text-5xl tracking-wider font-extralight !leading-tight">
        {title}
      </h2>
    </div>
  );
}

export const LoadingFallback = (
  { size }: LoadingFallbackProps<Props>,
) => {
  <div
    class={` ${
      size === "grande" ? "h-[90vh]" : "h-[50vh] md:h-[80vh] lg:h-[70vh]"
    } flex items-end justify-start fade-in relative`}
  >
  </div>;
};

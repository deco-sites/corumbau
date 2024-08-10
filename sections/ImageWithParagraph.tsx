import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Paragraph {
  /** @format textarea */
  text: string;
}

export interface Props {
  /**
   * @title Paragrafo
   */
  paragraphs?: Paragraph[];
  /**
   * @title Imagem
   */
  image?: ImageWidget;
  /**
   * @title Posição da imagem
   */
  placement?: "left" | "right";
}

const PLACEMENT = {
  right: "flex-col-reverse mid:flex-row-reverse",
  left: "flex-col mid:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  paragraphs = [{
    text:
      "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  }],
  image = DEFAULT_IMAGE,
  placement = "left",
}: Props) {
  return (
    <div class="w-full flex justify-center pt-10">
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 mid:gap-20 text-left items-center z-10 w-[90%] xl:w-[85%]`}
      >
        <div class="w-full mid:w-1/2 overflow-hidden fade-in-down">
          <Image
            width={761}
            height={485}
            class="object-cover hidden mid:block z-10 hover:scale-110 transition-all duration-500 h-[50vh]"
            src={image}
            alt={image}
            decoding="async"
            loading="eager"
          />
          <Image
            width={876}
            height={458}
            class="object-cover mid:hidden z-10 hover:scale-110 transition-all duration-500 h-[50vh]"
            src={image}
            alt={image}
            decoding="async"
            loading="eager"
          />
        </div>
        <div class="w-full mid:w-1/2 z-10 fade-in-down animation-delay text-xl mid:text-[22px] flex flex-col gap-5 mid:gap-[22px] text-secondary font-extralight">
          {paragraphs.map((paragraph) => <p>{paragraph.text}</p>)}
        </div>
      </div>
    </div>
  );
}

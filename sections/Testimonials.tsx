import { Placeholder } from "site/components/ui/SectionPlaceholder.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import { Title } from "site/components/ui/Title.tsx";

/**
 * @titleBy name
 */
export interface Testimonial {
  content?: {
    /**
     * @title Descrição
     */
    description?: string;
    /**
     * @title Nome do autor
     */
    name?: string;
    /**
     * @title Origem do depoimento
     */
    source?: string;
  };
}

export interface Props {
  /**
   * @title Titulo da Seção
   * @format rich-text
   */
  title?: string;
  /**
   * @title Depoimentos
   */
  slides: Testimonial[];
  /**
   * @title Intervalo do autoplay
   * @description tempo (em segundos) para a passagem automática de testemunho. Se nada for passado, a passagem será apenas pelos controladores (dots e setas)
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  title: "This is where you'll put your customer testimonials",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
};

function SliderItem(
  { slide, id }: { slide: Testimonial; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="w-full flex justify-center py-4 px-9 lg:px-0"
    >
      <div class="relative flex flex-col items-center lg:items-start justify-center h-full w-full max-w-[760px] gap-8 wrapper-testimonials-box">
        <p class=" text-lg font-thin text-neutral leading-6 tracking-wider text-center lg:text-start">
          {content?.description}"
        </p>
        <div class="flex items-center gap-5">
          <div class="flex">
            <p class="text-lg italic font-extralight">
              - {content?.name} via {content?.source}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dots({ slides }: Props) {
  return (
    <>
      <ul class="carousel col-span-full gap-3 z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div class="w-2 h-2 rounded-full dot group-disabled:bg-primary" />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides, interval } = { ...DEFAULT_PROPS, ...props };

  const multipleSlides = slides.length > 1;

  return (
    <div
      id={id}
      class="min-h-min flex flex-col lg:container md:max-w-6xl lg:mx-auto mx-4 pt-10 fade-in-down"
    >
      <div class="w-full flex justify-center pb-10">
        <Title text={title} />
      </div>

      <Slider
        class="carousel carousel-center w-full col-span-full row-span-full gap-6"
        rootId={id}
        interval={interval && interval * 1e3}
        infinite
      >
        {slides?.map((slide, index) => (
          <Slider.Item
            index={index}
            class="carousel-item w-full"
          >
            <SliderItem
              slide={slide}
              id={`${id}::${index}`}
            />
          </Slider.Item>
        ))}
      </Slider>

      {multipleSlides && (
        <div class="w-full flex justify-center">
          <Dots slides={slides} interval={interval} />
        </div>
      )}
    </div>
  );
}

export default Carousel;

export const LoadingFallback = () => <Placeholder height="340px" />;

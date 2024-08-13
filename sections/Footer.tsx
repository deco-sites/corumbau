import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { LoadingFallbackProps } from "deco/mod.ts";
import IframeModal from "site/components/ui/IframeModal.tsx";

interface Social {
  /**
   * @title Ícone
   */
  icon: ImageWidget;
  /**
   * @title URL
   */
  href: string;
}

interface Reservation {
  /**
   * @title Titulo
   */
  title: string;
  /**
   * @title Telefone
   */
  phone: string;
  /**
   * @title Email
   */
  email: string;
}

interface Address {
  /**
   * @title Titulo
   */
  title: string;
  /**
   * @title Endereço
   * @description Atenção! Adicionar estilos no editor pode sobrescrever a estilização padrão do texto
   * @format rich-text
   */
  text: string;
}

export interface Props {
  /**
   * @title Reserva
   */
  reservation: Reservation;
  address: Address;
  copyright?: string;
  /**
   * @title Política de Privacidade
   */
  privacyTerms: {
    /**
     * @title Texto
     */
    label: string;
    /**
     * @title Link das políticas
     */
    href: string;
  };
  /**
   * @title Redes Sociais
   */
  socials: Social[];
}

export default function Footer({
  reservation = {
    title: "RESERVAS E INFORMAÇÕES",
    phone: "00 0000-0000",
    email: "johndoe@gmail.com",
  },
  address = {
    title: "ENDEREÇO",
    text: "Ponta do Corumbau, s/nº Prado - BAHIA, Brasil +55 73 3294 2250",
  },

  copyright = "© 2024 deco.cx. All rights reserved.",
  privacyTerms = {
    label: "Termos",
    href: "#",
  },
  socials = [],
}: Props) {
  return (
    <>
      <div class="border-t border-accent w-full lg:hidden mt-10">
        <div class="flex justify-center">
          {socials.map((social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener"
              class="text-neutral w-[100px] h-[100px] flex items-center justify-center"
            >
              <Image
                src={social.icon}
                width={35}
                height={35}
                alt="social-icon"
                class={social.href.includes("tripadvisor")
                  ? "w-[50px] h-[50px]"
                  : `w-[35px] h-[35px]`}
              />
            </a>
          ))}
        </div>
      </div>
      <div class="text-sm border-t border-accent w-full lg:mt-10">
        <div class="flex flex-col gap-20 max-w-[85%] mx-auto w-full py-10">
          <div class="flex flex-col gap-6 justify-between lg:flex-row">
            <div class="flex flex-col gap-[25px] tracking-widest w-[250px]">
              <h4 class="text-secondary font-bold text-base uppercase">
                {reservation.title}
              </h4>
              <div class="flex flex-col gap-4">
                <p class="text-primary font-bold text-base">
                  {reservation.phone}
                </p>
                <p class="text-[13px] font-bold text-neutral">
                  {reservation.email}
                </p>
              </div>
            </div>
            <div class="hidden lg:flex gap-4 items-center">
              {socials.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  class="text-neutral w-[60px] h-[60px] flex items-center justify-center"
                >
                  <Image
                    src={social.icon}
                    width={35}
                    height={35}
                    alt="social-icon"
                    class={social.href.includes("tripadvisor")
                      ? "w-[50px] h-[50px]"
                      : `w-[35px] h-[35px]`}
                  />
                </a>
              ))}
            </div>
            <div class="flex flex-col gap-[25px] tracking-widest">
              <h4 class="text-secondary font-bold text-base uppercase">
                {address.title}
              </h4>

              <div
                dangerouslySetInnerHTML={{ __html: address.text }}
                class="flex flex-col gap-4 text-[13px] text-neutral font-extralight"
              />
            </div>
          </div>
        </div>
        <div class="w-full bg-secondary">
          <div class="py-5 max-w-[85%] mx-auto w-full text-white">
            <span class="text-xs flex gap-4">
              <p>{copyright}</p>
              <IframeModal
                iframeLink={privacyTerms.href}
                buttonText={privacyTerms.label}
                customClass="opacity-1 hover:opacity-70 transition-all duration-300"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export const LoadingFallback = (props: LoadingFallbackProps<Props>) => (
  // deno-lint-ignore no-explicit-any
  <Footer {...props as any} loading="lazy" />
);

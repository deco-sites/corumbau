import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

const SideFixedSocial = ({ socials }: { socials: Social[] }) => {
  return (
    <div class="fixed right-0 top-1/2 z-50 shadow-base bg-white hidden lg:block -mt-[75px]">
      <ul>
        {socials.map((social) => (
          <li class="border-y border-accent last:border-b-0 first:border-t-0">
            <a
              href={social.href}
              target="_blank"
              rel="noopener"
              class="text-neutral w-[50px] h-[50px] flex items-center justify-center hover:bg-accent transition-all duration-300"
            >
              <Image
                src={social.icon}
                width={35}
                height={35}
                alt="social-icon"
                class={social.href.includes("tripadvisor")
                  ? "w-[25px] h-[25px]"
                  : `w-[20px] h-[20px]`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export interface Props {
  /**
   * @title Reserva
   */
  reservation: {
    /**
     * @title Telefone
     */
    phone: string;
    /**
     * @title Email
     */
    email: string;
  };
  /**
   * @title Endereço
   * @description Atenção! Adicionar estilos no editor pode sobrescrever a estilização padrão do texto
   * @format rich-text
   */
  address: string;
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
    phone: "00 0000-0000",
    email: "johndoe@gmail.com",
  },
  address = "Ponta do Corumbau, s/nº Prado - BAHIA, Brasil +55 73 3294 2250",

  copyright = "© 2024 deco.cx. All rights reserved.",
  privacyTerms = {
    label: "Termos",
    href: "#",
  },
  socials = [],
}: Props) {
  return (
    <>
      <div class="border-t border-accent w-full lg:hidden">
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
      <SideFixedSocial socials={socials} />
      <div class="text-sm border-t border-accent w-full">
        <div class="flex flex-col gap-20 max-w-[85%] mx-auto w-full py-10">
          <div class="flex flex-col gap-6 justify-between lg:flex-row">
            <div class="flex flex-col gap-[25px]">
              <h4 class="text-secondary font-bold">RESERVAS E INFORMAÇÕES</h4>
              <div class="flex flex-col gap-4">
                <p class="text-primary font-bold">{reservation.phone}</p>
                <p class="text-xs font-bold text-secondary">
                  {reservation.email}
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-[25px]">
              <h4 class="text-secondary font-bold">ENDEREÇO</h4>

              <div
                dangerouslySetInnerHTML={{ __html: address }}
                class="flex flex-col gap-4 text-xs text-neutral font-extralight"
              />
            </div>
            <div class="flex flex-col gap-[25px] md:w-[250px] ">
              <h4 class="text-secondary font-bold">NEWSLETTER</h4>
              <form>
                <div class="flex">
                  <input
                    type="text"
                    placeholder="seu email"
                    class="flex-grow bg-accent py-3 px-5 pr-[50px] md:w-[206px]"
                  />
                  <button
                    type="submit"
                    class="font-normal text-center text-xs bg-primary text-white py-[13px] transition-all duration-300 uppercase hover:bg-secondary w-[44px]"
                    aria-label="Subscribe"
                  >
                    OK
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="w-full bg-secondary">
          <div class="py-5 max-w-[85%] mx-auto w-full text-white">
            <span class="text-xs flex gap-4">
              <p>{copyright}</p>
              <a
                class="opacity-1 hover:opacity-70 transition-all duration-300"
                href={privacyTerms.href}
              >
                {privacyTerms.label}
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

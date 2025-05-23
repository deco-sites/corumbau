import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "deco/hooks/useScript.ts";
import { FnContext } from "deco/types.ts";
import { CommonButton } from "site/components/ui/Button.tsx";
import InternationalizationController from "../islands/InternationalizationController.tsx";
import { LoadingFallbackProps } from "deco/mod.ts";

export interface CTA {
  id?: string;
  /**
   * @title URL
   * @description Link para onde o botão irá redirecionar. Se o objetivo for navegar no próprio site passar /caminho-da-pagina
   */
  href: string;
  /**
   * @title Titulo do link
   */
  text: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    /**
     * @title Links
     */
    links: {
      label?: string;
      url?: string;
      /**
       * @title Links filhos
       * @description Links incluídos aqui serão apresentados em um menu suspenso, no link principal, quando o mouse estiver sob o link
       */
      children?: {
        /**
         * @title URL
         * @description Link para onde o botão irá redirecionar. Se o objetivo for navegar no próprio site passar /caminho-da-pagina
         */
        label?: string;
        /**
         * @title Titulo do link
         */
        url?: string;
      }[];
    }[];
    /**
     * @title Botão
     */
    button?: CTA;
  };
  languageVersion: "PT" | "ENG" | "ES";
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    button: { id: "change-me-1", href: "/", text: "Change me" },
  },
  languageVersion = "PT",
  pathname,
}: ReturnType<typeof loader>) {
  function script() {
    const handleScroll = () => {
      if (globalThis.scrollY > 260) {
        globalThis.document.querySelector("#logo-icon img")?.classList.add(
          "max-w-24",
        );
      } else {
        globalThis.document.querySelector("#logo-icon img")?.classList.remove(
          "max-w-24",
        );
      }
    };

    globalThis.addEventListener("scroll", handleScroll);
  }

  return (
    <nav
      id={"header"}
      class="drawer drawer-end fixed top-0 z-50 transition-all duration-300 ease-in-out text-white max-w py-5 px-[35px]"
    >
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div
        class={`drawer-content container flex gap-8 items-center justify-between`}
      >
        <a href="/" id="logo-icon">
          <Image
            src={logo.src || ""}
            width={124}
            height={73}
            alt={logo.alt}
            class="transition-all duration-300"
          />
        </a>

        <div class="hidden items-center gap-5 lg:flex">
          <ul class="flex gap-5">
            {navigation.links.map((link) => (
              <li class="group relative">
                {!(pathname === link.url) && (
                  <div class="absolute h-[5px] bg-primary w-0 transition-all duration-300 group-hover:w-full -top-[15px]" />
                )}
                {pathname === link.url && (
                  <div class="absolute h-[5px] bg-primary w-full -top-[15px]" />
                )}
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline text-xs uppercase tracking-widest"
                >
                  {link.label}
                </a>
                {!!link.children?.length && (
                  <div class="hidden group-hover:flex">
                    <ul class=" absolute top-[20px] left-0 bg-white bg-opacity-80 py-3 px-4 text-neutral text-xs flex flex-col gap-2 tracking-widest min-w-40">
                      {link.children.map((childLink) => (
                        <a
                          href={childLink.url}
                          aria-label={childLink.label}
                          class="link no-underline text-xs tracking-widest"
                        >
                          {childLink.label}
                        </a>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* TODO: add internationalization logic */}
          <InternationalizationController languageVersion={languageVersion} />
          <ul class="flex gap-3">
            {navigation.button && (
              <CommonButton
                href={navigation.button.href}
                id={navigation.button.id}
                text={navigation.button.text}
                className="!font-normal"
              />
            )}
          </ul>
        </div>
        <div class="lg:hidden">
          <input type="checkbox" id="menu-toggle" class="menu_opener hidden" />

          <label
            for="menu-toggle"
            class="btn-menu-mobile cursor-pointer relative block w-[35px] h-[24px] z-50"
          >
            <span class="icon-bar block w-[35px] h-[3px] bg-white absolute top-0">
            </span>
            <span class="icon-bar block w-[35px] h-[3px] bg-white absolute top-[10px]">
            </span>
            <span class="icon-bar block w-[35px] h-[3px] bg-white absolute bottom-0">
            </span>
          </label>
          <div class="mobile-menu absolute top-0 left-0">
            <div class="flex flex-col gap-5 min-h-screen w-screen bg-[#000000E6] text-base-content pt-28 items-center">
              {navigation.button && (
                <CommonButton
                  href={navigation.button.href}
                  id={navigation.button.id}
                  text={navigation.button.text}
                  className="max-w-[80%] w-full !text-2xl !font-normal"
                />
              )}

              <ul class="menu self-start flex flex-col items-start gap-5 justify-around h-full flex-grow">
                {navigation?.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="text-2xl leading-6 text-white hover:bg-none tracking-widest"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {/* TODO: add internationalization logic */}
                <li class="text-2xl leading-6 text-white">
                  ENG
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="gradient"
        class="bg-base-gradient absolute top-0 left-0 w-full h-full -z-10"
      />
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(script) }}
      />
    </nav>
  );
}

export const loader = (props: Nav, req: Request, _ctx: FnContext) => {
  console.log(req.url);
  const pathname = new URL(req.url).pathname;

  return {
    ...props,
    pathname,
  };
};

export const LoadingFallback = (props: LoadingFallbackProps<Nav>) => (
  // deno-lint-ignore no-explicit-any
  <Header {...props as any} loading="lazy" />
);

import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "deco/hooks/useScript.ts";
import { FnContext } from "deco/types.ts";
import { CommonButton } from "site/components/ui/Button.tsx";
import InternationalizationController from "../islands/InternationalizationController.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
      children?: {
        label?: string;
        url?: string;
      }[];
    }[];
    button?: CTA;
  };
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
  pathname,
}: ReturnType<typeof loader>) {
  function script() {
    const styles = ["bg-white", "!text-neutral"];
    const handleScroll = () => {
      if (globalThis.scrollY > 260) {
        globalThis.document.getElementById("header")?.classList.add(...styles);
        globalThis.document.querySelector("#logo-icon img")?.classList.add(
          "max-w-24",
        );
        globalThis.document.querySelectorAll(".icon-bar").forEach(
          (item) => item.classList.add("black_icon_bar"),
        );
      } else {
        globalThis.document.getElementById("header")?.classList.remove(
          ...styles,
        );
        globalThis.document.querySelector("#logo-icon img")?.classList.remove(
          "max-w-24",
        );
        globalThis.document.querySelectorAll(".icon-bar").forEach(
          (item) => item.classList.remove("black_icon_bar"),
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
                  class="link no-underline text-xs uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* TODO: add internationalization logic */}
          <InternationalizationController />
          <ul class="flex gap-3">
            {navigation.button && (
              <CommonButton
                href={navigation.button.href}
                id={navigation.button.id}
                text={navigation.button.text}
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
                  className="max-w-[80%] w-full !text-2xl"
                />
              )}

              <ul class="menu self-start flex flex-col items-start gap-5 justify-around h-full flex-grow">
                {navigation?.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="text-2xl leading-6 text-white hover:bg-none"
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

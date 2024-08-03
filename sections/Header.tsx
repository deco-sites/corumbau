import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useScript } from "deco/hooks/useScript.ts";
import { useSignal } from "@preact/signals";
import { FnContext } from "deco/types.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
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
    buttons: CTA[];
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
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
  pathname,
}: ReturnType<typeof loader>) {
  function script() {
    const styles = ["bg-white"];
    const handleScroll = () => {
      if (globalThis.scrollY > 260) {
        globalThis.document.getElementById("header")?.classList.add(...styles);
      } else {
        globalThis.document.getElementById("header")?.classList.remove(
          ...styles,
        );
      }
    };

    globalThis.addEventListener("scroll", handleScroll);
  }

  return (
    <nav id={"header"} class="drawer drawer-end fixed top-0 z-50">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div
        class={`drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4`}
      >
        <a href="/">
          <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
        </a>

        <div class="hidden items-center justify-between lg:flex w-full">
          <ul class="flex gap-5">
            {navigation.links.map((link) => (
              <li class="group relative">
                <div class="absolute h-[5px] bg-primary w-0 transition-all duration-300 group-hover:w-full -top-[15px]" />
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul class="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a class="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
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

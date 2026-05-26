import website, { Props } from "apps/website/mod.ts";
import manifest, { Manifest } from "../manifest.gen.ts";
import { type App, type AppContext as AC } from "@deco/deco";
type WebsiteApp = ReturnType<typeof website>;
/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://decoims.com/corumbau/d373ac03-744f-44bc-b896-5024db403d5f/0ac02239_0ac02239-61e6-4289-8a36-e78c0975bcc8.png
 */
export default function Site(state: Props): App<Manifest, Props, [
    WebsiteApp
]> {
    return {
        state,
        manifest,
        dependencies: [
            website({
                ...state,
                global: state.theme ? [...(state.global ?? []), state.theme] : state.global,
            }),
        ],
    };
}
export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";

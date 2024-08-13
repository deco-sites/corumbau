import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        <link
          rel="preconnect"
          href={asset("Sense-Light.woff")}
          as="font"
          type="font/woff"
        />
        <link
          rel="preconnect"
          href={asset("Sense-Reg.woff")}
          as="font"
          type="font/woff"
        />
        <link
          rel="preconnect"
          href={asset("Sense-Thin.woff")}
          as="font"
          type="font/woff"
        />
        <link
          rel="preconnect"
          href={asset("Sense-ExtraLight.woff")}
          as="font"
          type="font/woff"
        />
        <link
          rel="preconnect"
          href={asset("Sense-Bold.woff")}
          as="font"
          type="font/woff"
        />
        {/* Enable View Transitions API */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@view-transition { navigation: auto; }`,
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face {
                      font-family: 'Sense';
                      font-style: normal;
                      font-weight: 700;
                      font-display: swap;
                      src: url(${asset("Sense-Bold.woff")}) format('woff');
                    }

                    @font-face {
                      font-family: 'Sense';
                      font-style: normal;
                      font-weight: 200;
                      font-display: swap;
                      src: url(${
              asset("Sense-ExtraLight.woff")
            }) format('woff');
                    }

                    @font-face {
                      font-family: 'Sense';
                      font-style: normal;
                      font-weight: 300;
                      font-display: swap;
                      src: url(${asset("Sense-Light.woff")}) format('woff');
                    }

                    @font-face {
                      font-family: 'Sense';
                      font-style: normal;
                      font-weight: 400;
                      font-display: swap;
                      src: url(${asset("Sense-Reg.woff")}) format('woff');
                    }

                    @font-face {
                      font-family: 'Sense';
                      font-style: normal;
                      font-weight: 100;
                      font-display: swap;
                      src: url(${asset("Sense-Thin.woff")}) format('woff');
                    }
                      
                    * {
                      font-family: 'Sense', sans-serif  
                    }
                    `,
          }}
        />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});

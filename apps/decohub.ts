import Decohub from "apps/decohub/mod.ts";

/**
 * @title Deco Hub
 * @description Unlock apps and integrations on deco.cx
 * @category Tool
 * @logo https://decoims.com/corumbau/f740338b-ff3e-4176-8b9a-65b19f47c681/18a28e97_18a28e977196d303f1ba350805504de7.png
 */
export default function App(...params: Parameters<typeof Decohub>) {
  return Decohub(...params);
}

export { Preview } from "apps/decohub/mod.ts";

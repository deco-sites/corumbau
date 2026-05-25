import type { Manifest } from "./manifest.gen.ts";
import type { Manifest as ManifestResend } from "apps/resend/manifest.gen.ts";
import { proxy } from "@deco/deco/web";
export const invoke = proxy<Manifest & ManifestResend>();

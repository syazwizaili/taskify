const CHUNK_PUBLIC_PATH = "server/app/dashboard/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_7b3ebd._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@auth_core_3d8c01._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_jose_dist_node_esm_e43cb3._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_4c7b6e._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e5cdd6._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/dashboard/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/dashboard/page { COMPONENT_0 => \"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/app/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_3 => \"[project]/app/dashboard/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
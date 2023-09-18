import {defineConfig} from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon({
        iconDir: 'src/icons'
    })],
    image: {
        service: {
            entrypoint: 'astro/assets/services/noop'
        }
    },
    output: 'server',
    adapter: cloudflare({mode: 'directory', functionPerRoute: true}),
});
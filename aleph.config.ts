import type { Config } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";
export default <Config> {
  ssr: true,
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    },
    modules: {
      scopeBehaviour: 'local', // can be 'global' or 'local'
    }
  }
};

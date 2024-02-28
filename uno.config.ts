import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import presetCatppuccin from 'unocss-preset-catppuccin'

export default defineConfig ({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
    presetWebFonts(),
    presetTypography(),
    presetCatppuccin({
      defaultFlavour: 'latte',
      prefix: false,
    }),
  ],
})

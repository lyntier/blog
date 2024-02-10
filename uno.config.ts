import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import presetCatppuccin from 'unocss-preset-catppuccin'

export default defineConfig ({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts(),
    presetTypography(),
    presetCatppuccin({
      defaultFlavour: 'mocha',
      prefix: false,
    }),
  ],
})

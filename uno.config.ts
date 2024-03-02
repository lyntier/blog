import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import presetCatppuccin from 'unocss-preset-catppuccin'

export default defineConfig ({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        display: [
          {
            name: 'Shadows Into Light',
            weights: ['400'],
            italic: true,
          },
        ],
        sans: [
          {
            name: 'Quicksand',
            weights: ['500', '600', '700'],
            italic: true,
          },
        ],
      },
    }),
    presetTypography(),
    presetIcons({
      collections: {
        'heroicons': () => import('@iconify/json/json/heroicons.json').then(i => i.default),
        'fa-brands': () => import('@iconify/json/json/fa-brands.json').then(i => i.default),
      },
    }),
    presetCatppuccin({
      prefix: false,
    }),
  ],
})

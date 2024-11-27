'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g>
        <path d="M6.666 13.224c1.982.013 3.143.159 4.014.551a6.07 6.07 0 011.298.79l.425.36c1.002.819 2.202 1.276 3.52 1.027.21-.04.414-.093.613-.16a6.226 6.226 0 012.483.163l.317.094c.517.167.978.389 1.396.651l.234.155-.155.187c-1.012 1.157-2.411 1.882-3.93 2l-.168.01c-1.42.072-2.677-.344-3.828-1.128l.02-.017-.308-.223a8.446 8.446 0 01-.357-.274l-.191-.159-.343-.178c-1.24-.623-2.3-.943-3.105-1.15l-.794-.194-.223-.058-.018.048.016-.049-.01-.003-.016.053.013-.053a3.725 3.725 0 01-.749-.302l-.262-.144-.261-.163a2.396 2.396 0 01-.622-.578l-.11-.173-.097-.188a2.386 2.386 0 01-.213-.74l-.009-.1.22-.021.187-.014c.156-.01.313-.016.49-.019h.523zm-5.438 1.27c.08.327.172.633.27.915l.09.25c.165.438.373.856.62 1.248l-1.53 1.007c-.03.022-.07 0-.07-.047V14.8l.004-.023.015-.022.6-.26zm21.07-4.012l.05.195.039.174.015.108c.026.263.042.53.047.803l-.002.399c-.01.396-.045.786-.103 1.168l-.06.344a9.772 9.772 0 00-2.983-1.045l.03-.13c.047-.24.074-.486.08-.734a2.391 2.391 0 00-.02-.418l-.006-.033a11.45 11.45 0 002.562-.7l.35-.13zM12.13 6.022c1.17-.927 2.718-1.558 4.585-1.391a6.268 6.268 0 012.65.856l.22.14c.364.244.71.556 1.041.926l.183.221-.233.095-.212.122a6.501 6.501 0 01-.654.314c-.147.055-.3.108-.46.157a6.276 6.276 0 01-2.78.22c-.941-.238-1.958-.085-2.852.396-.406.21-.785.487-1.121.822l-.332.35-.182.18-.384.351a5.83 5.83 0 01-1.052.675c-.828.41-1.986.517-4.017.43l-.636-.032-.248-.017-.098-.01.112-.23c.136-.254.308-.502.522-.74.259-.288.537-.514.827-.69l.19-.101.128-.064.118-.053.209-.082a12.304 12.304 0 001.587-.762c1.105-.612 2.1-1.35 2.751-1.97l.138-.112zm-11.473.29l.023.01.27.229c.277.226.573.442.89.642l.352.212-.145.215c-.168.263-.321.549-.455.86l-.11.272a6.071 6.071 0 00-.175.54l-.056.223-.628-.612a.058.058 0 01-.015-.039V6.366c0-.036.025-.057.05-.055z" />
        <path d="M7.62 5.05a6.303 6.303 0 013.226.898l.235.146-.199.163a14.74 14.74 0 01-2.64 1.684l-.131.061-.306.136-.306.125a4.425 4.425 0 00-.65.294l-.127.069a4.265 4.265 0 00-2.149 3.406l-.01.21v.257l.027.541c0 .278.041.794.319 1.352l.09.168c.082.14.17.266.259.377.196.257.423.466.667.636l.247.16c.409.26.912.495 1.42.625l.765.184c.348.085.647.165.958.26.822.251 1.62.576 2.452 1.021l.162.136-.156.12c-.677.503-2.277 1.475-4.438 1.282a6.276 6.276 0 01-2.654-.861 5.79 5.79 0 01-1.653-1.478l-.131-.202a7.616 7.616 0 01-1.124-2.815l-.07-.377-.031.015a9.423 9.423 0 01-.03-2.903l.025.026.096-.696c.03-.137.062-.27.096-.4l.076-.27a6.233 6.233 0 01.88-1.82l.286-.376C4.103 5.99 5.548 5.192 7.158 5.07l.167-.011.296-.008zm7.85 8.03c.682-.044 1.446-.029 2.275.012l.42.022a8.9 8.9 0 01.73.071 12.967 12.967 0 013.036 1.023l.444.222c.304.184.56.362.764.515l.237.184.013.016.005.022v2.491l-.003.017-.004.01a.05.05 0 01-.021.018l-.027.005-.01-.003-.015-.01-.148-.127a9.245 9.245 0 00-1.431-.987l-.236-.126-.104-.077a6.994 6.994 0 00-2.269-1.074l-.25-.062a6.939 6.939 0 00-2.395-.118l-.157.021-.2.062-.178.045-.183.04c-1.274.238-2.348-.363-2.988-.869l-.298-.248.216-.165c.258-.187.529-.353.813-.495.506-.252 1.166-.384 1.964-.435zm7.846-7.004a.048.048 0 01.07.013l.008.027v3.057l-.006.024-.017.018a10.98 10.98 0 01-1.864.912c-.262.09-.479.157-.733.223-.514.135-1.058.258-1.526.347l-.317.057c-.285.034-.58.056-.885.066l-.338.006c-1.792.002-3.149-.083-4.145-.462l-.208-.085a6.075 6.075 0 01-.726-.384l-.14-.09c.122-.118.242-.241.36-.37l.157-.163c.161-.157.333-.3.512-.425.843-.566 1.851-.77 2.778-.535l.312.04a6.962 6.962 0 002.51-.202l.256-.074c.195-.06.38-.128.556-.2l.487-.209c.227-.103.437-.212.63-.326l.087-.035a10.827 10.827 0 002.182-1.23z" />
      </g>
    </svg>
  );
});

export default Icon;

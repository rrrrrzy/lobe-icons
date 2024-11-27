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
      viewBox="0 0 64 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M16.759 14.825c0 2.037-.605 3.66-1.815 4.868-1.359 1.439-3.146 2.158-5.36 2.158-2.12 0-3.915-.733-5.383-2.2C2.734 18.187 2 16.38 2 14.236c0-2.145.734-3.95 2.201-5.417C5.67 7.352 7.463 6.62 9.583 6.62c1.074 0 2.086.19 3.037.57.952.38 1.733.917 2.345 1.609l-1.346 1.344c-.448-.543-1.03-.967-1.743-1.273a5.763 5.763 0 00-2.293-.458c-1.59 0-2.935.55-4.036 1.65-1.087 1.113-1.63 2.504-1.63 4.174 0 1.67.543 3.061 1.63 4.175 1.1 1.1 2.446 1.65 4.036 1.65 1.454 0 2.664-.408 3.629-1.223.964-.814 1.522-1.934 1.671-3.36h-5.3v-1.751h7.074c.068.38.102.747.102 1.1m5.886-3.563c1.496 0 2.687.483 3.572 1.45.886.967 1.329 2.32 1.329 4.062l-.021.206h-7.928c.028.987.357 1.783.989 2.386a3.164 3.164 0 002.265.905c1.208 0 2.155-.603 2.841-1.81l1.689.823a5.03 5.03 0 01-1.884 1.995c-.803.48-1.713.72-2.729.72-1.482 0-2.704-.507-3.665-1.522-.96-1.015-1.441-2.297-1.441-3.847 0-1.536.467-2.814 1.4-3.836.934-1.022 2.128-1.532 3.583-1.532m-.041 1.727c-.714 0-1.328.22-1.843.659-.515.438-.855 1.028-1.02 1.769h5.787a2.508 2.508 0 00-.855-1.738c-.515-.46-1.204-.69-2.07-.69m8.049 8.65h-1.89V11.59h1.807v1.395h.083c.287-.492.728-.902 1.324-1.23.595-.328 1.187-.492 1.775-.492.74 0 1.39.17 1.95.512.562.342.972.814 1.232 1.415.835-1.285 1.991-1.927 3.47-1.927 1.163 0 2.06.355 2.689 1.066.63.71.944 1.723.944 3.035v6.275h-1.889v-5.988c0-.943-.17-1.623-.513-2.04-.342-.417-.917-.626-1.724-.626-.726 0-1.334.308-1.827.923-.493.615-.74 1.34-.74 2.174v5.557h-1.888v-5.988c0-.943-.17-1.623-.513-2.04-.342-.417-.917-.626-1.724-.626-.726 0-1.335.308-1.827.923-.493.615-.74 1.34-.74 2.174v5.557zM46.749 6.767c.37 0 .685.13.946.39.26.26.39.575.39.945s-.13.685-.39.945c-.26.26-.576.39-.946.39s-.685-.13-.946-.39c-.26-.26-.39-.575-.39-.945s.13-.685.39-.945c.26-.26.576-.39.946-.39zM42.825 0a5.08 5.08 0 004.263 4.259 5.08 5.08 0 00-4.263 4.259 5.08 5.08 0 00-4.263-4.26A5.08 5.08 0 0042.825 0zm5.176 11.574V21.64h-2.198V11.574h2.198zM62 8.103c0 .37-.13.685-.39.945-.261.26-.576.39-.946.39s-.686-.13-.946-.39c-.26-.26-.391-.575-.391-.945s.13-.685.39-.945c.261-.26.576-.39.946-.39s.686.13.946.39c.26.26.391.575.391.945m-.085 3.471V21.64h-2.197V11.574h2.197zm-12.57.017h1.806v1.394h.082c.287-.492.729-.902 1.324-1.23a3.797 3.797 0 011.858-.492c1.231 0 2.179.352 2.843 1.056.664.704.995 1.705.995 3.004v6.316h-1.888v-6.193c-.041-1.64-.87-2.46-2.484-2.46-.753 0-1.382.303-1.889.912-.506.608-.76 1.336-.76 2.184v5.557h-1.888V11.591z" />
    </svg>
  );
});

export default Icon;

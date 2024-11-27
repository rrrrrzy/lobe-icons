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
      viewBox="0 0 103 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M16.825 18.085h-7.94l-1.457 3.663H2L9.639 4.334h6.508l7.613 17.414h-5.503l-1.432-3.663zm-1.583-4.015l-2.186-5.52h-.402l-2.186 5.52h4.774zm9.825-11.392h4.799v19.07h-4.8V2.678zm7.437 1.68c0-2.182.402-2.358 2.588-2.358 2.211 0 2.588.176 2.588 2.359 0 2.208-.376 2.434-2.588 2.434-2.186 0-2.588-.226-2.588-2.434zm.201 3.84h4.774V21.75h-4.774V8.199zm21.534 6.775c0 3.99-.98 7.027-5.252 7.027-2.563 0-3.518-.703-3.995-1.807l-.226 1.556h-4.398V2.678h4.775v6.65c.527-.678 1.633-1.38 3.844-1.38 4.272 0 5.252 2.609 5.252 7.025zm-4.825 0c0-2.208-.301-3.613-2.236-3.613-1.91 0-2.312 1.23-2.312 3.613 0 2.234.402 3.564 2.312 3.564 1.985 0 2.236-1.48 2.236-3.564zm19.7-2.433v9.209h-4.322l-.377-1.255C64.013 21.172 62.857 22 60.47 22c-2.839 0-4.623-1.28-4.623-4.19 0-3.112 1.784-4.267 5.729-4.267h2.789c-.076-1.38-.578-1.58-2.563-1.58-.98 0-1.91.075-2.79.225v-3.99c1.03-.175 2.488-.225 3.468-.225 4.75 0 6.634 1.405 6.634 4.567zm-4.749 5.069v-1.054h-1.91c-1.507 0-1.985.226-1.985 1.028 0 .703.528.879 1.508.879 1.18 0 2.01-.377 2.387-.853zm21.76-2.636c0 3.99-.98 7.027-5.252 7.027-2.563 0-3.518-.703-3.996-1.807l-.226 1.556h-4.397V2.678h4.774v6.65c.528-.678 1.633-1.38 3.845-1.38 4.272 0 5.251 2.609 5.251 7.025zm-4.825 0c0-2.208-.301-3.613-2.236-3.613-1.91 0-2.311 1.23-2.311 3.613 0 2.234.402 3.564 2.311 3.564 1.985 0 2.236-1.48 2.236-3.564zM101 12.54v9.209h-4.322l-.377-1.255C95.9 21.172 94.743 22 92.356 22c-2.839 0-4.623-1.28-4.623-4.19 0-3.112 1.784-4.267 5.729-4.267h2.789c-.076-1.38-.578-1.58-2.563-1.58-.98 0-1.91.075-2.79.225v-3.99c1.03-.175 2.488-.225 3.468-.225 4.75 0 6.634 1.405 6.634 4.567zm-4.75 5.069v-1.054h-1.91c-1.507 0-1.984.226-1.984 1.028 0 .703.527.879 1.508.879 1.18 0 2.01-.377 2.387-.853z" />
    </svg>
  );
});

export default Icon;

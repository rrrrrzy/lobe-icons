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
      <path d="M21.821 9.894l-9.81 5.595L1.505 9.511 1 9.787v4.34l11.01 6.256 9.811-5.574v2.297l-9.81 5.596-10.506-5.979L1 17v.745L12.01 24 23 17.745v-4.34l-.505-.277-10.484 5.957-9.832-5.574v-2.298l9.832 5.574L23 10.532V6.255l-.547-.319-10.442 5.936-9.327-5.276 9.327-5.298 7.663 4.362.673-.383v-.532L12.011 0 1 6.255v.681l11.01 6.255 9.811-5.595z" />
    </svg>
  );
});

export default Icon;

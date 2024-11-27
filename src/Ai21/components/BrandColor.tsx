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
      <g>
        <path d="M15.064 21.643l-.74-2.335H7.487l-.741 2.335H2L8.862 2.414h4.09l6.944 19.23h-4.832zM10.92 7.908L8.56 15.819h4.666l-2.305-7.911zm9.504-5.494h4.501v19.23h-4.501V2.413zm5.714 15.3a8.84 8.84 0 011.057-2.691 7.78 7.78 0 011.606-1.868 16.915 16.915 0 012.045-1.456c.567-.33 1.093-.646 1.578-.948.447-.275.874-.582 1.276-.92.348-.289.64-.638.865-1.03.214-.391.323-.832.315-1.278 0-.769-.21-1.323-.63-1.662-.447-.347-1-.526-1.565-.508A2.475 2.475 0 0030.943 6c-.467.43-.7 1.15-.7 2.156h-4.42a6.493 6.493 0 01.454-2.445c.294-.74.749-1.406 1.33-1.95a6.26 6.26 0 012.142-1.291A8.363 8.363 0 0132.657 2a9.048 9.048 0 012.512.344c.76.21 1.472.565 2.1 1.044a4.972 4.972 0 011.44 1.813c.374.823.557 1.72.536 2.623a4.64 4.64 0 01-.522 2.198 7.454 7.454 0 01-1.276 1.758c-.497.508-1.044.963-1.633 1.36-.586.394-1.117.728-1.592 1.003-.66.44-1.204.82-1.633 1.14a7.753 7.753 0 00-1.03.892 2.403 2.403 0 00-.535.852 3.128 3.128 0 00-.15 1.017h8.234v3.598h-13.34c-.023-1.32.102-2.637.371-3.928zM39.958 5.792c.769.016 1.538-.053 2.292-.206a3.307 3.307 0 001.386-.618 2.14 2.14 0 00.686-1.044c.137-.491.202-1 .192-1.51h3.926v19.23h-4.528V8.923h-3.954V5.792z" />
        <path
          d="M53.534 2.414h4.199v19.23h-4.2V2.413zm19.704 5.978v13.241h-4.2v-1.868a3.434 3.434 0 01-.659.865 4.24 4.24 0 01-.946.686c-.371.198-.762.354-1.167.466-.41.118-.835.178-1.262.179a6.33 6.33 0 01-2.622-.536 6.207 6.207 0 01-2.044-1.456 6.455 6.455 0 01-1.318-2.197 8.402 8.402 0 010-5.522 6.455 6.455 0 011.318-2.198 6.207 6.207 0 012.044-1.455 6.329 6.329 0 012.622-.535c.427.001.852.061 1.263.179.406.113.798.274 1.166.48.347.194.666.434.947.715.257.252.48.539.659.851V8.392h4.199zm-7.356 10c.445.006.886-.088 1.29-.275a3.147 3.147 0 001.634-1.8c.156-.417.235-.859.233-1.304a3.546 3.546 0 00-.879-2.363 3.056 3.056 0 00-.989-.742 3.168 3.168 0 00-2.58 0 3.06 3.06 0 00-.989.742 3.549 3.549 0 00-.878 2.363c-.002.445.077.888.233 1.305a3.153 3.153 0 001.634 1.8c.404.187.845.28 1.29.273zm12.459 3.251h-4.2V2.414h4.2v7.883a4.218 4.218 0 011.619-1.566c.37-.202.76-.364 1.166-.48.415-.12.845-.18 1.276-.179a6.33 6.33 0 012.622.536c.773.34 1.47.836 2.044 1.456a6.47 6.47 0 011.318 2.197 8.413 8.413 0 010 5.522 6.47 6.47 0 01-1.318 2.198 6.203 6.203 0 01-2.044 1.456 6.33 6.33 0 01-2.622.535 4.577 4.577 0 01-1.276-.178 6.213 6.213 0 01-1.166-.466 4.12 4.12 0 01-.96-.687 3.435 3.435 0 01-.66-.865v1.867zm3.184-3.241c.436.004.868-.09 1.263-.275a3.148 3.148 0 001.634-1.8c.156-.416.235-.859.232-1.304a3.547 3.547 0 00-.878-2.363 3.056 3.056 0 00-.99-.741 2.901 2.901 0 00-1.261-.276 3.012 3.012 0 00-2.305 1.016 3.546 3.546 0 00-.879 2.362 3.66 3.66 0 00.233 1.305c.145.395.364.759.645 1.072a3.1 3.1 0 002.306 1.004zm15.219-4.56a20.56 20.56 0 011.646.535c.479.175.932.415 1.345.714.38.28.695.642.92 1.058.244.494.362 1.042.343 1.593a3.937 3.937 0 01-.467 1.992 3.71 3.71 0 01-1.29 1.319c-.587.353-1.234.6-1.907.727-.765.15-1.542.224-2.32.22-1.885 0-3.372-.412-4.46-1.236-1.09-.824-1.413-2.006-1.413-3.544h3.897c0 .696.197 1.195.59 1.497a2.43 2.43 0 001.524.453c.434.019.866-.08 1.248-.288a1.018 1.018 0 00.48-.948.898.898 0 00-.205-.618 1.982 1.982 0 00-.632-.44 7.884 7.884 0 00-1.097-.412c-.45-.137-.985-.306-1.606-.508a21.019 21.019 0 01-1.565-.535 5.688 5.688 0 01-1.304-.7 2.978 2.978 0 01-.891-1.045 3.427 3.427 0 01-.33-1.593c0-1.374.526-2.39 1.578-3.05 1.053-.659 2.475-.989 4.268-.99a8.335 8.335 0 012.512.344c.652.192 1.26.514 1.784.948.457.39.818.878 1.057 1.429.238.555.36 1.153.357 1.758h-4.145a1.798 1.798 0 00-.425-1.278 1.71 1.71 0 00-1.304-.453 2.04 2.04 0 00-1.098.289.972.972 0 00-.467.892.828.828 0 00.22.591c.185.182.405.327.645.426.344.15.697.279 1.057.384.42.13.905.285 1.455.468z"
          fill="#E91E63"
        />
      </g>
    </svg>
  );
});

export default Icon;

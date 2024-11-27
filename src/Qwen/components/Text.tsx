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
      viewBox="0 0 75 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M11.425 14.13h3.642l1.529 1.795a7.89 7.89 0 002.166-2.832 8.36 8.36 0 00.771-3.562c0-2.03-.624-3.664-1.874-4.905-1.24-1.25-2.884-1.874-4.931-1.874-1.028 0-1.99.186-2.885.558A6.99 6.99 0 007.45 4.932 8.576 8.576 0 005.656 7.67a8.354 8.354 0 00-.625 3.19c0 2.003.611 3.643 1.834 4.919 1.223 1.276 2.779 1.914 4.666 1.914.39 0 .793-.031 1.21-.093.425-.062.868-.16 1.329-.293l-2.645-3.177zM18.07 22l-2.127-2.46c-.753.293-1.48.51-2.18.652a9.84 9.84 0 01-2.073.226c-2.97 0-5.326-.85-7.072-2.552C2.873 16.164 2 13.865 2 10.966c0-1.577.28-3.052.837-4.426a10.148 10.148 0 012.406-3.576A10.427 10.427 0 018.713.758C10.025.253 11.429 0 12.927 0c2.915 0 5.25.86 7.005 2.579 1.755 1.72 2.632 4.01 2.632 6.872 0 1.764-.354 3.399-1.063 4.905a10.156 10.156 0 01-3.031 3.776L21.714 22H18.07zm5.743-14.675h2.884l2.047 6.433.054.16c.248.789.38 1.373.399 1.755.097-.302.221-.62.372-.958.16-.345.354-.713.585-1.103l4.227-7.218 2.06 7.43c.08.275.146.559.2.851.053.293.097.63.133 1.01.132-.372.265-.708.398-1.01.142-.3.28-.562.412-.784l3.816-6.567h3.243L36.097 20.71l-2.127-7.045a8.683 8.683 0 01-.213-.798 17.846 17.846 0 01-.146-.97 69.17 69.17 0 01-.519 1.063c-.15.302-.265.514-.345.638l-4.28 7.112-4.653-13.385zm24.392 4.785h6.5c-.026-.85-.292-1.52-.797-2.007-.496-.497-1.166-.745-2.008-.745-.957 0-1.768.248-2.432.745-.665.496-1.086 1.165-1.263 2.007zm6.34 3.948l2.061 1.608c-.735.966-1.533 1.67-2.392 2.114-.86.443-1.848.665-2.965.665-1.87 0-3.38-.563-4.533-1.689-1.152-1.134-1.728-2.623-1.728-4.466 0-2.162.66-3.935 1.98-5.317 1.33-1.391 3.018-2.087 5.066-2.087 1.71 0 3.07.532 4.08 1.595 1.02 1.055 1.53 2.473 1.53 4.254 0 .15-.01.345-.027.585-.01.23-.027.51-.054.837h-9.61c0 1.143.288 2.056.864 2.738.576.674 1.342 1.01 2.3 1.01.664 0 1.293-.159 1.887-.478a4.633 4.633 0 001.542-1.369zm14.317 3.868l.957-7.244c.018-.133.031-.27.04-.412.009-.151.013-.368.013-.652 0-.824-.2-1.453-.598-1.887-.399-.444-.98-.665-1.741-.665-1.188 0-2.118.385-2.792 1.156-.673.763-1.112 1.937-1.316 3.523l-.797 6.181H59.77l1.661-12.601h2.752l-.213 1.515c.727-.664 1.476-1.156 2.247-1.475a6.5 6.5 0 012.486-.479c1.293 0 2.3.341 3.017 1.024.727.673 1.09 1.622 1.09 2.845 0 .31-.018.673-.053 1.09-.036.407-.089.886-.16 1.435l-.877 6.647h-2.858z" />
    </svg>
  );
});

export default Icon;

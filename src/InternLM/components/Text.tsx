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
      viewBox="0 0 59 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M55.853 19.614h-.541c-.032 0-.058-.006-.089-.006H46.98v-5.355h7.5c.036 0 .067-.005.1-.005h.466c.716 0 1.293-.58 1.293-1.293v-.112c0-.713-.58-1.293-1.293-1.293h-3.509l-.03.003H46.98V6.335h7.445c.9 0 1.35-.375 1.35-1.121v-.505c0-.733-.45-1.097-1.35-1.097H46.98v-.893c0-.595-.442-.892-1.324-.892h-2.068c-.9 0-1.35.375-1.35 1.121v.664h-3.033l.247-.55.029-.137a.354.354 0 00-.138-.276 1.74 1.74 0 00-.33-.182 2.217 2.217 0 00-.414-.114 9.247 9.247 0 00-.359-.068l-1.763-.252a1.64 1.64 0 00-.385-.047c-.625 0-1.049.276-1.27.824l-1.93 4.623c-.073.169-.11.32-.11.457 0 .245.084.435.248.573.166.153.421.268.773.343l1.709.276c.145.03.283.046.413.046.588 0 1.012-.26 1.27-.777l1.02-2.014h4.023v5.218h-5.192l-.031-.002h-3.509c-.715 0-1.293.58-1.293 1.293v.111c0 .716.58 1.293 1.293 1.293h.551c.034 0 .066.005.102.005h8.08v5.356h-8.356c-.031 0-.057.005-.088.005h-.526c-.712 0-1.292.58-1.292 1.293v.112c0 .715.58 1.293 1.292 1.293h.279c.104.013.216.02.335.02h21.369c.12 0 .231-.007.335-.02h.268c.713 0 1.293-.58 1.293-1.293v-.112c0-.715-.58-1.293-1.293-1.293l-.002-.002zM23.267 1.07l.166-.032a1.98 1.98 0 012.326 1.557l.793 4.001a1.98 1.98 0 01-1.558 2.326l-.166.033a1.98 1.98 0 01-2.326-1.557l-.792-4a1.98 1.98 0 011.557-2.327z" />
      <path
        clipRule="evenodd"
        d="M22.258 11.828h3.17l-.002.005c.9 0 1.35.375 1.35 1.121l-.029 7.78c0 .352-.12.627-.358.825-.24.198-.573.296-.994.296l-3.767.014a.744.744 0 00-.043.004.473.473 0 01-.063.006h-3.444a1.29 1.29 0 01-1.29-1.29v-.112c0-.713.577-1.29 1.29-1.29h.532c.055-.006.108-.01.168-.01l1.459.01h1.287c.016 0 .03.002.046.005.015.003.03.005.045.005h.04a.594.594 0 00.598-.595v-3.429a.596.596 0 00-.596-.595h-7.824a.596.596 0 00-.596.598l.026 6.68c0 .332-.099.603-.3.814a.48.48 0 01-.064.06c-.234.179-.554.27-.957.27h-1.876c-.9 0-1.35-.375-1.35-1.121v-6.706a.596.596 0 00-.595-.595H4.054c-.075 0-.143-.006-.21-.01h-.547A1.298 1.298 0 012 13.268v-.112c0-.718.583-1.298 1.298-1.298h.655a.606.606 0 00.05-.002.671.671 0 01.052-.003H8.12c.33 0 .595-.268.595-.595V6.316a.596.596 0 00-.595-.595H4.054l-.034-.002a.525.525 0 00-.034 0h-.689A1.298 1.298 0 012 4.42v-.112c0-.718.583-1.298 1.298-1.298h.507c.08-.007.164-.013.252-.013h4.066c.33 0 .596-.273.596-.595 0-.323.148-.528.442-.62.128-.044.312-.067.552-.067h2.648c.587 0 .881.213.881.64v.047c0 .327.266.595.593.595l5.72.021c.9 0 1.35.364 1.35 1.098v7.14c0 .33.268.596.596.596h.757v-.024zm-6.396.024a.552.552 0 00.551-.552V6.267a.552.552 0 00-.551-.551h-2.07a.552.552 0 00-.552.55V11.3c0 .304.247.552.551.552h2.07z"
      />
    </svg>
  );
});

export default Icon;

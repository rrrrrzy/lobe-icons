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
      viewBox="0 0 110 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M68.535 2.373V21.62H83.17a1.62 1.62 0 001.622-1.618V2.372H68.535zm13.269 1.884v6.798h-10.28V4.257h10.28zm-.454 15.5h-9.826V12.94h10.28v6.37c0 .248-.201.452-.454.452v-.004zM48.487 21.62h14.635a1.62 1.62 0 001.622-1.618V2.372H48.487V21.62zm12.816-1.863h-9.827V12.94h10.28v6.37c0 .248-.2.452-.453.452v-.004zm.453-15.5v6.798h-10.28V4.257h10.28zM13.055 2.031h-3.27l.63 1.867H2.003V5.45h19.73V3.898h-8.046l-.632-1.867zM6.068 14.074v6.194h11.594v-6.194H6.068zm8.685 4.641h-5.78v-3.088h5.78v3.088z" />
      <path d="M20.176 8.925h-2.19l.814-2.39h-3.272l-.813 2.39H9.018l-.813-2.39H4.933l.813 2.39H2v13.072h2.905V10.482H6.88l-.82 2.415h3.273l.82-2.415h3.424l.82 2.415h3.272l-.82-2.415h1.975v7.87c0 2.168-.516 3.648-.516 3.648h2.906s.515-1.087.515-3.647v-7.871c0-.86-.695-1.553-1.553-1.553v-.004zM29.647 6.165l-1.342-3.958h-3.272l1.342 3.958h3.272zM28.644 8.926h-3.272l1.217 3.592a1.6 1.6 0 01.066.745l-1.287 8.734h3.272l1.263-8.572c.052-.355.02-.718-.097-1.06l-1.166-3.44h.004zM42.925 8.925h-1.238l1.48-4.361a1.55 1.55 0 00-1.47-2.046H31.547V4.07h8.519l-1.646 4.855h-6.873v1.553h10.027v7.871c0 2.167-.515 3.648-.515 3.648h2.905s.515-1.087.515-3.648v-7.87c0-.86-.695-1.554-1.553-1.554z" />
      <path d="M32.805 12.414l-.806 5.466c-.28 1.905-.927 3.648-.927 3.648h2.812s.743-.98 1.117-3.648c.235-1.69.806-5.466.806-5.466h-3.002zM36.568 17.88c-.28 1.905-.927 3.648-.927 3.648h2.812s.744-.98 1.117-3.648c.236-1.69.806-5.466.806-5.466h-3.002l-.806 5.466zM89.374 13.611s.018 3.21-.204 5.152c-.217 1.946-.494 3.233-.494 3.233h1.905s.35-.507.64-3.233c.184-1.729.204-5.152.204-5.152h-2.05zM98.36 13.611s-.016 3.21.206 5.152c.217 1.946.493 3.233.493 3.233h-1.906s-.349-.507-.638-3.233c-.184-1.729-.206-5.152-.206-5.152h2.052zM91.965 6.006l.82 2.42h-2.757l-.82-2.42h2.757zM95.767 6.006l-.82 2.42h2.757l.82-2.42h-2.757zM94.529 2.031l.82 2.422h-2.726l-.82-2.422h2.726z" />
      <path d="M98.835 3.242h-9.94v1.57h9.94v-1.57zM98.835 8.425h-9.94v1.57h9.94v-1.57zM108.52 7.404h-7.775v1.57h7.775v-1.57zM98.835 11.117h-9.94v1.57h9.94v-1.57z" />
      <path d="M95.155 9.115h-2.577v12.882h2.577V9.115zM107.725 8.187h-2.633v13.81h2.633V8.187zM100.274 3.874s.115 12.608-.17 14.53a57.55 57.55 0 01-.653 3.593h2.438s.471-.898.847-3.593c.239-1.708.159-15.845.159-15.845l-2.618 1.315h-.003z" />
      <path d="M108.52 3.57V2s-1.778.317-4.58.317c-1.072 0-1.504-.017-3.666-.017v1.57l1.933.018 2.809-.014c2.304-.062 3.504-.304 3.504-.304z" />
    </svg>
  );
});

export default Icon;

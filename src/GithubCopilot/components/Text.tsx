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
      viewBox="0 0 154 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 11.875c0 5.256 3.013 8.506 8.19 8.506 4.76 0 8.027-2.72 8.027-7.722v-1.545h-7.982v2.928h4.095c-.161 1.96-1.68 3.25-4.049 3.25-2.6 0-4.347-1.498-4.347-4.334V10.7c0-2.582 1.518-4.31 4.186-4.31 1.91 0 3.267.922 3.68 2.374h3.865c-.437-3.366-3.427-5.625-7.499-5.625C5.29 3.138 2 6.366 2 11.875zm17.308-5.44h3.496V3h-3.496v3.435zm0 13.715h3.496V7.795h-3.496V20.15zm10.544-9.52h2.438V7.795h-2.438V3.922h-3.496v3.873H24.17v2.835h2.186v6.8c0 1.637.69 2.72 2.76 2.72h3.174v-2.766h-2.438V10.63zm3.994 9.52h3.727v-7.076h7.568v7.076h3.726V3.346h-3.726v6.777h-7.568V3.346h-3.727V20.15zM62.385 7.795h-3.497v6.523c0 1.868-1.012 3.205-2.668 3.205-1.38 0-2.162-.83-2.162-2.56V7.796h-3.52v7.722c0 2.95 1.357 4.864 4.118 4.864 1.955 0 3.29-.945 4.002-2.49h.207l.46 2.26h3.06V7.794zm1.698 12.355h3.06l.436-2.213h.207c.713 1.591 2.3 2.444 4.072 2.444 3.174 0 5.015-2.374 5.015-6.385 0-4.057-1.887-6.432-5.084-6.432-1.978 0-3.428 1.014-4.003 2.49h-.207V3h-3.496v17.15zm3.496-5.624v-1.06c0-1.845 1.173-3.043 2.99-3.043 1.657 0 2.738.853 2.738 2.581v1.983c0 1.521-.874 2.559-2.714 2.559-1.864 0-3.014-1.222-3.014-3.02zm21.8 5.855c4.21 0 7.177-2.351 7.683-6.063h-3.151c-.46 2.098-2.186 3.389-4.486 3.389-2.852 0-4.67-1.867-4.67-4.518v-2.743c0-2.882 1.887-4.634 4.716-4.634 2.53 0 4.072 1.36 4.44 3.366h3.151c-.368-3.665-3.243-6.063-7.499-6.063-5.038 0-7.982 3.274-7.982 8.668 0 5.348 2.898 8.598 7.798 8.598zm8.533-6.34c0 3.92 2.346 6.34 5.98 6.34 3.796 0 6.004-2.536 6.004-6.34 0-4.056-2.484-6.338-6.003-6.338-3.635 0-5.981 2.397-5.981 6.339zm2.898.992V13.12c0-1.89 1.22-3.066 3.083-3.066 1.817 0 3.082 1.152 3.082 3.066v1.913c0 1.96-1.288 2.997-3.082 2.997-1.749 0-3.083-1.015-3.083-2.997zM111.018 24h2.853v-6.132h.184c.667 1.453 2.116 2.398 4.186 2.398 3.083 0 4.992-2.26 4.992-6.293 0-3.942-1.863-6.27-4.992-6.27-1.863 0-3.427.852-4.186 2.397h-.184l-.345-2.167h-2.508V24zm6.211-6.063c-2.024 0-3.358-1.314-3.358-3.342v-1.222c0-2.005 1.31-3.342 3.381-3.342 2.002 0 3.037 1.152 3.037 2.881v2.144c0 1.815-1.16 2.849-2.973 2.88l-.087.001zm7.1-11.733h2.83V3.115h-2.83v3.09zm0 13.946h2.83V7.933h-2.83V20.15zm4.338 0h2.83V3.115h-2.83V20.15zm9.927-12.447c3.52 0 6.004 2.282 6.004 6.339 0 3.803-2.208 6.339-6.004 6.339-3.634 0-5.98-2.42-5.98-6.34 0-3.941 2.346-6.338 5.98-6.338zm10.922-3.689v3.919H152v2.328h-2.484v7.607H152v2.282h-2.99c-1.749 0-2.324-.922-2.324-2.282v-7.607h-2.185V7.933h2.185V4.014h2.83zm-10.922 6.04c-1.863 0-3.082 1.175-3.082 3.066v1.913c0 1.982 1.334 2.997 3.082 2.997 1.795 0 3.083-1.038 3.083-2.997V13.12c0-1.914-1.265-3.066-3.083-3.066z" />
    </svg>
  );
});

export default Icon;

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
      viewBox="0 0 97 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M86.82 21.345v-2.14h2.718V4.169H86.82v-2.14h8.154v2.14h-2.718v15.036h2.718v2.14H86.82zM67.1 21.345L74.358 2h3.036l7.23 19.345h-2.892l-1.475-4.222h-8.79l-1.475 4.222H67.1zm5.205-6.564h7.113L75.862 4.747l-3.557 10.034zM53 24.229V5.23h1.764l.665 2.256a4.926 4.926 0 011.822-1.793C58.02 5.231 58.966 5 60.084 5c1.1 0 2.111.299 3.036.896.945.579 1.697 1.427 2.256 2.545.578 1.099.867 2.438.867 4.02 0 1.56-.289 2.9-.867 4.019-.56 1.118-1.31 1.975-2.256 2.573a5.619 5.619 0 01-3.036.867c-1.118 0-2.062-.221-2.833-.665a5.08 5.08 0 01-1.822-1.85v6.824H53zm6.448-6.39c1.234 0 2.217-.473 2.95-1.417.751-.945 1.127-2.265 1.127-3.962 0-1.715-.376-3.036-1.127-3.961-.733-.945-1.716-1.417-2.95-1.417-1.233 0-2.226.472-2.978 1.417-.733.925-1.099 2.246-1.099 3.961 0 1.697.366 3.017 1.099 3.962.752.944 1.745 1.417 2.978 1.417zM42.971 21.692c-1.504 0-2.776-.328-3.817-.983a6.737 6.737 0 01-2.4-2.69c-.54-1.137-.81-2.41-.81-3.817 0-1.522.309-2.833.926-3.932.617-1.118 1.446-1.976 2.486-2.574 1.06-.616 2.246-.925 3.557-.925 1.138 0 2.14.231 3.007.694a5.94 5.94 0 012.14 1.822 7.1 7.1 0 011.243 2.573 8.57 8.57 0 01.29 2.979H38.547c.039 1.195.299 2.14.78 2.833.502.694 1.09 1.186 1.765 1.475.674.27 1.3.405 1.879.405.81 0 1.484-.125 2.024-.376.56-.27 1.003-.617 1.33-1.041l2.342.694c-.52.829-1.262 1.513-2.226 2.053s-2.12.81-3.47.81zm-4.395-8.79h8.443c0-.675-.173-1.321-.52-1.938a3.923 3.923 0 00-1.417-1.504c-.598-.405-1.32-.607-2.169-.607-.713 0-1.388.135-2.024.405a3.7 3.7 0 00-1.59 1.301c-.405.598-.646 1.378-.723 2.342zM27.384 21.692c-1.504 0-2.776-.328-3.817-.983a6.736 6.736 0 01-2.4-2.69c-.54-1.137-.81-2.41-.81-3.817 0-1.522.309-2.833.925-3.932.617-1.118 1.446-1.976 2.487-2.574 1.06-.616 2.246-.925 3.557-.925 1.137 0 2.14.231 3.007.694a5.94 5.94 0 012.14 1.822c.578.752.993 1.61 1.243 2.573a8.57 8.57 0 01.29 2.979H22.96c.038 1.195.298 2.14.78 2.833.502.694 1.09 1.186 1.764 1.475.675.27 1.301.405 1.88.405.81 0 1.484-.125 2.024-.376.559-.27 1.002-.617 1.33-1.041l2.342.694c-.52.829-1.263 1.513-2.226 2.053-.964.54-2.121.81-3.47.81zm-4.396-8.79h8.444c0-.675-.174-1.321-.52-1.938a3.923 3.923 0 00-1.418-1.504c-.597-.405-1.32-.607-2.168-.607a5.13 5.13 0 00-2.024.405 3.7 3.7 0 00-1.59 1.301c-.405.598-.646 1.378-.724 2.342zM2 21.345V2.029h5.263c1.542 0 2.949.164 4.221.492 1.292.308 2.41.828 3.355 1.56.944.733 1.677 1.726 2.197 2.98.52 1.233.78 2.766.78 4.597 0 1.85-.26 3.402-.78 4.655-.52 1.234-1.253 2.227-2.197 2.979-.945.732-2.063 1.262-3.355 1.59-1.272.308-2.68.463-4.221.463H2zm2.718-2.285h2.487a17.56 17.56 0 002.891-.231c.945-.174 1.784-.501 2.516-.983.752-.501 1.34-1.244 1.764-2.227.443-1.002.665-2.323.665-3.961 0-1.639-.222-2.94-.665-3.904-.424-.983-1.012-1.715-1.764-2.197-.732-.502-1.571-.83-2.516-.983-.925-.174-1.889-.26-2.891-.26H4.718V19.06z" />
    </svg>
  );
});

export default Icon;

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
      viewBox="0 0 102 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M9.589 21.996c3.12 0 5.85-1.56 6.929-4.709.21-.63-.091-1.05-.69-1.05h-1.17c-.54 0-.9.24-1.141.75-.93 1.83-2.22 2.488-3.839 2.488-2.88 0-4.65-2.01-4.65-5.369 0-3.358 1.831-5.369 4.589-5.369 1.68 0 3.06.72 3.93 2.43.27.51.598.749 1.14.749h1.17c.6 0 .9-.39.69-.96-1.259-3.42-4.08-4.74-6.958-4.74C5.24 6.217 2 9.428 2 14.107c0 4.68 3.09 7.89 7.589 7.89zm78.496-9.27c.389-2.55 2.129-4.14 4.499-4.14 2.37 0 4.14 1.62 4.349 4.14h-8.848zm4.62 9.27c2.76 0 5.519-1.29 6.869-4.199.33-.69.03-1.17-.57-1.17h-1.109c-.539 0-.87.239-1.14.72-.9 1.589-2.46 2.249-4.048 2.249-2.73 0-4.5-1.86-4.71-4.889h11.01c.6 0 .99-.33.99-.96-.12-4.71-3.178-7.528-7.409-7.528-4.23 0-7.589 3.06-7.589 7.89 0 4.829 3.27 7.889 7.71 7.889l-.005-.002zm-17.458-7.498h.99c.6 0 .93-.33 1.02-.961.572-4.053 2.944-4.59 5.467-4.47.54.026.982-.39.982-.93v-.93c0-.599-.3-.96-.9-.99-2.232-.085-4.224.681-5.375 2.85-.063.119-.241.087-.256-.046l-.186-1.636c-.06-.599-.39-.9-.99-.9h-4.53c-.529 0-.96.43-.96.961v.51c0 .53.43.961.96.961h1.86c.53 0 .962.43.962.96v3.66c0 .529.43.96.96.96h-.004zm-4.048 7.2h9.387c.6 0 .961-.36.961-.962v-.51c0-.598-.36-.96-.96-.96h-2.4c-.6 0-.961-.36-.961-.961v-1.65c0-.6-.36-.962-.961-.962h-1.02c-.599 0-.96.36-.96.961v1.651c0 .599-.36.96-.962.96h-2.129c-.599 0-.96.36-.96.962v.51c0 .599.36.96.96.96h.005zm-14.489-8.97c.39-2.55 2.13-4.139 4.5-4.139s4.14 1.619 4.349 4.14H56.71zm4.62 9.27c2.76 0 5.52-1.289 6.87-4.199.33-.69.03-1.17-.57-1.17h-1.108c-.54 0-.87.239-1.141.72-.9 1.589-2.46 2.249-4.049 2.249-2.73 0-4.499-1.86-4.708-4.889h11.009c.599 0 .99-.33.99-.96-.12-4.71-3.178-7.528-7.41-7.528-4.23 0-7.588 3.06-7.588 7.89 0 4.829 3.27 7.889 7.71 7.889l-.005-.002zm-34.703 0c4.5 0 7.71-3.33 7.71-7.89s-3.21-7.89-7.71-7.89c-4.499 0-7.71 3.391-7.71 7.89 0 1.05.18 2.22.72 3.51.271.63.781.719 1.32.33l.87-.631c.451-.33.57-.72.42-1.29-.24-.748-.301-1.409-.301-1.978 0-3.149 1.89-5.31 4.68-5.31 2.788 0 4.678 2.13 4.678 5.37s-1.86 5.368-4.62 5.368c-.96 0-1.86-.18-2.94-.99-.45-.36-.869-.42-1.35-.06l-.66.481c-.54.39-.598.93-.09 1.35 1.56 1.26 3.358 1.74 4.98 1.74h.003zm11.517-.3h.99c.53 0 .962-.43.962-.962V13.57c0-3.029 1.618-4.83 4.139-4.83 2.28 0 3.6 1.5 3.6 4.26v7.74c0 .529.43.96.96.96h1.02c.53 0 .961-.43.961-.96v-8.22c0-4.048-2.07-6.298-5.578-6.298-2.39 0-3.801.978-4.855 2.338a.136.136 0 01-.243-.082V1.96A.97.97 0 0039.135 1h-.99c-.53 0-.962.43-.962.96v18.777c0 .529.43.96.961.96z" />
    </svg>
  );
});

export default Icon;

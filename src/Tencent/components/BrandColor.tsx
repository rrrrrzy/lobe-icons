'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 153 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M137.276 7.755a245.047 245.047 0 01-1.608 9.454 48.593 48.593 0 002.679-2.12l-.49 2.877A40.708 40.708 0 01132.074 22c.87-4.034 1.674-8.315 2.253-12.26h-2.098l.359-1.983h4.687v-.002zm-113.601.152c5.149 0 6.198 3.604 5.684 6.556-.11.634-.264 1.143-.392 1.432H18.374c-.32 2.447 1.718 3.512 4.282 3.512 1.84 0 4.01-.683 5.717-1.902l-.543 3.081c-1.747.97-3.896 1.402-6.194 1.402-5.142 0-7.683-3.025-6.966-7.157.648-3.72 3.91-6.924 9.005-6.924zm48.084 0c5.15 0 6.2 3.604 5.688 6.556-.079.49-.21.97-.392 1.432H66.461c-.318 2.447 1.718 3.512 4.28 3.512 1.84 0 4.012-.683 5.717-1.902l-.541 3.081c-1.747.97-3.898 1.402-6.194 1.402-5.142 0-7.684-3.025-6.966-7.157.648-3.72 3.908-6.924 9.002-6.924zm-13.788.008c1.466-.011 2.921.26 4.284.801l-.622 3.667c-1.064-1.4-2.751-1.815-3.997-1.815-3.055 0-5.399 1.9-5.815 4.37-.481 2.765 1.585 4.351 4.313 4.351 1.338 0 3.226-.31 4.618-1.805l-.647 3.603c-.892.33-3.251.898-5.225.898-4.967 0-7.9-3.03-7.174-7.215.703-4.034 4.692-6.856 10.265-6.856zm91.58-5.31c1.363 0 1.586.424 1.385 1.539-.892 5.15-1.942 10.478-2.946 15.583h2.545l-.827 2.007h-4.777c.626-3.144 1.25-6.465 1.809-9.698h-3.371c-.536 3.233-1.16 6.465-1.785 9.698h-2.702c.648-3.21 1.272-6.487 1.786-9.698h-2.477l.334-1.984h2.523l.87-4.771 2.366 1.382-.58 3.389h3.393c.313-1.584.625-3.211.915-4.816.11-.579-.134-.648-.648-.648h-7.789l-.446-1.982h10.423zm-23.268-.58c-.044.958-.179 2.095-.4 2.988h.914c.358-.803.715-1.763 1.004-2.61h2.3c-.34.88-.705 1.75-1.094 2.61h1.608l-.425 1.762h-4.799c-.09.289-.268.713-.424 1.002h5.893l-.402 1.694h-3.436c.736 1.093 2.5 1.92 3.86 2.208l-.758 1.917c-.938-.2-1.963-.647-2.79-1.158l-.513 2.317h1.093c.738 0 1.272.157 1.139 1.071-.246 1.65-.692 3.945-1.05 5.885h-5.937l-.49-1.761h4.375c.2-.936.445-2.074.579-3.01.046-.311-.088-.423-.401-.423h-7.411l.67-3.589c-.68.298-1.392.522-2.12.668l.468-2.162c1.384-.334 2.79-1.004 3.66-1.962h-3.303l.38-1.693h4.084c.223-.313.403-.715.492-1.005h-4.422l.335-1.76h1.585l-.58-2.61h2.254l.536 2.61h.782a13.04 13.04 0 00.446-2.988h2.298v-.001zm-9.062.559c1.094 0 1.54.179 1.34 1.225-1.094 5.998-2.076 11.928-3.193 17.902h-2.254c.447-2.251.96-4.637 1.339-6.843h-1.606a679.432 679.432 0 01-1.496 6.843h-2.254c1.897-6.042 2.834-12.26 3.905-19.127h4.219zM41.378 7.908c2.762 0 5.386 1.515 4.645 5.777l-1.412 8.01h-4.007l1.34-7.61c.335-1.934-.26-3.407-2.449-3.407-1.592 0-2.848.959-3.446 2-.172.28-.305.693-.372 1.082l-1.394 7.934h-4.008l1.646-9.474c.272-1.557.446-3.144.575-4.312l3.53 2.082h.093c.882-1.047 2.757-2.082 5.26-2.082zm48.086 0c2.76 0 5.386 1.515 4.644 5.777l-1.41 8.01H88.69l1.339-7.61c.336-1.934-.258-3.407-2.449-3.407-1.592 0-2.848.959-3.446 2-.172.28-.306.693-.372 1.082l-1.394 7.934H78.36l1.646-9.474c.272-1.557.447-3.144.577-4.312L84.11 9.99h.092c.884-1.047 2.757-2.082 5.26-2.082zM20.71 2l-.497 2.864H13.08l-2.96 16.83H6.11l2.961-16.83H2L2.5 2h18.211-.001zm86.905 8.753h-4.999l-1.927 10.941H96.68l1.923-10.941h-2.288L94.539 8.21h4.514l.668-3.799 7.894 6.34zm17.597 6.611v.022l-.379 1.694h-7.568l-.312-1.716h8.26zm-.201-4.615h-4.888l1.475.67-.27 1.336h3.238l.445-2.006zM23.02 10.234c-2.467 0-3.822 1.905-4.24 3.285h6.971c.235-1.248-.05-3.285-2.732-3.285zm48.083 0c-2.463 0-3.819 1.905-4.236 3.285h6.971c.234-1.248-.05-3.285-2.735-3.285zm44.354-.694h-1.54a346.945 346.945 0 01-.714 3.566h1.607l.648-3.566h-.001zm9.353-.07h-.827a9.613 9.613 0 01-1.696 1.608h3.549c-.38-.425-.78-1.116-1.026-1.606v-.001zm-8.886-5.036h-1.117c-.178 1.07-.357 2.184-.579 3.343h1.517l.558-2.919c.069-.336-.066-.424-.38-.424zm21.06-2.43c.358 1.515.782 3.143 1.117 4.703h-2.657c-.29-1.515-.648-3.165-.981-4.703h2.521z"
        fill="#0052D9"
        fillRule="nonzero"
      />
    </svg>
  );
});

export default Icon;

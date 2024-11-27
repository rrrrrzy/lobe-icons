'use client';

import { forwardRef } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  const [a, b, c, d, e, f, g, h, i, j, k, l, m] = useFillIds(`${TITLE}-brand`, 13);
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
      <defs>
        <linearGradient id={a.id} x1="75.904%" x2="33.275%" y1="89.153%" y2="23.044%">
          <stop offset=".06%" stopColor="#0867DF" />
          <stop offset="45.39%" stopColor="#0668E1" />
          <stop offset="100%" stopColor="#0064E0" />
        </linearGradient>
        <linearGradient id={b.id} x1="21.67%" x2="97.068%" y1="75.837%" y2="24.022%">
          <stop offset="13.23%" stopColor="#0064DF" />
          <stop offset="99.88%" stopColor="#0064E0" />
        </linearGradient>
        <linearGradient id={c.id} x1="38.247%" x2="60.91%" y1="89.127%" y2="16.131%">
          <stop offset="1.47%" stopColor="#0072EC" />
          <stop offset="68.81%" stopColor="#0064DF" />
        </linearGradient>
        <linearGradient id={d.id} x1="47.027%" x2="52.153%" y1="90.19%" y2="15.745%">
          <stop offset="7.31%" stopColor="#007CF6" />
          <stop offset="99.43%" stopColor="#0072EC" />
        </linearGradient>
        <linearGradient id={e.id} x1="52.155%" x2="47.591%" y1="58.289%" y2="37.023%">
          <stop offset="7.31%" stopColor="#007FF9" />
          <stop offset="100%" stopColor="#007CF6" />
        </linearGradient>
        <linearGradient id={f.id} x1="37.689%" x2="61.961%" y1="12.556%" y2="63.605%">
          <stop offset="7.31%" stopColor="#007FF9" />
          <stop offset="100%" stopColor="#0082FB" />
        </linearGradient>
        <linearGradient id={g.id} x1="42.496%" x2="59.964%" y1="56.072%" y2="27.099%">
          <stop offset="0%" stopColor="#007FF8" />
          <stop offset="100%" stopColor="#0082FB" />
        </linearGradient>
        <linearGradient id={h.id} x1="43.753%" x2="57.613%" y1="6.235%" y2="98.514%">
          <stop offset="0%" stopColor="#0082FB" />
          <stop offset="99.95%" stopColor="#0081FA" />
        </linearGradient>
        <linearGradient id={i.id} x1="60.07%" x2="39.865%" y1="4.661%" y2="69.077%">
          <stop offset="6.19%" stopColor="#0081FA" />
          <stop offset="100%" stopColor="#0080F9" />
        </linearGradient>
        <linearGradient id={j.id} x1="30.254%" x2="61.097%" y1="59.32%" y2="33.244%">
          <stop offset="0%" stopColor="#027AF3" />
          <stop offset="100%" stopColor="#0080F9" />
        </linearGradient>
        <linearGradient id={k.id} x1="20.433%" x2="82.112%" y1="50.001%" y2="50.001%">
          <stop offset="0%" stopColor="#0377EF" />
          <stop offset="99.94%" stopColor="#0279F1" />
        </linearGradient>
        <linearGradient id={l.id} x1="40.289%" x2="72.427%" y1="35.298%" y2="57.811%">
          <stop offset=".19%" stopColor="#0471E9" />
          <stop offset="100%" stopColor="#0377EF" />
        </linearGradient>
        <linearGradient id={m.id} x1="32.228%" x2="68.028%" y1="19.719%" y2="84.908%">
          <stop offset="27.65%" stopColor="#0867DF" />
          <stop offset="100%" stopColor="#0471E9" />
        </linearGradient>
      </defs>
      <g>
        <path d="M38.337 2.641h3.752l6.38 11.57 6.38-11.57h3.671v19.011H55.46V7.082l-5.594 10.09h-2.872l-5.595-10.09v14.57h-3.06V2.642zm30.058 19.353c-1.418 0-2.664-.314-3.739-.944a6.594 6.594 0 01-2.513-2.614c-.6-1.113-.9-2.39-.9-3.829 0-1.457.293-2.748.88-3.87.587-1.123 1.402-2 2.445-2.635 1.043-.633 2.242-.95 3.596-.95 1.346 0 2.504.319 3.475.957.97.638 1.718 1.532 2.242 2.682.523 1.15.785 2.499.785 4.047v.842h-10.39c.19 1.159.658 2.07 1.403 2.736.745.665 1.686.998 2.824.998.912 0 1.698-.136 2.357-.407a5.997 5.997 0 001.856-1.236l1.625 1.996c-1.616 1.485-3.599 2.227-5.946 2.227zm2.235-11.278c-.642-.656-1.481-.984-2.52-.984-1.011 0-1.858.335-2.54 1.005-.681.67-1.113 1.57-1.293 2.702h7.45c-.09-1.159-.456-2.066-1.097-2.723zm7.748-.712h-2.817V7.492h2.817V3.337h2.953v4.155h4.28v2.512h-4.28v6.369c0 1.059.18 1.815.542 2.267.36.453.98.68 1.855.68.389 0 .718-.016.99-.048l.426-.056c.15-.022.305-.046.467-.073v2.485a8.876 8.876 0 01-2.452.34c-3.187 0-4.781-1.748-4.781-5.242v-6.722zM101 21.654h-2.899v-1.982a5.24 5.24 0 01-1.964 1.718c-.795.403-1.698.604-2.71.604-1.245 0-2.35-.319-3.311-.957-.962-.638-1.718-1.517-2.269-2.635-.55-1.118-.826-2.396-.826-3.836 0-1.448.28-2.73.84-3.843.56-1.113 1.334-1.987 2.323-2.62.989-.634 2.124-.951 3.406-.951.967 0 1.834.188 2.601.563a5.145 5.145 0 011.91 1.596V7.49H101v14.164zm-2.953-9.206c-.316-.806-.815-1.442-1.497-1.908-.682-.466-1.47-.7-2.363-.7-1.265 0-2.272.426-3.021 1.277-.75.851-1.125 2-1.124 3.45 0 1.457.36 2.611 1.083 3.462.722.851 1.702 1.276 2.94 1.276.911 0 1.724-.235 2.438-.706a3.987 3.987 0 001.544-1.9v-4.251z" />
        <path
          d="M8.627 0h-.029l-.04 3.27.028-.001c2.146 0 3.81 1.696 7.43 7.807l.22.372.014.024 2.026-3.047-.014-.023a60.949 60.949 0 00-1.374-2.146 35.014 35.014 0 00-1.47-2.036C13.026 1.165 11.024 0 8.628 0z"
          fill={a.fill}
          transform="translate(2 2)"
        />
        <path
          d="M8.598 0C6.19.013 4.062 1.573 2.525 3.961a5.44 5.44 0 00-.013.021l2.82 1.54.015-.022c.897-1.354 2.014-2.218 3.211-2.23l.027-.001L8.627 0h-.03z"
          fill={b.fill}
          transform="translate(2 2)"
        />
        <path
          d="M2.525 3.963l-.013.02C1.502 5.56.749 7.494.342 9.58l-.005.027 3.17.75c0-.01.002-.018.004-.028.339-1.833.984-3.533 1.822-4.806l.013-.02-2.82-1.54z"
          fill={c.fill}
          transform="translate(2 2)"
        />
        <path
          d="M3.511 10.33L.342 9.582l-.005.027A18.541 18.541 0 000 13.09v.028l3.25.292v-.029a15.728 15.728 0 01.262-3.05z"
          fill={d.fill}
          transform="translate(2 2)"
        />
        <path
          d="M3.349 14.422a6.822 6.822 0 01-.099-1.017v-.028L0 13.085v.031a11.105 11.105 0 00.183 2.064l3.17-.731a5.131 5.131 0 01-.004-.027z"
          fill={e.fill}
          transform="translate(2 2)"
        />
        <path
          d="M4.09 16.112c-.354-.387-.605-.945-.736-1.659l-.005-.027-3.171.731.005.027c.24 1.262.71 2.313 1.383 3.108l.018.022 2.524-2.181a2.635 2.635 0 01-.019-.02z"
          fill={f.fill}
          transform="translate(2 2)"
        />
        <path
          d="M15.484 9.067a399.491 399.491 0 00-3.069 4.781c-2.545 4-3.426 4.897-4.843 4.897-.591 0-1.085-.211-1.464-.615a2.313 2.313 0 01-.019-.02l-2.523 2.18.018.021C4.514 21.397 5.825 22 7.448 22c2.456 0 4.222-1.16 7.361-6.662l2.21-3.913a51.6 51.6 0 00-1.535-2.358z"
          fill="#0082FB"
        />
        <path
          d="M16.89 2.432a19.722 19.722 0 00-1.471 1.79c.472.604.96 1.281 1.47 2.038.6-.93 1.16-1.682 1.71-2.258l.019-.02-1.728-1.55z"
          fill={g.fill}
          transform="translate(2 2)"
        />
        <path
          d="M28.166 4.142C26.834 2.792 25.245 2 23.546 2c-1.79 0-3.297.984-4.656 2.43a6.451 6.451 0 00-.02.02L20.6 6l.019-.021c.895-.934 1.762-1.4 2.722-1.4 1.034 0 2.001.488 2.84 1.343l.019.02 1.987-1.78-.02-.02z"
          fill="#0082FB"
        />
        <path
          d="M30.019 12.656c-.075-4.333-1.588-8.207-3.833-10.495l-.02-.02-1.987 1.78.02.02c1.689 1.74 2.848 4.975 2.953 8.714v.028l2.867.001v-.028z"
          fill={h.fill}
          transform="translate(2 2)"
        />
        <path
          d="M30.02 12.687l-.001-.028h-2.867v.027c.005.176.008.352.008.53 0 1.02-.152 1.843-.461 2.438l-.014.027 2.137 2.228.016-.024c.776-1.2 1.183-2.868 1.183-4.89 0-.103 0-.205-.002-.308z"
          fill={i.fill}
          transform="translate(2 2)"
        />
        <path
          d="M26.7 15.65l-.015.026c-.267.502-.649.836-1.147.982l.974 3.079a4.372 4.372 0 00.547-.229 4.45 4.45 0 001.709-1.522 4.18 4.18 0 00.055-.081l.015-.025-2.139-2.23z"
          fill={j.fill}
          transform="translate(2 2)"
        />
        <path
          d="M24.917 16.742c-.327 0-.615-.049-.897-.175l-.998 3.151c.56.192 1.16.279 1.826.279.615 0 1.179-.092 1.69-.27l-.974-3.077c-.21.063-.428.094-.647.092z"
          fill={k.fill}
          transform="translate(2 2)"
        />
        <path
          d="M22.92 15.667l-.018-.021-2.296 2.393.02.02c.797.853 1.56 1.382 2.423 1.672l.997-3.15c-.364-.156-.716-.44-1.125-.914z"
          fill={l.fill}
          transform="translate(2 2)"
        />
        <path
          d="M22.902 15.643c-.688-.802-1.54-2.139-2.88-4.3l-1.746-2.92-.014-.023-2.026 3.046.014.024 1.237 2.087c1.2 2.012 2.177 3.467 3.12 4.48l.019.02 2.295-2.392a2.945 2.945 0 01-.019-.022z"
          fill={m.fill}
          transform="translate(2 2)"
        />
      </g>
    </svg>
  );
});

export default Icon;

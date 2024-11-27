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
      viewBox="0 0 153 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 18.578V1.824h3.767v6.45h5.765v-6.45h3.792v16.754h-3.792v-6.99H5.767v6.99H2zm20.78.309c-1.383 0-2.387-.459-3.01-1.375-.624-.917-.935-2.172-.935-3.765V5.833H22.6v7.426c0 .925.128 1.559.385 1.902.256.342.657.514 1.204.514.461 0 .863-.112 1.204-.335.342-.222.692-.582 1.05-1.079V5.833h3.767v12.745h-3.074l-.282-1.773h-.077a6.852 6.852 0 01-1.743 1.516c-.632.377-1.383.566-2.254.566zM38.053 24c-.99 0-1.892-.116-2.703-.347-.812-.231-1.452-.582-1.922-1.053-.47-.472-.705-1.084-.705-1.838 0-.53.158-1.01.474-1.439.316-.428.765-.805 1.346-1.13v-.103a3.077 3.077 0 01-.833-.86c-.23-.352-.346-.785-.346-1.299 0-.462.137-.903.41-1.323.273-.42.615-.775 1.025-1.066v-.103c-.461-.308-.863-.754-1.204-1.336-.342-.583-.513-1.242-.513-1.979 0-1.01.248-1.858.743-2.544a4.561 4.561 0 011.948-1.541 6.46 6.46 0 012.562-.514 6.8 6.8 0 011.038.077c.333.051.645.128.935.231h4.638v2.75h-2.127v.102c.17.223.299.467.384.733.086.265.129.56.129.886 0 .96-.223 1.752-.667 2.377-.444.625-1.046 1.092-1.806 1.4-.76.309-1.602.463-2.524.463-.222 0-.461-.022-.717-.064a6.978 6.978 0 01-.82-.193 1.64 1.64 0 00-.346.411c-.077.137-.116.317-.116.54 0 .308.146.544.436.706.29.163.786.244 1.486.244h2.05c1.572 0 2.772.253 3.6.758.829.506 1.243 1.332 1.243 2.48 0 .874-.29 1.658-.871 2.351-.581.694-1.401 1.238-2.46 1.632-1.06.394-2.315.591-3.767.591zm.282-11.743c.342 0 .64-.081.897-.244.256-.163.461-.398.615-.707.153-.308.23-.702.23-1.182 0-.685-.166-1.199-.5-1.542a1.663 1.663 0 00-1.242-.513c-.495 0-.91.17-1.243.513-.333.343-.5.857-.5 1.542 0 .48.082.874.244 1.182.162.309.372.544.628.707.256.163.546.244.871.244zm.307 9.379c.564 0 1.064-.069 1.5-.206.435-.137.78-.325 1.037-.565.256-.24.385-.505.385-.796 0-.412-.171-.681-.513-.81-.342-.128-.82-.193-1.435-.193h-1.307l-.49-.006-.31-.013a5.681 5.681 0 01-.993-.135c-.24.206-.415.407-.526.604a1.311 1.311 0 00-.166.655c0 .48.26.844.781 1.092.521.249 1.2.373 2.037.373zM51.735 24c-.99 0-1.892-.116-2.703-.347-.812-.231-1.452-.582-1.922-1.053-.47-.472-.705-1.084-.705-1.838 0-.53.158-1.01.474-1.439.316-.428.765-.805 1.346-1.13v-.103a3.077 3.077 0 01-.833-.86c-.23-.352-.346-.785-.346-1.299 0-.462.137-.903.41-1.323.273-.42.615-.775 1.025-1.066v-.103c-.461-.308-.863-.754-1.204-1.336-.342-.583-.513-1.242-.513-1.979 0-1.01.248-1.858.743-2.544a4.561 4.561 0 011.948-1.541 6.46 6.46 0 012.562-.514 6.8 6.8 0 011.038.077c.333.051.644.128.935.231h4.638v2.75H56.5v.102c.17.223.299.467.384.733.086.265.128.56.128.886 0 .96-.222 1.752-.666 2.377-.444.625-1.046 1.092-1.806 1.4-.76.309-1.602.463-2.524.463-.222 0-.461-.022-.718-.064a6.978 6.978 0 01-.82-.193 1.64 1.64 0 00-.345.411c-.077.137-.116.317-.116.54 0 .308.145.544.436.706.29.163.786.244 1.486.244h2.05c1.571 0 2.771.253 3.6.758.828.506 1.243 1.332 1.243 2.48 0 .874-.29 1.658-.872 2.351-.58.694-1.4 1.238-2.46 1.632-1.058.394-2.314.591-3.766.591zm.282-11.743c.341 0 .64-.081.897-.244.256-.163.46-.398.615-.707.153-.308.23-.702.23-1.182 0-.685-.166-1.199-.5-1.542a1.663 1.663 0 00-1.242-.513c-.496 0-.91.17-1.243.513-.333.343-.5.857-.5 1.542 0 .48.082.874.244 1.182.162.309.371.544.628.707.256.163.546.244.87.244zm.307 9.379c.564 0 1.064-.069 1.5-.206.435-.137.78-.325 1.037-.565.256-.24.384-.505.384-.796 0-.412-.17-.681-.512-.81-.342-.128-.82-.193-1.435-.193h-1.307l-.49-.006-.31-.013a5.681 5.681 0 01-.993-.135c-.24.206-.415.407-.526.604a1.311 1.311 0 00-.166.655c0 .48.26.844.781 1.092.521.249 1.2.373 2.037.373zm8.559-3.058V5.833h3.766v12.745h-3.766zm1.87-14.62c-.632 0-1.144-.18-1.537-.54-.393-.36-.59-.84-.59-1.44 0-.599.197-1.079.59-1.438.393-.36.905-.54 1.537-.54.632 0 1.145.18 1.537.54.393.36.59.839.59 1.439 0 .6-.197 1.079-.59 1.439-.392.36-.905.54-1.537.54zm5.202 14.62V5.833h3.074l.257 1.619h.102a8.268 8.268 0 011.794-1.362c.666-.377 1.426-.565 2.28-.565 1.401 0 2.409.458 3.024 1.374.615.917.922 2.172.922 3.765v7.914h-3.766v-7.426c0-.925-.124-1.559-.372-1.901-.248-.343-.645-.514-1.191-.514-.479 0-.889.107-1.23.32a7.203 7.203 0 00-1.128.913v8.608h-3.766zM87.147 24c-.991 0-1.892-.116-2.704-.347-.811-.231-1.452-.582-1.922-1.053-.47-.472-.704-1.084-.704-1.838 0-.53.158-1.01.474-1.439.316-.428.764-.805 1.345-1.13v-.103a3.077 3.077 0 01-.833-.86c-.23-.352-.346-.785-.346-1.299 0-.462.137-.903.41-1.323.274-.42.615-.775 1.025-1.066v-.103c-.46-.308-.862-.754-1.204-1.336-.342-.583-.512-1.242-.512-1.979 0-1.01.247-1.858.743-2.544a4.561 4.561 0 011.947-1.541 6.46 6.46 0 012.562-.514 6.8 6.8 0 011.038.077c.333.051.645.128.935.231h4.638v2.75h-2.127v.102c.171.223.3.467.385.733.085.265.128.56.128.886 0 .96-.222 1.752-.666 2.377-.444.625-1.047 1.092-1.807 1.4-.76.309-1.601.463-2.524.463-.222 0-.46-.022-.717-.064a6.978 6.978 0 01-.82-.193 1.64 1.64 0 00-.346.411c-.077.137-.115.317-.115.54 0 .308.145.544.435.706.29.163.786.244 1.487.244h2.05c1.57 0 2.771.253 3.6.758.828.506 1.242 1.332 1.242 2.48 0 .874-.29 1.658-.871 2.351-.58.694-1.4 1.238-2.46 1.632-1.059.394-2.314.591-3.766.591zm.281-11.743c.342 0 .641-.081.897-.244.256-.163.461-.398.615-.707.154-.308.23-.702.23-1.182 0-.685-.166-1.199-.499-1.542a1.663 1.663 0 00-1.243-.513c-.495 0-.91.17-1.242.513-.333.343-.5.857-.5 1.542 0 .48.081.874.243 1.182.163.309.372.544.628.707.256.163.547.244.871.244zm.308 9.379c.564 0 1.063-.069 1.499-.206.435-.137.781-.325 1.038-.565.256-.24.384-.505.384-.796 0-.412-.17-.681-.513-.81-.341-.128-.82-.193-1.434-.193h-1.307l-.49-.006-.311-.013a5.681 5.681 0 01-.993-.135c-.239.206-.414.407-.525.604a1.311 1.311 0 00-.167.655c0 .48.26.844.782 1.092.52.249 1.2.373 2.037.373zm13.99-3.058V1.824h10.531v3.187h-6.764v3.88h5.79v3.186h-5.79v6.501h-3.767zm16.322.309c-.768 0-1.439-.172-2.011-.514a3.49 3.49 0 01-1.32-1.388c-.307-.582-.46-1.233-.46-1.953 0-1.37.563-2.428 1.69-3.173 1.128-.746 2.947-1.247 5.458-1.504-.017-.376-.098-.698-.243-.963a1.474 1.474 0 00-.654-.617c-.29-.145-.657-.218-1.102-.218-.53 0-1.067.094-1.614.282a10.61 10.61 0 00-1.768.823l-1.332-2.467c.546-.343 1.11-.638 1.69-.887.582-.248 1.184-.44 1.807-.578a8.986 8.986 0 011.935-.205c1.093 0 2.011.21 2.754.63.743.419 1.311 1.053 1.704 1.9.393.849.59 1.932.59 3.251v7.272h-3.075l-.256-1.31h-.103a8.13 8.13 0 01-1.717 1.169 4.34 4.34 0 01-1.973.45zm1.256-2.956c.427 0 .803-.094 1.127-.282.325-.189.65-.446.974-.771v-2.159c-.888.12-1.593.275-2.114.463-.521.188-.888.415-1.102.681a1.38 1.38 0 00-.32.886c0 .394.132.69.397.887.265.197.61.295 1.038.295zm14.656 2.956c-1.195 0-2.276-.266-3.24-.797a5.751 5.751 0 01-2.281-2.287c-.556-.994-.833-2.193-.833-3.597 0-1.405.307-2.604.922-3.598a6.248 6.248 0 012.435-2.287 6.877 6.877 0 013.254-.796c.785 0 1.49.124 2.114.372a5.115 5.115 0 011.601.99l-1.768 2.338a2.936 2.936 0 00-.756-.463 2.434 2.434 0 00-.96-.18c-.599 0-1.12.146-1.564.437-.444.291-.794.711-1.05 1.26-.257.548-.385 1.19-.385 1.927 0 .736.128 1.379.385 1.927.256.548.602.968 1.037 1.259.436.291.927.437 1.474.437.427 0 .828-.077 1.204-.232a4.873 4.873 0 001.05-.59l1.487 2.312c-.53.48-1.153.86-1.87 1.144a6.096 6.096 0 01-2.256.424zm11.633-13.362c1.213 0 2.221.27 3.024.809.803.54 1.4 1.272 1.794 2.197.393.925.589 1.962.589 3.11 0 .325-.017.646-.051.963l-.041.35c-.02.159-.041.295-.062.408h-7.596c.087.432.224.8.409 1.105.333.548.756.938 1.268 1.169a3.88 3.88 0 001.615.347c.495 0 .969-.073 1.422-.219a6.914 6.914 0 001.345-.603l1.23 2.312a7.613 7.613 0 01-2.153 1.04 7.951 7.951 0 01-2.357.374c-1.213 0-2.306-.266-3.28-.797a5.813 5.813 0 01-2.306-2.287c-.564-.994-.845-2.193-.845-3.597 0-1.388.286-2.579.858-3.572.572-.994 1.32-1.76 2.242-2.3.922-.54 1.888-.81 2.895-.81zm.077 2.903c-.41 0-.811.112-1.204.334-.393.223-.717.608-.974 1.157-.11.236-.196.513-.255.83h2.23l2.304-.008c0-.668-.162-1.22-.486-1.657-.325-.437-.863-.656-1.615-.656z" />
    </svg>
  );
});

export default Icon;

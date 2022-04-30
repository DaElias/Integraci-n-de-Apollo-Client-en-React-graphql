import * as React from "react";
import { Svg } from "./styles";
const Logo = (props) => (
  <Svg
    width={570.19}
    height={172.4}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-35.095 -11.2 570.19 172.4"
    style={{
      background: "0 0",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={0.413}
        x2={0.587}
        y1={0.008}
        y2={0.992}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#44647f" />
        <stop offset={0.5} stopColor="#d8ebf9" />
        <stop offset={1} stopColor="#71c2cc" />
      </linearGradient>
      <linearGradient id="d" x1={0} x2={0} y1={0} y2={1}>
        <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
        <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter id="c" x="-100%" y="-100%" width="300%" height="300%">
        <feMorphology radius={2} />
      </filter>
      <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
        <feFlood floodColor="#fff" result="flood" />
        <feConvolveMatrix
          in="SourceGraphic"
          result="conv"
          order="8,8"
          divisor={1}
          kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
        />
        <feOffset dy={4} in="conv" result="offset" />
        <feComposite operator="in" in="flood" in2="offset" result="comp" />
        <feGaussianBlur in="offset" stdDeviation={3} result="shadow" />
        <feColorMatrix
          in="shadow"
          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
          result="dark-shadow"
        />
        <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
        <feOffset dy={2} in="conv" result="offset-2" />
        <feComposite
          operator="out"
          in="offset"
          in2="offset-2"
          result="edge-diff"
        />
        <feGaussianBlur in="edge-diff" stdDeviation={1} result="edge-blur" />
        <feColorMatrix
          in="edge-blur"
          result="edge-shadow"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feComposite
          operator="in"
          in="edge-shadow"
          in2="offset"
          result="edge-shadow-in"
        />
        <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
        <feMerge result="out">
          <feMergeNode in="offset-shadow" />
          <feMergeNode in="comp" />
          <feMergeNode in="edge-shadow-final" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="M46.37-6.58Q42.34-2.5 36.82-.29q-5.52 2.21-11 2.21-5.47 0-7.39-.96l-2.97 16.32-19.49 1.92L9.22-48.96l15.64-1.63-1.24 6.62q4.03-6.81 12.38-6.81 9.41 0 14.4 6.04 4.42 5.48 4.42 13.83t-2.21 14.3q-2.21 5.95-6.24 10.03ZM24.67-33.5 19.58-5.38q2.02 1.73 4.52 1.73 2.49 0 3.93-.96t2.5-2.88q2.88-5.18 5.18-20.93.67-4.6.67-9.12 0-4.51-1-5.95-1.01-1.44-2.93-1.44-5.86 0-7.78 11.43Zm74.79 17.28q2.4 1.63 2.4 5.23 0 3.6-1.83 5.9-1.82 2.31-4.8 3.84-6.14 3.17-12.77 3.17-6.62 0-10.51-1.44-3.89-1.44-6.48-4.13-5.09-5.09-5.09-14.4 0-14.49 7.88-23.33 8.44-9.5 23.13-9.5 9.12 0 13.63 3.84 3.36 2.88 3.36 7.58 0 16.9-29.18 16.9-.38 2.5-.38 4.61 0 4.41 1.96 6.09 1.97 1.68 5.62 1.68 3.65 0 7.54-1.68 3.88-1.68 5.52-4.36ZM79.87-26.69q6.82 0 10.75-4.22 3.94-4.03 3.94-10.47 0-2.2-.82-3.4-.81-1.2-2.44-1.2-1.64 0-3.03.62t-2.83 2.74q-3.55 4.8-5.57 15.93ZM113.18-9.6q0-2.59 1.35-9.12l5.09-25.92h-5.67l.39-2.88q11.52-3.46 22.65-11.9h4.61l-2.3 10.46h7.48l-.86 4.32h-7.39l-4.9 25.92q-1.25 5.95-1.25 7.97 0 4.61 4.04 5.57Q135.46-1.92 132 0t-8.35 1.92q-4.9 0-7.68-3.07-2.79-3.07-2.79-8.45Zm39.56-30.53q3.26-4.61 8.2-7.68 4.95-3.07 11-3.07 6.04 0 8.92 1.92l18.82-1.92-6.53 36.86q-3.36 18.82-10.46 26.21-6.82 7.01-20.07 7.01-10.08 0-15.84-3.17t-5.76-8.45q0-3.93 2.98-6.19 2.98-2.25 7.58-2.25 4.04 0 7.11 1.82 1.82.96 2.69 2.3-2.21 1.92-2.21 5.09 0 4.13 3.84 4.13 6.43 0 10.08-15.17 1.05-4.13 1.92-8.25-4.32 5.28-14.11 5.28-6.82 0-10.76-3.27-3.93-3.26-3.93-10.94 0-4.8 1.63-10.23 1.63-5.42 4.9-10.03Zm12.48 20.55q0 6.52 3.36 6.52 2.3 0 4.51-2.49 1.73-2.02 2.4-4.99l4.89-24.68q-.48-.09-.96-.28-.96-.39-2.2-.39-5.86 0-9.32 9.6-2.68 7.49-2.68 16.71Zm68.25-7.4q3.46-6.14 3.46-12.38 0-4.13-2.98-4.13-2.3 0-4.7 3.94-2.5 3.93-3.27 9.02L220.99 0l-19.87 1.92 9.79-50.88 15.84-1.92-1.73 9.7q4.71-9.7 15.27-9.7 5.57 0 8.59 2.88 3.02 2.88 3.02 8.78 0 5.91-3.88 9.65-3.89 3.75-10.52 3.75-2.88 0-4.03-1.16Zm24.15 24.1q-2.26-2.5-3.27-6.43-1.01-3.94-1.01-10.37t2.21-12.29q2.21-5.85 6.24-10.08 8.26-8.83 21.89-8.83 4.9 0 8.45 1.63l16.41-1.63-7.1 37.44q-.29 1.15-.29 3.26 0 2.12 1.3 3.46 1.29 1.34 3.21 1.54-.96 3.26-4.46 5.18t-7.44 1.92q-3.94 0-6.58-1.49t-3.4-3.98q-1.54 2.4-4.8 3.93-3.27 1.54-7.64 1.54-4.36 0-7.92-1.15-3.55-1.15-5.8-3.65Zm20.25-38.98q-1.1 1.73-2.06 4.66t-2.55 10.75q-1.58 7.83-1.58 13.39 0 5.57.86 7.2.87 1.64 2.4 1.64 3.08 0 5.33-2.93 2.26-2.93 3.12-8.11l5.09-28.13q-2.02-1.73-4.37-1.73t-3.74.77q-1.39.77-2.5 2.49ZM382.85 1.92q-11.62 0-11.62-9.02 0-3.94 1.68-11.57 1.68-7.63 2.26-10.71 1.34-7 1.34-9.21 0-4.9-3.65-4.9-2.4 0-4.7 3.31-2.3 3.32-3.36 9.94L358.85 0l-18.72 1.92 5.18-26.11q.87-4.32 1.63-9.22.77-4.89.77-5.66 0-4.42-3.26-4.42-2.21 0-4.61 3.27-2.4 3.26-3.74 9.98L330.24 0l-18.91 1.92 10.08-50.88 15.65-1.92-1.64 9.7q2.5-5.19 7.11-7.44 4.61-2.26 11.81-2.26 4.12 0 6.81 2.02 2.69 2.01 3.55 5.28 1.64-3.36 5.81-5.33 4.18-1.97 9.31-1.97 5.14 0 7.68 1.1 2.55 1.11 4.08 2.93 2.6 3.36 2.6 9.51 0 6.04-2.6 18.62-1.34 6.14-1.34 8.4 0 2.26 1.3 3.6 1.29 1.34 3.21 1.54-.96 3.26-4.27 5.18-3.31 1.92-7.63 1.92Z"
        fill="url(#b)"
        transform="translate(52.624 114.31)"
      />
    </g>
    <g filter="url(#c)">
      <path
        d="M46.37-6.58Q42.34-2.5 36.82-.29q-5.52 2.21-11 2.21-5.47 0-7.39-.96l-2.97 16.32-19.49 1.92L9.22-48.96l15.64-1.63-1.24 6.62q4.03-6.81 12.38-6.81 9.41 0 14.4 6.04 4.42 5.48 4.42 13.83t-2.21 14.3q-2.21 5.95-6.24 10.03ZM24.67-33.5 19.58-5.38q2.02 1.73 4.52 1.73 2.49 0 3.93-.96t2.5-2.88q2.88-5.18 5.18-20.93.67-4.6.67-9.12 0-4.51-1-5.95-1.01-1.44-2.93-1.44-5.86 0-7.78 11.43Zm74.79 17.28q2.4 1.63 2.4 5.23 0 3.6-1.83 5.9-1.82 2.31-4.8 3.84-6.14 3.17-12.77 3.17-6.62 0-10.51-1.44-3.89-1.44-6.48-4.13-5.09-5.09-5.09-14.4 0-14.49 7.88-23.33 8.44-9.5 23.13-9.5 9.12 0 13.63 3.84 3.36 2.88 3.36 7.58 0 16.9-29.18 16.9-.38 2.5-.38 4.61 0 4.41 1.96 6.09 1.97 1.68 5.62 1.68 3.65 0 7.54-1.68 3.88-1.68 5.52-4.36ZM79.87-26.69q6.82 0 10.75-4.22 3.94-4.03 3.94-10.47 0-2.2-.82-3.4-.81-1.2-2.44-1.2-1.64 0-3.03.62t-2.83 2.74q-3.55 4.8-5.57 15.93ZM113.18-9.6q0-2.59 1.35-9.12l5.09-25.92h-5.67l.39-2.88q11.52-3.46 22.65-11.9h4.61l-2.3 10.46h7.48l-.86 4.32h-7.39l-4.9 25.92q-1.25 5.95-1.25 7.97 0 4.61 4.04 5.57Q135.46-1.92 132 0t-8.35 1.92q-4.9 0-7.68-3.07-2.79-3.07-2.79-8.45Zm39.56-30.53q3.26-4.61 8.2-7.68 4.95-3.07 11-3.07 6.04 0 8.92 1.92l18.82-1.92-6.53 36.86q-3.36 18.82-10.46 26.21-6.82 7.01-20.07 7.01-10.08 0-15.84-3.17t-5.76-8.45q0-3.93 2.98-6.19 2.98-2.25 7.58-2.25 4.04 0 7.11 1.82 1.82.96 2.69 2.3-2.21 1.92-2.21 5.09 0 4.13 3.84 4.13 6.43 0 10.08-15.17 1.05-4.13 1.92-8.25-4.32 5.28-14.11 5.28-6.82 0-10.76-3.27-3.93-3.26-3.93-10.94 0-4.8 1.63-10.23 1.63-5.42 4.9-10.03Zm12.48 20.55q0 6.52 3.36 6.52 2.3 0 4.51-2.49 1.73-2.02 2.4-4.99l4.89-24.68q-.48-.09-.96-.28-.96-.39-2.2-.39-5.86 0-9.32 9.6-2.68 7.49-2.68 16.71Zm68.25-7.4q3.46-6.14 3.46-12.38 0-4.13-2.98-4.13-2.3 0-4.7 3.94-2.5 3.93-3.27 9.02L220.99 0l-19.87 1.92 9.79-50.88 15.84-1.92-1.73 9.7q4.71-9.7 15.27-9.7 5.57 0 8.59 2.88 3.02 2.88 3.02 8.78 0 5.91-3.88 9.65-3.89 3.75-10.52 3.75-2.88 0-4.03-1.16Zm24.15 24.1q-2.26-2.5-3.27-6.43-1.01-3.94-1.01-10.37t2.21-12.29q2.21-5.85 6.24-10.08 8.26-8.83 21.89-8.83 4.9 0 8.45 1.63l16.41-1.63-7.1 37.44q-.29 1.15-.29 3.26 0 2.12 1.3 3.46 1.29 1.34 3.21 1.54-.96 3.26-4.46 5.18t-7.44 1.92q-3.94 0-6.58-1.49t-3.4-3.98q-1.54 2.4-4.8 3.93-3.27 1.54-7.64 1.54-4.36 0-7.92-1.15-3.55-1.15-5.8-3.65Zm20.25-38.98q-1.1 1.73-2.06 4.66t-2.55 10.75q-1.58 7.83-1.58 13.39 0 5.57.86 7.2.87 1.64 2.4 1.64 3.08 0 5.33-2.93 2.26-2.93 3.12-8.11l5.09-28.13q-2.02-1.73-4.37-1.73t-3.74.77q-1.39.77-2.5 2.49ZM382.85 1.92q-11.62 0-11.62-9.02 0-3.94 1.68-11.57 1.68-7.63 2.26-10.71 1.34-7 1.34-9.21 0-4.9-3.65-4.9-2.4 0-4.7 3.31-2.3 3.32-3.36 9.94L358.85 0l-18.72 1.92 5.18-26.11q.87-4.32 1.63-9.22.77-4.89.77-5.66 0-4.42-3.26-4.42-2.21 0-4.61 3.27-2.4 3.26-3.74 9.98L330.24 0l-18.91 1.92 10.08-50.88 15.65-1.92-1.64 9.7q2.5-5.19 7.11-7.44 4.61-2.26 11.81-2.26 4.12 0 6.81 2.02 2.69 2.01 3.55 5.28 1.64-3.36 5.81-5.33 4.18-1.97 9.31-1.97 5.14 0 7.68 1.1 2.55 1.11 4.08 2.93 2.6 3.36 2.6 9.51 0 6.04-2.6 18.62-1.34 6.14-1.34 8.4 0 2.26 1.3 3.6 1.29 1.34 3.21 1.54-.96 3.26-4.27 5.18-3.31 1.92-7.63 1.92Z"
        fill="url(#d)"
        transform="translate(52.624 114.31)"
      />
    </g>
  </Svg>
);

export default Logo;
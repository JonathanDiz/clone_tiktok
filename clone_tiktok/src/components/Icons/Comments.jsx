import * as React from "react"

export const Comments = ({fill = 'currentColor'}) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...fill}
  >
    <defs>
      <linearGradient id="b">
        <stop offset={0} />
        <stop stopOpacity={0} offset={1} />
      </linearGradient>
      <linearGradient
        id="c"
        x2={0}
        y1={-150.7}
        y2={327.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0} offset={0} />
        <stop offset={0.5} />
        <stop stopOpacity={0} offset={1} />
      </linearGradient>
      <linearGradient id="a">
        <stop stopColor="#f5f5f5" offset={0} />
        <stop stopColor="#e9e9e9" offset={1} />
      </linearGradient>
      <linearGradient
        id="g"
        x1={23.136}
        x2={36.26}
        y1={11.056}
        y2={26.208}
        gradientUnits="userSpaceOnUse"
        xlinkHref="#a"
      />
      <linearGradient
        id="h"
        x1={35.004}
        x2={27.273}
        y1={10.957}
        y2={24.144}
        gradientTransform="matrix(-.97723 0 0 .99588 50.603 9.116)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#a"
      />
      <radialGradient
        id="e"
        cx={605.71}
        cy={486.65}
        r={117.14}
        gradientTransform="matrix(-2.7744 0 0 1.9697 112.76 -872.89)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#b"
      />
      <radialGradient
        id="d"
        cx={605.71}
        cy={486.65}
        r={117.14}
        gradientTransform="matrix(2.7744 0 0 1.9697 -1891.6 -872.89)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#b"
      />
      <radialGradient
        id="f"
        cx={29.496}
        cy={27.645}
        r={11.516}
        gradientTransform="matrix(1 0 0 .34649 0 18.067)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#b"
      />
    </defs>
    <g opacity={0.629}>
      <path
        d="M-1559.3-150.7h1339.6v478.36h-1339.6z"
        fill="url(#c)"
        opacity={0.402}
        transform="matrix(.01519 0 0 .02087 32.508 31.904)"
      />
      <path
        d="M-219.62-150.68v478.33c142.87.9 345.4-107.17 345.4-239.2s-159.44-239.13-345.4-239.13z"
        fill="url(#d)"
        opacity={0.402}
        transform="matrix(.01519 0 0 .02087 32.508 31.904)"
      />
      <path
        d="M-1559.3-150.68v478.33c-142.87.9-345.4-107.17-345.4-239.2s159.44-239.13 345.4-239.13z"
        fill="url(#e)"
        opacity={0.402}
        transform="matrix(.01519 0 0 .02087 32.508 31.904)"
      />
    </g>
    <path
      d="M-1559.3-150.7h1339.6v478.36h-1339.6z"
      fill="url(#c)"
      opacity={0.402}
      transform="matrix(.01519 0 0 .02087 42.258 21.904)"
    />
    <path
      d="M-219.62-150.68v478.33c142.87.9 345.4-107.17 345.4-239.2s-159.44-239.13-345.4-239.13z"
      fill="url(#d)"
      opacity={0.402}
      transform="matrix(.01519 0 0 .02087 42.258 21.904)"
    />
    <path
      d="M-1559.3-150.68v478.33c-142.87.9-345.4-107.17-345.4-239.2s159.44-239.13 345.4-239.13z"
      fill="url(#e)"
      opacity={0.402}
      transform="matrix(.01519 0 0 .02087 42.258 21.904)"
    />
    <path
      transform="matrix(1.3728 0 0 1.0924 -10.337 .236)"
      d="M41.012 27.645a11.516 3.99 0 1 1-23.031 0 11.516 3.99 0 1 1 23.031 0z"
      display="block"
      fill="url(#f)"
      opacity={0.12}
    />
    <path
      d="M18.402 6.57c-1.071 0-1.92.864-1.92 1.914v15.063c0 1.05.849 1.882 1.92 1.882h14.137c.856 1.104 2.523 2.893 6.518 4.383-1.779-2.049-1.775-3.44-1.575-4.383h2.897c1.071 0 1.952-.832 1.952-1.882V8.485c0-1.05-.88-1.914-1.952-1.914H18.402z"
      display="block"
      fill="url(#g)"
      stroke="#787878"
    />
    <path
      d="M18.813 7.575c-.918 0-1.292.437-1.292 1.337V22.78c0 .9.727 1.614 1.646 1.614H33.05c.734.946 1.303 1.974 3.515 3.1-.414-.898-.065-2.152.216-3.1h3.493c.918 0 1.016-.36 1.016-1.26V8.912c0-.9-.25-1.286-1.168-1.286l-21.31-.05z"
      display="block"
      fill="none"
      stroke="#fff"
    />
    <path
      d="M29.776 15.464c1.04 0 1.863.87 1.863 1.93V32.58c0 1.058-.824 1.898-1.863 1.898H16.064c-.83 1.113-2.447 2.917-6.321 4.42 1.725-2.067 1.721-3.47 1.526-4.42H8.46c-1.04 0-1.893-.84-1.893-1.899V17.393c0-1.058.854-1.929 1.893-1.929h21.316z"
      display="block"
      fill="url(#h)"
      stroke="#787878"
    />
    <path
      d="M29.389 16.453c.942 0 1.235.461 1.235 1.422v14.204c0 .96-.242 1.368-1.185 1.368h-13.9c-.754 1.01-2.068 2.596-3.512 3.25.403-1.166.248-2.136.173-3.25H8.793c-.942 0-1.212-.408-1.212-1.368V18c0-.96.27-1.548 1.212-1.548h20.596z"
      display="block"
      fill="none"
      stroke="#fff"
    />
  </svg>
)


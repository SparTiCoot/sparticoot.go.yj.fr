import * as React from "react"
import { SVGProps } from "react"

export const FourColorFulCubesSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="15vw"
    viewBox="0 0 492 423"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="animated-pink-cube">
      <path d="M82 139L245 233L164 281L0 186L82 139Z" fill="#BF395C" />
      <path d="M0 186L164 281V375L0 281V186Z" fill="#D94169" />
      <path d="M164 281L245 233V328L164 375V281Z" fill="#A02E4C" />
    </g>
    <g id="animated-black-cube">
      <path
        d="M491.731 95.6688L409.731 48.6688L327 95.4116L408.73 143.669L491.731 95.6688Z"
        fill="#474143"
      />
      <path
        d="M408.731 328.669L408.731 143.669L327 95.4116L328 283.912L408.731 328.669Z"
        fill="#555555"
      />
      <path
        d="M408.731 328.669L408.731 143.669L491.731 95.6688L491.731 284.669L408.731 328.669Z"
        fill="#413B3D"
      />
    </g>
    <g id="animated-yellow-cube">
      <path d="M327 187L164 281L245 329L409 234L327 187Z" fill="#FFC636" />
      <path d="M409 234L245 329V423L409 329V234Z" fill="#FFCF57" />
      <path d="M245 329L164 281V376L245 423V329Z" fill="#F2BC31" />
    </g>
    <g id="animated-orange-cube-2">
      <path
        d="M243.983 51.7897L326.984 0.532592L411.125 48.0325L326.984 99.7897L243.983 51.7897Z"
        fill="#F35F40"
      />
      <path
        d="M326.983 284.79L326.983 99.7898L411.124 48.0326L408.983 237.79L326.983 284.79Z"
        fill="#FF8066"
      />
      <path
        d="M326.983 284.79L326.983 99.7898L243.983 51.7898L243.983 240.79L326.983 284.79Z"
        fill="#FF6444"
      />
    </g>
  </svg>
)
export { FourColorFulCubesSvg as ReactComponent }

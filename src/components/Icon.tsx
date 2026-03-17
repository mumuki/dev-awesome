import type { SVGProps } from 'react';

export type IconVariant = 'black' | 'colored';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Color variant: monochrome 'black' (default) or 'colored'. */
  variant?: IconVariant;
  /** Uniform size in pixels (sets both width and height). Defaults to 32. */
  size?: number;
}

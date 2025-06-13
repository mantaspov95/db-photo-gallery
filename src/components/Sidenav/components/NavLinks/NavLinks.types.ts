import type { ComponentType, SVGProps } from 'react';

export type MenuOptionsItem = {
  name: string;
  title: string;
  pathName: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// components/svgIcon/index.tsx
import React, { FC, lazy, Suspense, SVGProps, memo } from 'react';

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const SvgIcon: FC<SvgIconProps> = memo(({ name, ...props }) => {
  // Use a dynamic import for SVG icons
  const SvgIconComponent = lazy(() =>
    import(`@/assets/icons/${name}.svg`).catch(() => {
      console.error(`Icon "${name}" not found`);
      return { default: () => <span>Icon not found</span> };
    })
  );

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <SvgIconComponent {...props} />
    </Suspense>
  );
});

export default SvgIcon;
import { ComponentPropsWithoutRef, FC, ReactElement } from 'react';
import clsx from 'clsx';

type SplitPanelProps = {
  children: [ReactElement, ReactElement];
  className: string;
} & ComponentPropsWithoutRef<'div'>;

const SplitPanel: FC<SplitPanelProps> = ({ children, className, ...props }) => (
  <section
    className={clsx(
      'main-section flex w-full flex-col items-start justify-between gap-4 px-4 md:w-auto md:flex-row md:px-0',
      className,
    )}
    {...props}
  >
    <div className="flex w-full items-center justify-center">{children[0]}</div>

    <div className="flex h-full w-full items-start justify-center">
      {children[1]}
    </div>
  </section>
);

export default SplitPanel;

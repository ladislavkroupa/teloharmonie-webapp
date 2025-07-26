import { FC, PropsWithChildren } from 'react';

const Panel: FC<PropsWithChildren> = ({ children }) => (
  <section className="main-section flex w-full flex-col items-center justify-center gap-20">
    {children}
  </section>
);

export default Panel;

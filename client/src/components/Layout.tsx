import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative flex flex-col">
    <div className="flex w-full flex-col items-center justify-center">
      {children}
    </div>
  </div>
);

export default Layout;

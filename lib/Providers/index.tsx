import React from "react";

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <div>
    {children}
  </div>;
};

export default Providers;

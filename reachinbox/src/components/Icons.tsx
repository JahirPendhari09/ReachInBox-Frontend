import React, { MouseEventHandler, ReactNode } from 'react';

interface IconProps {
    color: string;
    currColor:Boolean;
    isActive: boolean;
    onClick?:  MouseEventHandler<HTMLDivElement>;
    children: ReactNode;
  }
  

const Icon: React.FC<IconProps> = ({currColor, color, isActive, children, onClick }) => {
  return (
    <div className={`p-1 rounded cursor-pointer ${currColor && isActive ? 'bg-[#2F3030]' : '' } ${!currColor && isActive ? "bg-gray-200":'' }`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Icon;

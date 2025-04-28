import { ReactNode } from "react";

interface TwoColLayoutProps {
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

export default function TwoColLayout({ leftColumn, rightColumn }: TwoColLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-2">
        {leftColumn}
      </div>
      <div className="md:col-span-10">
        {rightColumn}
      </div>
    </div>
  );
} 
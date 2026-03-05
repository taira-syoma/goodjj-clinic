export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`border rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
};
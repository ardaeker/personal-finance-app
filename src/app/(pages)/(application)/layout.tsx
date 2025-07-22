export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span>Application Layout </span>
      {children}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span>Authentication Layout</span>
      {children}
    </div>
  );
}

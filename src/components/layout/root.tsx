import HeaderLayout from './header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLayout />
      <main className="p-5">
        {children}
      </main>
    </>
  );
}

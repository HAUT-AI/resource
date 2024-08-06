import HeaderLayout from './header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLayout />
      <main className="flex-grow p-5" role="main">
        {children}
      </main>
    </div>
  );
}

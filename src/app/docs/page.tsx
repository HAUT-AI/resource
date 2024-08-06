// app/docs/page.tsx
const DocsPage = () => {
  return (
    <div id="Docs">
    </div>
  );
};

DocsPage.getLayout = () => {
  return {
    component: RootLayout,
    pageProps: {
      title: 'Docs Page',
    },
  };
};

export default DocsPage;

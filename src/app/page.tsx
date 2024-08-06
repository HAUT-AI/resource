// app/page.tsx
import axios from 'axios';
import ScrollView from '@/components/ScrollView/ScrollView';
export default async function Home() {
  const res = await axios.get(
    'https://www.designnotes.cn/lang/yyds.json?designnotes=studyhardandmakeprogresseverydayd'
  );
  const data = res.data.data;
  return (
    <>
      <ScrollView data={data} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return {
    page,
    props: {
      rootLayout: (props) => <Layout {...props} />,
    },
  };
}
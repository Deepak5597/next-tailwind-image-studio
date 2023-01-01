import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Head>
        <title>Image Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-3/4 h-[200px] shadow-2xl shadow-red-400 flex flex-col rounded-md">
        {/* Tab */}
        <div className="h-[35px] w-full bg-purple-900 rounded-t-md"></div>
        <div className="flex-1 bg-gray-100 rounded-b-md"></div>
      </main>
    </div>
  );
}

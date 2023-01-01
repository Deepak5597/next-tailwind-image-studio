import Head from 'next/head';

const tabContainerClassNames =
  'h-[35px] w-full bg-gray-900 rounded-t-md flex items-center px-2';

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Head>
        <title>Image Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-3/4 h-[300px] shadow-2xl shadow-red-400 flex flex-col rounded-md">
        {/* Tab */}
        <div className={tabContainerClassNames}>
          <div class="flex gap-1">
            <span className="h-[10px] w-[10px] bg-red-500 rounded-full"></span>
            <span className="h-[10px] w-[10px] bg-yellow-500 rounded-full"></span>
            <span className="h-[10px] w-[10px] bg-green-600 rounded-full"></span>
          </div>
          <div className="flex-1 h-[25px] ml-5 bg-[#484040] rounded-r-md"></div>
          <div className=""></div>
        </div>
        <div className="flex-1 bg-white rounded-b-md p-2"></div>
        {/* <div className="bg-white">
          <button className="bg-gray-900 text-white p-2 border-none rounded-sm mb-2 mr-2 float-right">
            Save For Later
          </button>
        </div> */}
      </main>
    </div>
  );
}

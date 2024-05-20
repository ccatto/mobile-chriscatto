import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='w-full h-screen'>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Chris Catto Mobile App
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              This is a simple app which has some documentation on software development.
            </p>
          </div>
        </div>
      </div>
      <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
    </>
  );
}

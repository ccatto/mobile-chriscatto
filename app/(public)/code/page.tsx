
import { Metadata } from 'next';
// import { SyntaxHighlightingReactCatto } from '@ccatto/common-sdk-catto';
// import { ButtonK8 } from '@ccatto/common-sdk-catto';

export const metadata: Metadata = {
  title: 'Chris Catto Code',
  description:
    "Chris Catto Code | Code tutorials including: JavaScript SFCC Next API's .NET AWS SQL CSS React GraphQL TypeScript.",
  alternates: {
    canonical: 'https://www.chriscatto.com/code',
  },
};

export default function Page() {
  const codeBlock = "console.log('testing');";

  return (
    <>
      <div className='w-full h-screen'>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chris Catto Code Documents</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">This is some code documentation from Chris Catto.</p>
      </div>
      {/* <SyntaxHighlightingReactCatto codeString={codeBlock} /> */}
<ButtonK8 label='blah'/>
      </div>
      {/* <hr className="m-3" /> */}
      <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
    </>
  );
}

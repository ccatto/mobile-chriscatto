// import JumbotronCattoCode from '../../components/JumbotronCattoCode/JumbotronCattoCode';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chris Catto Code',
  description:
    "Chris Catto Code | Code tutorials including: JavaScript SFCC Next API's .NET AWS SQL CSS React GraphQL TypeScript.",
  alternates: {
    canonical: 'https://www.chriscatto.com/code',
  },
};

export default function Page() {
  return (
    <>
      <div className='w-full h-screen'>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Chris Catto
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Insightful, results-driven application developer with notable successes automating business processes in support of company objectives. Excels at working on individual & team projects, providing clear and concise communication with team members and management. Extensive hands-on experience coordinating all aspects of software development, including analysis, user interface, design, architecture, coding, documentation, tes5ng, implementation, and training.
            </p>
            <p>
              With over 20 years of experience in developing software I still enjoy coding. I have worked for large fortune 500 companies to small startups. I have enjoyed working with many different technologies, earlier on in my career it was much more Microsoft .NET & currently have been utilizing Salesforce Commerce Cloud to build eCommerce sites.
            </p>
            <p>
              This web app is build with basically with the following technologies: NextJS; React; Typescript; Tailwind; Node; Express & Postgresql.
            </p>
          </div>
        </div>
      </div>
      {/* <hr className="m-3" /> */}
      <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
    </>
  );
}

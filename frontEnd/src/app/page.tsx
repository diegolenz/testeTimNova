
/* import { HiOutlineDocumentReport } from 'react-icons/hi'; */

import Link from "next/link";
import { HiOutlineDocumentReport } from "react-icons/hi";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/veiculos">

            <button
              className="inline-flex items-center px-4 py-2 border border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-200"
            >
              <HiOutlineDocumentReport className="mr-2 text-lg" />
              Veiculos
            </button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}

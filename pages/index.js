import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SONDER FlORIST COMPANY</title>
        <meta name="description" content="Generated by josh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex min-h-screen max-w-7xl mx-auto px-6 sm:px-10 items-center justify-center">
          <div className="font-serif text-6xl md:text-7xl text-center -mt-40">
            <h1>The world&#39;s first NFT</h1>
            <h1> verified clothing brand. </h1>
            <a className="text-sm sm:text-md font-mono">
              Peruse the Collection
            </a>
          </div>
        </div>
        {/* clothing section */}
        <div
          id="shop"
          className="max-w-7xl mx-auto px-6 mb-16 sm:px-10 -mt-40 sm:-mt-52 flex items-center justify-center font-mono"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20">
            <Link href="/tee">
              <a className="flex flex-col items-center">
                <div className="bg-slate-100 w-3/4 rounded-lg p-6 shadow-sm">
                  <div className="">
                    <img layout="fill" src="/teefront.png" alt="tshirt" />
                  </div>
                  {/* jello */}
                </div>
                <div className="pt-10 text-left">
                  <h3 className="font-bold text-3xl">OF-COURSE Tee</h3>
                  <p className="text-gray-500 text-sm pt-2 pb-2 tracking-tight">
                    Super cool t shirt
                  </p>
                  <p className="text-sm">$110.00</p>
                </div>
              </a>
            </Link>
            <div className="flex flex-col items-center">
              <div className="bg-slate-100 w-3/4 rounded-lg p-6">
                <div className="">
                  <img layout="fill" src="/teefront.png" alt="tshirt" />
                </div>
                <div className="pt-10">
                  <h3 className="font-bold text-xl">OF-COURSE Tee</h3>
                  <p className="text-gray-500 text-sm pt-1 pb-1 tracking-tight">
                    Super cool t shirt
                  </p>
                  <p className="text-sm">$110.00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-100 w-3/4 rounded-lg p-6">
                <div className="">
                  <img layout="fill" src="/teefront.png" alt="tshirt" />
                </div>
                <div className="pt-10">
                  <h3 className="font-bold text-xl">OF-COURSE Tee</h3>
                  <p className="text-gray-500 text-sm pt-1 pb-1 tracking-tight">
                    Super cool t shirt
                  </p>
                  <p className="text-sm">$110.00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-100 w-3/4 rounded-lg p-6">
                <div className="">
                  <img layout="fill" src="/teefront.png" alt="tshirt" />
                </div>
                <div className="pt-10">
                  <h3 className="font-bold text-xl">OF-COURSE Tee</h3>
                  <p className="text-gray-500 text-sm pt-1 pb-1 tracking-tight">
                    Super cool t shirt
                  </p>
                  <p className="text-sm">$110.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

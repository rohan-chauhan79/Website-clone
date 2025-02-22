import React from 'react'
import Features from './Features'

const Content = () => {
  return (
    <>
   <section className="bg-white dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Our Main Features</h2>
<Features/>
    </div>
    {/* <div className="grid grid-cols-2 gap-4 mt-8">
      <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
      <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
    </div>
  </div> */}



  <div className="max-w-sm bg-white border border-gray-800 border-x-slate-500 pt-10 shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-20">
  <a href="#">
    <img className="rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Be a part of success story building Team</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>
  </div>
</div>
</div>


</section>

    </>
  )
}

export default Content

"use clint";
import React from "react";
import {
  FaChartBar,
  FaClipboardList,
  FaUserTie,
  FaProjectDiagram,
  FaCogs,
} from "react-icons/fa";

const Services = () => {
  // Service Data
  const services = [
    {
      id: 1,
      title: "Risk Management",
      description:
        "Risk management is the identification, evaluation, and prioritization of risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events or to maximize the realization of opportunities.",
      icon: <FaChartBar />,
    },
    {
      id: 2,
      title: "Portfolio Management",
      description:
        "Portfolio management is the art and science of making decisions about investment mix and policy, matching investments to objectives, asset allocation for individuals and institutions, and balancing risk against performance.",
      icon: <FaClipboardList />,
    },
    {
      id: 3,
      title: "Wealth Management",
      description:
        "Wealth management is an investment-advisory discipline which incorporates financial planning, investment portfolio management and a number of aggregated financial services offered by a complex mix of asset managers, custodial banks, retail banks, financial planners and others.",
      icon: <FaUserTie />,
    },
    {
      id: 4,
      title: "Project Outsourcing",
      description:
        "Outsourcing allows a company to subcontract a particular area within the organization. A company may outsource project management or any other task or department for one or more reasons.",
      icon: <FaProjectDiagram />,
    },
    {
      id: 5,
      title: "ERP & Customized Software",
      description:
        "Enterprise resource planning (ERP) is business process management software that allows an organization to use a system of integrated applications to manage the business and automate many back office functions related to technology, services and human resources.",
      icon: <FaCogs />,
    },
  ];

  return (
   <>
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Our Best Services
        </h2>
        <p className="text-gray-600 mb-12">
          We have grown in different sectors in no time because of unmatched
          services. Below are a few of these.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-300 hover:shadow-lg"
            >
              <div className="text-5xl text-blue-500 mb-4 flex justify-center transition-all duration-200 group-hover:text-blue-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    {/* <div>
    
     <img className="h-40 w-full object-cover " src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg" />
     <button>Request </button>
    </div> */}

    <div className="relative w-full h-40">
 
  <img src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg" class="w-full h-full object-cover" alt="Blue Filtered Image" />
  

  <div className="absolute inset-0 bg-blue-500 opacity-70 mix-blend-multiply"></div>

 
  <div className="absolute inset-0 flex items-center justify-end pr-8 mr-20">
  {/* <h1 className=" text-3xl font-bold text-left ml-8 justify-start">You Always Get the Best Guidance</h1> */}
  <button className="px-6 py-3 text-blue-500 font-semibold bg-white rounded-3xl shadow-lg transition duration-300">
    Request Quote
  </button>
</div>

</div>

    </>
  );
};

export default Services;

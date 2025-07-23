const projectData = [
  {
    project: "Dubai Sports City",
    scope: "Stadium & Township",
    timeline: "Delivered early by 3 months",
    savings: "₹127 Cr",
  },
  {
    project: "Heritage Hospital, India",
    scope: "Smart Retrofit",
    timeline: "<3% Cost deviation",
    savings: "₹18 Cr",
  },
  {
    project: "Saudi City Infrastructure",
    scope: "Urban infra packages",
    timeline: "33% faster phases",
    savings: "Significant efficiency",
  },
];

const ProjectExcellence = () => {
  return (
    <section className="mustard-section">
      <div className="mustard-section-overlap">
        <h2 className="heading-title ">Project Excellence: Delivered.</h2>
        <p className="paragraph-lg max-w-7xl mx-auto">
          Our track record demonstrates consistent success across diverse institutional projects,
          delivering measurable results for clients worldwide.
        </p>

        {/* Desktop Table */}
        <div className="hidden sm:block mt-10">
            <div className="overflow-hidden rounded-lg  border-r border-l border-t mustard-border " >
          <table className="min-w-full table-auto text-left  rounded-md overflow-hidden">
            <thead className="">
              <tr className="border-b mustard-border">
                
                <th className="px-4 py-3 table-header font-semibold text-sm">Project</th>
                <th className="px-4 py-3 table-header font-semibold text-sm">Scope</th>
                <th className="px-4 py-3 table-header font-semibold text-sm">Timeline Success</th>
                <th className="px-4 py-3 table-header font-semibold text-sm">Cost Savings</th>
              </tr>
            </thead>
            <tbody className="">
              {projectData.map((item, idx) => (
                <tr key={idx} className=" table-row border-b mustard-border">
                  <td className="px-4 py-3">{item.project}</td>
                  <td className="px-4 py-3">{item.scope}</td>
                  <td className="px-4 py-3">{item.timeline}</td>
                  <td className="px-4 py-3">{item.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden mt-10 space-y-6  ">
          {projectData.map((item, idx) => (
            <div key={idx} className=" card-box p-4 rounded-md shadow-sm">
              <div className="mb-2">
                <div className="flex flex-row space-x-2 mb-2">
                    <div className="table-header">Project:</div>
                    <div className=" table-row" > {item.project}</div>
                </div>
                <div className="flex flex-row space-x-2 mb-2">
                    <div className="table-header">Scope:</div>
                    <div className=" table-row" > {item.scope}</div>
                </div>
                 <div className="mb-2">
                <span className="table-header text-sm ">Timeline Success:</span> <span className=" table-row">{item.timeline}</span>
              </div>
                <div className="flex flex-row space-x-1 mb-2">
                    <div className="table-header">Cost Savings:</div>
                    <div className=" table-row" > {item.savings}</div>
                </div>


                {/* <span className="table-header">Project:</span> <span className=" table-row">{item.project}</span>
              </div>
              <div className="mb-2">
                <span className="table-header">Scope:</span> <span className="table-row">{item.scope}</span>
              </div>
              <div className="mb-2">
                <span className="table-header">Timeline Success:</span> <span className=" table-row">{item.timeline}</span>
              </div>
              <div>
                <span className="table-header">Cost Savings:</span> <span className=" table-row">{item.savings}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExcellence;

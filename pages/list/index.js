import React, { useEffect, useMemo, useState } from "react";

const List = () => {
  let storageKey = "jobs";
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState();

  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem(storageKey));
    !!dataLocal && setJobs(dataLocal);
  }, []);

  const handleSubmit = () => {
    if (job) {
      setJobs([job, ...jobs]);
      setJob("");
    }
  };

  // nếu truyền jobs vào mảng phụ thuộc của useEffect thì hàm setItem sẽ được chạy khi setJobs gọi
  useEffect(() => {
    !!jobs && localStorage.setItem(storageKey, JSON.stringify(jobs));
  }, [jobs]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-auto  w-full md:w-1/2 md:shadow-lg xl:w-1/4 border rounded-sm px-5 py-10 justify-center">
        <div className=" py-2 text-center text-3xl">
          <span>Todos App</span>
        </div>
        <div className="w-full h-10 mb-3">
          <input
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Add your new todo"
            className="w-5/6 px-2 py-2 border-gray-500 border rounded-sm"
          />
          <button
            onClick={handleSubmit}
            className=" bg-purple-400 hover:bg-purple-700 ml-5 px-4 py-2 border-gray-500 border rounded-sm"
          >
            +
          </button>
        </div>
        <div className=" grid grid:cols-1  gap-3">
          {jobs &&
            jobs.map((job, index) => (
              <div key={index} className=" rounded-sm bg-gray-200 border p-3">
                {job}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;

// const List = () => {
//   const [job, setJob] = useState("");
//   const [jobs, setJobs] = useState(["lau nha"]);

//   const handleSubmit = () => {
//     if (job) {
//       setJobs([job, ...jobs]);
//       setJob("");
//     }
//   };

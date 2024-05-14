interface WorkInfo {
  webName: string;
  webUrl: string;
  webCoverPc: string;
  webCoverM: string;
  workList: string[];
}

function Works({ info }: { info: WorkInfo }) {
  let lists = info.workList.map((item, key) => {
    return <li key={key}>{item}</li>;
  });

  return (
    <>
      <a
        href={info.webUrl}
        className="group flex flex-col gap-6 rounded-md bg-white p-5 shadow-sm transition-shadow hover:shadow-lg sm:flex-row sm:items-start sm:gap-2"
        target="_blank"
        rel="noreferrer noopener">
        <div className="w-80 flex-none flex items-end gap-2">
          <img
            src={info.webCoverPc}
            className="max-h-32 max-w-60 rounded-md object-cover"
            alt={`${info.webName}_電腦版`}
          />
          {info.webCoverM && <img
            src={info.webCoverM}
            className="max-h-28 max-w-16 rounded-md object-cover"
            alt={`${info.webName}_手機版`}
          />}
        </div>
        <div className="flex-1">
          <div className="mb-2 text-xl font-bold transition-colors group-hover:text-stone-500">
            {info.webName}
          </div>
          <ul className="list-disc pl-5 leading-7">{lists}</ul>
        </div>
      </a>
    </>
  );
}

export default Works;

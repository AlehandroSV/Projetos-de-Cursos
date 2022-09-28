const CardProjects = (props) => {
  return (
    <>
      <div className="flex justify-center border rounded-lg">
        <div className="rounded-lg shadow-lg max-w-sm bg-white dark:bg-gray-700">
          <div className="flex justify-center">
            <img
              className="rounded-t-md w-[400px]"
              src={props.url}
              alt={props.alt}
            />
          </div>
          <div className="p-6 border-t">
            <h5 className="text-xl mb-2 font-bold truncate">{props.title}</h5>
            <p className="text-base mb-4 h-[90px]">{props.description}</p>
            <div className="flex justify-center">
              <a href={props.href} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="rounded-lg px-4 py-1.5 font-medium bg-white dark:bg-gray-700 border border-gray-700 dark:border-white"
                >
                  Acessar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProjects;

const CardProjects = (props) => {
  return (
    <>
      <div class="flex justify-center border rounded-lg">
        <div class="rounded-lg shadow-lg max-w-sm bg-white dark:bg-gray-700">
          <div class="flex justify-center">
            <img
              class="rounded-t-md w-[400px]"
              src={props.url}
              alt={props.alt}
            />
          </div>
          <div class="p-6 border-t">
            <h5 class="text-xl mb-2 font-bold truncate">{props.title}</h5>
            <p class="text-base mb-4 h-[90px]">{props.description}</p>
            <div class="flex justify-center">
              <a href={props.href}>
                <button
                  type="button"
                  class="rounded-lg px-4 py-1.5 font-medium bg-white dark:bg-gray-700 border border-gray-700 dark:border-white"
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

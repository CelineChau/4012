function SearchBar({ setValue }) {
    return (
      <>
        <div className="flex justify-center">
          <div className="mt-10 mb-3 xl:w-96">
            <label
              htmlFor="exampleSearch2"
              className="form-label mb-2 text-gray-700 flex justify-center"
            >
              Search product
            </label>
  
            <div className="input-group relative flex items-stretch w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white border-green-500 focus:outline-none"
                placeholder="Product"
                aria-label="Product"
                aria-describedby="button-addon2"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <button
                className="btn flex px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out items-center"
                type="button"
                id="button-addon2"
                onClick={() => {
                    console.warn('product')
                }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default SearchBar;
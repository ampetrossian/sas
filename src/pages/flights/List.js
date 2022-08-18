function List({ flights, from, to, scrollRef }) {
  return (
    <div
      className="py-10 px-5 bg-gray-50 self-stretch overflow-y-scroll no-scrollbar -mt-32"
      ref={scrollRef}
    >
      <ul className="flex flex-col gap-4">
        {flights.map((flight, index) => (
          <li
            key={flight.id}
            className={`bg-white rounded-lg relative  px-4 py-5 ${
              index === 0 ? "mt-32" : ""
            }`}
          >
            {flight.seatsLeft < 10 && (
              <>
                <div className="bg-red-700 h-1/2 w-1 absolute left-0 top-1/4 rounded-r-lg" />
                <div className="h-4 w-1/2 absolute left-1/4 -top-2 flex justify-center">
                  <div className="h-full rounded-lg bg-gray-200 text-center text-xs text-gray-500 px-2">
                    <span className="font-bold">{flight.seatsLeft}</span> seats
                    left
                  </div>
                </div>
              </>
            )}
            <div className="flex w-full mb-2">
              <div className="basis-3/4 flex">
                <div className="basis-1/3 text-start font-bold">
                  {flight.start}
                </div>
                <div className="basis-1/3 text-center text-gray-500">
                  {flight.duration}
                </div>
                <div className="basis-1/3 text-end font-bold">{flight.end}</div>
              </div>
              <div className="basis-1/4 text-end text-gray-500">Direct</div>
            </div>
            <div className="flex w-full">
              <div className="basis-3/4 flex">
                <div className="basis-1/3 text-start text-gray-500">{from}</div>
                <div className="basis-1/3 text-center self-stretch">
                  <div className="h-1/2 w-full border-b-2 border-dashed border-b-gray-300"></div>
                </div>
                <div className="basis-1/3 text-end text-gray-500">{to}</div>
              </div>
              <div className="basis-1/4 text-end font-bold">{flight.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

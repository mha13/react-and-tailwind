import { useEffect, useState } from "react";

const Coins = () => {
    const [data, setData] = useState(); // Initialize with null
    const [error, setError] = useState(null);
    const [update, setUpdate] = useState(false);


    const fetchData = async () => {
        try {
            const response = await fetch('https://coingecko.p.rapidapi.com/coins/markets?page=1&sparkline=false&vs_currency=usd&per_page=100&order=market_cap_desc', {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
                    'x-rapidapi-key': '1c993e0920msh855af27db3aa57ep1b34abjsn23f51cfad00d'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const jsondata = await response.json();
            setData(jsondata);
            setError(null); // Reset error state on successful fetch
        } catch (error) {
            setError(error.message);
            setData(null); // Reset data state on error
        }
    };

    useEffect(() => {
        fetchData();

    }, [update]); // Re-fetch data when 'update' changes

    const formatPrice = (price) => {
        // Define format options
        const options = {
            minimumFractionDigits: price < 1 ? 6 : 2,
            maximumFractionDigits: price < 1 ? 6 : 2,
        };
        return new Intl.NumberFormat('en-US', options).format(price);
    };

    return (
        <div className="text-slate-400 mt-5">
            {error ? (
                <div className="error">
                    <p>Error: {error}</p>
                    <button className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150"
                        onClick={() => setUpdate(!update)}>Retry</button>
                </div>
            ) : data ? (
                <div className="mt-5">
                    {
                        Array.isArray(data) ? (
                            <div className="flex flex-row flex-wrap">
                                {data.map((coin, key) => (
                                    <div key={key} className="basis-1/3 mx-auto mb-4">
                                        <div className="border border-blue-300 shadow rounded-md m-4 p-4 flex space-x-4 bg-slate-700">
                                            <div className="rounded-full h-10 w-10">
                                                <img src={coin.image} alt={coin.image + ' image'} />
                                            </div>
                                            <div className="flex-1 space-y-6 py-1">
                                                <div className="rounded">
                                                    <h2 className='font-mono font-black text-white'>
                                                        {coin.name}
                                                        <span className="text-gray-300 text-sm relative left-1">{coin.symbol}</span>
                                                    </h2>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="grid grid-cols-4 gap-4">
                                                        <div className="col-span-3 font-mono">${formatPrice(Number(coin.current_price))}</div>
                                                        <div className={`rounded col-span-1 text-center text-white ${coin.price_change_percentage_24h > 0 ? 'bg-green-700' : 'bg-red-600'}`}>
                                                            {coin.price_change_percentage_24h > 0
                                                                ? `▲ ${Math.abs(coin.price_change_percentage_24h.toFixed(2))}%`
                                                                : `▼ ${Math.abs(coin.price_change_percentage_24h.toFixed(2))}%`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        ) : (
                            <div>
                                <p>You've exceeded the Rate Limit. Please visit https://www.coingecko.com/en/api/pricing to subscribe to our API plans for higher rate limits.</p>
                                <button onClick={() => setUpdate(!update)} className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150">
                                    <svg class={`${update ? 'hidden' : 'block'} animate-spin -ml-1 mr-3 h-5 w-5 text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>Reload</button>
                            </div>
                        )
                    }
                </div>
            ) : (
                <h2 className="text-center text-white">Processing ...</h2>
            )}

        </div>
    );
}

export default Coins;

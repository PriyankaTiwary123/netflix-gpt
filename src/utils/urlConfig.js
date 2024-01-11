
export const makeApiCall = async (url, api_options)=>{
    const data = await fetch(url, api_options);
    const json=  await data.json();
    return json.result
}

export const makeApiCall = async (url: string, api_options: any)=>{
    const data = await fetch(url, api_options);
    const json=  await data.json();
    return json.result
}
export const LOGO =  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR ="https://occ-0-435-768.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYyNDg3ODRiOWYwM2RhMzY5MDI1MzMwMjhmMjVjYiIsInN1YiI6IjY1OWQ1ZTE1ZjI5ZDY2MDA5NmU1ZjFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.haWXSWnvatFBWm8hh45gGIa0aU62xQXktXlq9G_ul0I'

    }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/15a8acb9-e25c-45a7-b58d-b043b3fec84c/NL-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'

 export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
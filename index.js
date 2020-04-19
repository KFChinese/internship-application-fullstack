async function handleRequest(request) {
  const init = {

    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },

  }
  const response = await fetch(url, init)
  const results = await gatherResponse(response)
  const NAME = 'Variants'

  const VARIANT_1 = new Response('Variant-1' && HTML1, {
    headers: {
      'content-type': 'text/html',
    },
  })
  fetch(results.variants[1], init)
  const VARIANT_2 = new Response('Variant-2' && HTML2, {
    headers: {
      'content-type': 'text/html',
    },

  })
  fetch(results.variants[0], init)
  const cookie = request.headers.get('cookie')
  if (cookie && cookie.includes(`${NAME}=variant-1`)) {
    return VARIANT_1
  } else if (cookie && cookie.includes(`${NAME}=variant-2`)) {
    return VARIANT_2
  } else {
    // if no cookie then this is a new client, decide a group and set the cookie
    let group = Math.random() < 0.5 ? 'test' : 'control' // 50/50 split
    let response = group === 'control' ? VARIANT_1 : VARIANT_2
    response.headers.append('Set-Cookie', `${NAME}=${group}; path=/`)
    return response
  }
}
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const HTML1 =
  `
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <title>Darude-Sandstorm</title>
  <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu4mvTDfzvct_LBRGn71jjrYOPbxWe9_7UsYiBaAQ9a5IZUYhP&usqp=CAU" type="image/png">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css">
</head>
<body>
  <div class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-yellow-400 opacity-75"></div>
    </div>
    <div class="bg-gray-700 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6">
      <div>
      <iframe
        width="340"
        height="250"
        src="https://www.youtube.com/embed/y6120QOlsfU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    <p class="p-2 "></p>
        <div class="mx-auto flex pt-1 items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h1 class="text-lg leading-6 font-medium text-white" id="title">
            Darude - Sandstorm 
          </h1>
          <div class="mt-2">
            <p class="text-sm leading-5 text-white" id="description">
            Listen to Darude - Sandstorm while being at home! #StayHome
            </p>
          </div>
        </div>
      </div>
      <div>
      <div class="mt-5 sm:mt-6">
        <span class="flex w-full rounded-md shadow-sm">
          <a class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5" href="https://larrychiem.engineer/" id="url">
            Go To my Portfolio!
          </a>
        </span>
      </div>
    </div>
  </div>


<div id="keyboardFuQueue"></div></body></html>
`


const HTML2 = `
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <title>Noisestorm - Crab Rave</title>
  <link rel="icon" href="https://i.ytimg.com/vi/cE0wfjsybIQ/maxresdefault.jpg" type="image/png" >
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css">
</head>
<body>
  <div class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-red-800 opacity-75"></div>
    </div>
    <div class="bg-gray-700 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6">
      <div>
      <iframe
        width="340"
        height="250"
        src="https://www.youtube.com/embed/LDU_Txk06tM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    <p class="p-2 "></p>
        <div class="mx-auto flex pt-1 items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h1 class="text-lg leading-6 font-medium text-white" id="title">
          Noisestorm - Crab Rave
          </h1>
          <div class="mt-2">
            <p class="text-sm leading-5 text-white" id="description">
              Why go outside if you could watch a Crab Rave inside! #StaySafe
            </p>
          </div>
        </div>
      </div>
      <div>
      <div class="mt-5 sm:mt-6">
        <span class="flex w-full rounded-md shadow-sm">
          <a class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5" href="https://larrychiem.engineer/" id="url">
            Go To my Portfolio!
          </a>
        </span>
      </div>
    </div>
  </div>


<div id="keyboardFuQueue"></div></body></html>
`

async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type')
  if (contentType.includes('/json')) {
    return await response.json()
  } else {
    return await response.text()
  }
}
const url = 'https://cfw-takehome.developers.workers.dev/api/variants'

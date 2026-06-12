const CACHE_NAME="cartao-visita-v1";

const urlsToCache=[
    "./",
    "./index.html",
    "./cartaovisita.css"
];

self.addEventListener("install",event =>{event.waitUntil(
    caches.open(CACHE_NAME)
        .then(cache=>cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch",event =>{ 
    event.respondwith(
        caches.match(event.request)
            .then(Response=> Response || fetch(event.request))
    );

});
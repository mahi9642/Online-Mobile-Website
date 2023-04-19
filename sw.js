self.addEventListener('install', evt=>{
    console.log('Service Worker is Registered')
})
self.addEventListener('activate', evt=>{
    console.log('Service Worker is activated')
})
self.addEventListener('fetch', evt=>{
    console.log('Service Worker is fetched')
})
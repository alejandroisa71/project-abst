/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects(){
    return[
      {
        source:'/',
        destination:'/players',
        permanent:true
      }
    ]
  }
}

module.exports = nextConfig

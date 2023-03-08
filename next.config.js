/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  
  },
  images:{
    domains:['img.olhardigital.com.br','scontent.fcrk1-5.fna.fbcdn.net','i0.wp.com','i.ytimg.com','www.wherethemusicmeets.com','m.media-amazon.com','mcdn.wallpapersafari.com','purbalite.net']
  }
}

module.exports = nextConfig
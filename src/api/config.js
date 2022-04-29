export const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/movie/550?',
    apiKey: 'e9354ecaa19a7e714dd1dbf5f8830f72',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
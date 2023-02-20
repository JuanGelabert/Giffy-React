const apiKEY = 'TolKXNWgqKq08n91CjCZy4DvNOqrgqP4'

export default function getGifs({ keyword }) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=20&offset=0&rating=g&lang=es`
    
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const { data } = response
        const gifs = data.map(image => {
          const { images, title, id } = image
          const url = images.original.url
        
          return { title, id, url}
        })
        return gifs
    })
}

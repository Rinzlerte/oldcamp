import React from 'react'
import CarouselGallery from "../campsSectors/CarouselGallery"

const CampGallery = (props) => {
    const images = [
        {
          "id": "1",
          "name": "The Shawshank Redemption",
          "releaseYear": 1994,
          "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
          "url": "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          "image" : "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg"
        },
        {
          "id": "2",
          "name": "The Dark Knight",
          "releaseYear": 2008,
          "description": "When the menace known as The Joker.",
          "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
          "url": "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          "image": "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600"
        },
        {
          "id": "3",
          "name": "Lord of the Rings",
          "releaseYear": 2004,
          "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
          "url": "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          "image": "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600"
        },
        {
            "id": "4",
            "name": "The Shawshank Redemption",
            "releaseYear": 1994,
            "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            "url": "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          "image": "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600"
        },
        {
            "id": "5",
            "name": "The Dark Knight",
            "releaseYear": 2008,
            "description": "When the menace known as The Joker.",
            "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            "url": "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "image": "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600"
          },
          {
            "id": "6",
            "name": "Lord of the Rings",
            "releaseYear": 2004,
            "description": "A meek Hobbit from the Shire and eight companions set out on",
            "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, beatae aliquid excepturi! Distinctio temporibus modi eos in facere eum, eligendi incidunt? Eligendi, ea, explicabo. Repellat laboriosam suscipit natus totam dolores?",
            "url": "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          "image": "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600"
          }
      ]

    return (
        <section className="page-section" id="gallery">
        <div className="container">
          <div className="title_box" style={{marginTop:`20px`}}>
            <h2 className="text-center mt-0">ГАЛЕРЕЯ</h2>
          </div>
          <div className="row" style={{marginTop:`20px`}}>
            <CarouselGallery  data={images}/>
          </div>
        </div>
      </section>
    )
}

export default CampGallery
import React from "react";
import '../css/guitaristSection.css'
import { useState, useEffect } from "react";



const GuitaristSection = () => {

    const [search, setSearch] = useState("")
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)


    useEffect(() => {
        if (fetching) {
            fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
                .then((response) => {
                    if (response.status === 200 || response.ok) {
                        return response.json()
                    }
                    throw new Error();
                }).then(result => {
                    setPhotos([...photos, ...result])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHendler)
        return function () {
            document.removeEventListener('scroll', scrollHendler)
        }
    })

    const scrollHendler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <div className="container">
            <div className="menu">
                <ul>
                    <li> <a href="#">Guitarists </a></li>
                    <li> <a href="#">Pianists</a> </li>
                    <li> <a href="#">Drums</a></li>
                    <li> <a href="#">Vocals</a></li>
                    <li> <a href="#">Category1</a></li>
                </ul>
            </div>

            <div>
                <div className="git">
                    <h2>Guitarists.</h2>

                    <input type="text"
                        placeholder='Search artit 🔍'
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="box">
                    {photos.filter((val) => {
                        if (search == "") {
                            return val
                        } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((item) => (
                        <div className="artistBox" key={photos.id}>
                            <div><img src={item.thumbnailUrl} />
                                <button className="heart">
                                    <i class="fa-solid fa-heart"></i>
                                </button>
                            </div>
                            <div className="name">
                                <div> {item.id}</div>
                            </div>
                            <div className="profile"> {item.title}</div>
                            <div className="starting">
                                <div><p>starting <span>at 5$</span> </p> </div>
                                <div> <button>More</button></div>
                            </div>
                        </div>
                    )
                 )}
                </div>
            </div>
        </div>
    )
};

export default GuitaristSection
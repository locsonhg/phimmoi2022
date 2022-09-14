import { Link, useParams } from 'react-router-dom'
import './Watch.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

const Watch = () => {
    const { slug, tap } = useParams()

    const [detail, setDetail] = useState({})
    const [episodes, setEpisodes] = useState()
    const [episodeActive, setEpisodeActive] = useState(1)
    useEffect(()=>{
        async function fetchDetail(id){
            await axios.get(`https://ophim1.com/phim/${id}`)
            .then(res => {
                setEpisodeActive(res.data.episodes[0].server_data.find(element => element.slug === tap))
                setDetail(res.data.movie)
                setEpisodes(res.data.episodes)
            })
        }
        fetchDetail(slug)
    },[])

    useEffect(() => {
        setEpisodeActive(episodes && episodes[0].server_data.find(element => element.slug == tap))
    }, [tap])

    console.log(tap, episodeActive)

    return (
        <div className='watch-movie'>
            
            <h1>{detail.name} tập {tap}</h1>
            <iframe allowFullScreen id="ytplayer" type="text/html" width="100%" height="500px" src={episodeActive && episodeActive.link_embed} frameborder="0"></iframe>
            <ul className='list-tap'>
                {
                    episodes && episodes[0].server_data.map(element => (
                        <li className='tap'>
                            <Link to={`/${detail.slug}/${element.slug}`}>
                                Tập {element.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Watch;
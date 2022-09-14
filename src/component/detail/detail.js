import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {Row, Col} from 'antd'
import 'antd/dist/antd.css';
import '../detail/detail.css'
import Listmovie from '../listmovie/listmovie';
const Detail = () => {

const {slug} = useParams()
const [detail, setdetail] = useState({})
const [episodes, setEpisodes] = useState()
useEffect(()=>{
    async function fetchDetail(id){
        await axios.get(`https://ophim1.com/phim/${id}`)
        .then(res => {
            setdetail(res.data.movie)
            setEpisodes(res.data.episodes)
        })
    }
    fetchDetail(slug)
},[])
// const detailItem = detail.forEach(item => {
//     console.log(item.name)
// })
console.log(detail)
    return (

        <div className='detail' 
        style={{background: `linear-gradient(to right,#232122,rgba(255,255,255,0)), url(${detail.thumb_url}) center / cover no-repeat`, width: '100%', height: '100vh', opacity: '1.3'}}>
            <Row>
                <Col span={12}>
                    <div className='movie-left'>
                    <div className='detail-info' style={{color: '#fff'}}>
                        <h1 className='name-movie'>{detail.name}</h1>
                        <h2 className='name-country'>{detail.origin_name} {detail.year}</h2>
                        <p className='content-movie'>{detail.content && detail.content.replace(/<p>|<\/p>/gm, '')}</p>
                        <div>
                            <Row>
                            <Col span={12}>
                            <p>
                                <span>
                                Thời gian: {detail.time}
                                </span>
                            </p>
                            <p>
                                <span>
                                Số tập: {detail.episode_current}/{detail.episode_total}
                                </span>
                            </p>
                            <p>
                                <span>Quốc Gia: </span>
                                {
                            detail.category && detail.country.reduce((result, item, index) => {
                                if(detail.country.length - 1 === index)
                                    result += item.name
                                else
                                    result += item.name + ', '

                                return result
                            }, "")}
                               
                            </p>
                        </Col>
                        <Col span={12}>
                            <p>
                            <strong>
                                {detail.lang} - {detail.quality}
                            </strong>
                            </p>
                            <p>
                                <span>Thể loại: </span>
                           {
                            detail.category && detail.category.reduce((result, item, index) => {
                                if(detail.category.length - 1 === index)
                                    result += item.name
                                else
                                    result += item.name + ', '

                                return result
                            }, "")
                           }
                           </p>
                           <p>
                            <span>
                            Năm phát hành: {detail.year}
                            </span>
                           </p>
                        </Col>
                            </Row>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col span={12}>
                <div className='watch'>
                <div className='btn-watch'>
                    <Link to={`/${detail.slug}/${episodes && episodes[0].server_data[9].slug}`}>
                        <button className="btn btn-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>xem</span>
                        </button>
                    </Link>
                </div>
                </div>
                </Col>
            </Row>
        </div>
    );
};

export default Detail;
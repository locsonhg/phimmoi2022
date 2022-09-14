import React from 'react';
import { useState } from 'react';
import './header.css'
import 'antd/dist/antd.css';

import {Row, Col, Input, Menu} from 'antd'
import { VideoCameraOutlined, AudioOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Search } = Input;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 166,
        color: '#1890ff',
      }}
    />
  );
const onSearch = (value) => console.log(value);
// thanh menu
const items = [
    {
      label: 'Tranh chủ',
      key: 'home',
    },
    {
        label: 'Phim bộ',
        key: 'movie-all'
    },
    {
        label:'Phim lẻ',
        key: 'movie-one'
    },
    {
        label:'Phim chiếu rạp',
        key: 'movie-rap'
    },
    {
      label: 'Thể Loại',
      key: 'SubMenu',
      children: [
        
          
            {
              label: 'Đam mỹ',
              key: 'setting:1',
            },
            {
              label: 'Hành động',
              key: 'setting:2',
            },
            {
                label: 'Hài hước',
                key: 'setting:3',
            },
            {
                label: 'Hoạt hình',
                key: 'setting:4',
            },
            {
                label: 'Hoạt hình',
                key: 'setting:5',
            },
            {
                label: 'Tâm lí',
                key: 'setting:6',
            },
            {
                label: 'Tình cảm',
                key: 'setting:7',
            },
        
      ],
    },
    {
        label: 'Quốc gia',
        key: 'menu-nation',
        children: [
          
            
              {
                label: 'Trung Quốc',
                key: 'nation:1',
              },
              {
                label: 'Việt Nam',
                key: 'nation:2',
              },
              {
                  label: 'Thái Lan',
                  key: 'nation:3',
              },
              {
                  label: 'Nhật Bản',
                  key: 'nation:4',
              },
              {
                  label: 'Mỹ',
                  key: 'nation:5',
              },
              
          
        ],
      },
  ];
  
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return (
        <>
        <div className='header'>
            <Row>
                <Col span={12}>
                    <div className='header_logo'>
                           <Link to='/'>
                           <h1 style={{color: '#fff'}}>
                            <VideoCameraOutlined 
                                style={{marginRight: '10px', fontSize: '26px'}}
                            />
                            Phim Hay
                            </h1>
                            
                           </Link>
                    </div>
                </Col>
                <Col span={12}>
                <div className='header_search'>
                <Search
                placeholder="Search"
                allowClear
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
                />
                </div>
                </Col>
            </Row>
        </div>
        <div >
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{background: '#000', color: '#fff'}}/>
        </div>
        </>

    );
};

export default Header;
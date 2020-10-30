import React, { Component, useState } from 'react';
import { Spin } from 'antd';
import { ImageWrapper } from './HomePage.style';



const API = 'https://random.dog/woof.json';
const videoType = ['mp4']

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogPictures: [],
            isLoaded: false,
        }
        this.fetchAPIData();
    }

    fetchAPIData = () => {
        fetch(API)
            .then(response =>
                response.json()
            )
            .then(json => {
                this.setState({
                    dogPictures: json,
                    isLoaded: true,
                })
                console.log("Print json files:", this.state.dogPictures);
            })
    }

    getFileTyle = (url) => {
        const type = url.split('.').pop();
        console.log("#######", type);
        if (videoType.includes(type)) {
            console.log("this is a video!!!!!!!!");
            return 'video';
        }
        else {
            return 'image';
        }
    }

    renderDifferentTypes = (url) => {
        let type = this.getFileTyle(url);
        switch (type) {
            case 'image':
                return <img src={url} alt='img' />;
            case 'video':
                return <video controls>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            default:
                console.log("Error type of Message", type);
        }
    }

    render() {
        var { isLoaded, dogPictures } = this.state;
        if (!isLoaded) {
            return <Spin></Spin>;
        }
        else {
            return (
                <div>
                    <ImageWrapper>
                        {this.renderDifferentTypes(this.state.dogPictures.url)}
                    </ImageWrapper>
                </div>
            );
        }
    }
}

export default HomePage;
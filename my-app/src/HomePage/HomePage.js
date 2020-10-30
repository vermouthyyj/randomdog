import React, { Component, useState } from 'react';
import { Spin } from 'antd';
import { ImageWrapper } from './HomePage.style';



const API = 'https://random.dog/woof.json';
const videoType = ['mp4']
const imageType = ['png','jpg','jpeg','gif']

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogPictures: [],
            isLoaded: false,
        }
        this.fetchData(API, 8);
    }

    async fetchData(url,size) {
        let result = [];
    
        for (let i = 0; i < size; i++) {
            let response = await fetch(url, {
                method: 'GET'
            });
    
            let data = await response.json();
            let type = this.getFileType(data.url);
    
            // refetch if type is not image nor video
            while (type === 'invalid') {
                response = await fetch(url, {
                    method: 'GET'
                });
                data = await response.json();
                type = this.getFileType(data.url);
            }
    
            result.push({
                url: data.url, 
                type: type
            })
        }
        this.setState({
            dogPictures: result,
            isLoaded: true,
        })
    }

    // fetchAPIData = () => {
    //     fetch(API)
    //         .then(response =>
    //             response.json()
    //         )
    //         .then(json => {
    //             this.setState({
    //                 dogPictures: json,
    //                 isLoaded: true,
    //             })
    //             console.log("Print json files:", this.state.dogPictures);
    //         })
    // }

    getFileType = (url) => {
        const type = url.split('.').pop();
        console.log("#######", type);
        if (videoType.includes(type)) {
            console.log("this is a video!!!!!!!!");
            return 'video';
        }
        else if (imageType.includes(type)) {
            return 'image';
        }
        else {
            return 'invalid';
        }
        
    }

    renderDifferentTypes = (url) => {
        let type = this.getFileType(url);
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
                        <div>
                        {dogPictures.map(item => (
                            this.renderDifferentTypes(item.url)
                        ))}
                        </div>
                    </ImageWrapper>
                </div>
            );
        }
    }
}

export default HomePage;
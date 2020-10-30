import React, { Component } from 'react';
import { Spin } from 'antd';
import { ImageWrapper, ButtonWrapper } from './HomePage.style';



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

    getFileType = (url) => {
        const type = url.split('.').pop();
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

    renderDifferentTypes = (url,index) => {
        let type = this.getFileType(url);
        switch (type) {
            case 'image':
                return <img src={url} key={index} alt='img' />;
            case 'video':
                return <video key={index} controls>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            default:
                console.log("Error type of Message", type);
        }
    }
    
    onChange = () => {
        window.location.reload();
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
                        {dogPictures.map((item,index) => (
                            this.renderDifferentTypes(item.url,index)
                        ))}
                    </ImageWrapper>
                    <ButtonWrapper onClick={this.onChange}>Change Them!
                    </ButtonWrapper>
                </div>
            );
        }
    }
}

export default HomePage;
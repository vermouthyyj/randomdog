import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { ImageWrapper, PageWrapper, Background } from './HomePage.style';
import { CircleToBlockLoading } from 'react-loadingg';

// constant variables
const API = 'https://random.dog/woof.json';
const ISVIDEO = ['mp4']
const ISIMAGE = ['png', 'jpg', 'jpeg', 'gif']
const PHOTONUM = 8;

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogPictures: [],
            isLoaded: false,
        }
        // render for the first time
        this.fetchPhotos(API, PHOTONUM);
    }

    // fetch 8 photos asynchronously
    async fetchPhotos(url, size) {
        let photoList = [];

        for (let i = 0; i < size; i++) {
            let response = await fetch(url, {
                method: 'GET'
            });

            let data = await response.json();
            let type = this.getFileType(data.url);

            // refetch if type is not image nor video
            while (type === 'ERROR') {
                response = await fetch(url, {
                    method: 'GET'
                });
                data = await response.json();
                type = this.getFileType(data.url);
            }

            photoList.push({
                url: data.url,
                type: type
            })
        }
        this.setState({
            dogPictures: photoList,
            isLoaded: true,
        })
    }

    // check if the file is a video
    getFileType = (url) => {
        const type = url.split('.').pop();
        if (ISVIDEO.includes(type)) {
            console.log("this is a video!!!!!!!!");
            return 'video';
        }
        else if (ISIMAGE.includes(type)) {
            return 'image';
        }
        else {
            return 'ERROR';
        }

    }

    renderDifferentTypes = (url, index) => {
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

    // re-render when clicking the Button
    onChange = () => {
        //reload the photos here
        this.fetchPhotos(API, PHOTONUM);
    }



    render() {
        var { isLoaded, dogPictures } = this.state;
        if (!isLoaded) {
            return <CircleToBlockLoading></CircleToBlockLoading>;
        }
        else {
            return (
                <Background>
                    <h1>Random dogs</h1>
                    <PageWrapper>
                        <div>
                            <ImageWrapper>
                                {dogPictures.map((item, index) => (
                                    this.renderDifferentTypes(item.url, index)
                                ))}
                            </ImageWrapper>
                            <Button size={"large"}
                                style={{ width: "50%", heigth: "200%", display: "block", margin: "3% auto" }}
                                type="primary"
                                onClick={this.onChange}>
                                Get changed!
                            </Button>
                        </div>
                    </PageWrapper>
                </Background>
            );
        }
    }
}

export default HomePage;
import React from 'react';
import axios from 'axios';
import { get } from 'lodash';
import '../../styles/FoodPosts.css'

class FoodPosts extends React.Component {
    constructor(props) {
        super(props);

        this.generateImageEls = this.generateImageEls.bind(this);

        this.state = {
            isFetchingData: true,
            posts: null,
        };
    }

    componentDidMount() {
        axios.get(`https://www.instagram.com/eatsbydrei/?__a=1`)
            .then(res => {
                const data = res.data;
                const igInfo = get(data, 'graphql.user.edge_owner_to_timeline_media.edges', [])
                    .filter(data => get(data, 'node.__typename') !== "GraphVideo");
                console.log(igInfo);
                const posts = igInfo.map(data => get(data, 'node.display_url'));
                this.setState({ isFetchingData: false, posts });
            })
    }

    generateImageEls() {
        const imgLinks = this.state.posts;
        return imgLinks.map(img => {
            return (
                    <div className="flex-item">
                        <img src={`${img}`} className="gallery__img" key={imgLinks.indexOf(img)}/>
                    </div>
            )
        })
    }

    render() {
        const { isFetchingData } = this.state;
        if (isFetchingData) {
            return (<div>Loading...</div>);
        }

        const imageEls = this.generateImageEls();
        return (
            <div className="food-container">
                <div className="header">
                    <h1>My Latest Work</h1>
                    <hr></hr>
                </div>
                <div className="images">
                    {imageEls}
                </div>
            </div>
        )
    }
}

export default FoodPosts;
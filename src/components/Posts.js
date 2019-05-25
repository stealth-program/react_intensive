import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://itproger.com/img/courses/1523436361.jpg"/>
                <Post alt="nature" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"/>
            </div>

        )
    }
}
import React, {Component} from 'react';
import User from './User';
import Instaservice from "../services/instaservice";
import ErrorMessage from "./ErrorMessage";

export default class Users extends Component{

    Instaservice = new Instaservice();
    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.Instaservice.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts: posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, id} = item;

            return (
                <User
                    src={photo}
                    alt={altname}
                    name={name}
                    min id={id}/>
            )
        })
    }

    render() {

        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);

        return (
            <div className="right">
                <User
                    src="http://rockcult.ru/wp-content/uploads/2016/11/Elvis-Presley-300x300.jpg"
                    alt="prince" name="harry_the_prince" id={9999}/>
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}
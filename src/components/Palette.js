import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import  Spinner from './Spinner';

export default class Palette extends Component {
    Instaservice = new InstaService();
    state = {
        photos: [],
        error: false,
        loading: true
    };

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.Instaservice.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError);
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos: photos,
            error: false,
            loading: false
        })
    }

    onError = (err) => {
        console.log(err)
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {src, alt, id} = item;

            return (
                <img src={src} alt={alt} key={id}/>
            )
        })
    }

    render() {
        const {error, photos, loading} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        if (loading) {
            return <Spinner/>
        }

        const items = this.renderItems(photos);

        return (
            <div className="palette">
                {items}
            </div>
        )
    }

}
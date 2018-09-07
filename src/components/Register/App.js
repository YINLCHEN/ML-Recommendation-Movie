import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MovieElement from './MovieElement';
import data from './data.json';

const styles = {
    Content: {
        display: 'flex',
        flexWrap: 'wrap'
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
    }

    render() {
               
        const element =  Object.keys(data).map((key, index) => 
            <MovieElement
                key = {index}
                year = {data[key].year}
                movieName = {data[key].name}
                movie_total_views = {data[key].total_views}
                movie_total_eps = {data[key].total_eps}
                movie_vertical_poster = {data[key].vertivcal_poster}
                movie_src = {data[key].src}
                data = {data[key]}
            />
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={styles.Content}>
                            {element}
                        </div>
                    </div>
                </div>
            </div>       
        );
    }
}

export default withStyles(styles)(App);
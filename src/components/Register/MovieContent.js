import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieElement from './MovieElement';

const styles = {
    Content:{
        display: 'flex',
        flexWrap: 'wrap'
    }
};

class MovieContent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
    }

    render() {
        const data = this.state.data
        const searchStr = this.props.searchStr

        function findSearchStr(element){
            if(searchStr===0 || searchStr===''){
                return true
            }
            else{
                const movieName = element.props.movieName
                for(var i=0 ; i<movieName.length ; i++){
                    if(movieName.toUpperCase().substring(i, i+searchStr.length) === searchStr.toUpperCase()){
                        return true
                    }
                }
            }
        }
        
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
        ).filter(findSearchStr);

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

function mapStateToProps(state) {
    return {
        searchStr: state.searchStr
    };
}
  
export default connect(mapStateToProps)(MovieContent);
  
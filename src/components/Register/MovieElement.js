import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TagManager from 'react-gtm-module';

var GLOBAL = require('../../globals');

const styles = {
    Element: {
        width: '200px',
        margin: '50px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    Image: {
        width: '100%',
        cursor: 'pointer'
    },
    Name: {
        color: 'white',
        textAlign: 'center'
    }
};

class MovieElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: this.props.year,
            name: this.props.movieName,
            total_views: this.props.movie_total_views,
            total_eps: this.props.movie_total_eps,
            vertical_poster: this.props.movie_vertical_poster,
            src: this.props.movie_src,
            data: this.props.data,
            articleid: '',
            open: false
        };
    }

    handleClick(data) {
        const tagManagerArgs = {
            gtmId: 'GTM-5C7GTMM',
            dataLayer: {
                uid: null,
                articleid: null,
                timeonpage: null
            }
        }

        TagManager.initialize(tagManagerArgs)

        this.setState({
            open: true,
            data: data,
            articleid: data.articleID,
            time: new Date()
        });
    }

    handleClose = () => {
        const timeonpage = new Date() - this.state.time;

        const tagManagerArgs = {
            gtmId: 'GTM-5C7GTMM',
            dataLayer: {
                uid: GLOBAL.USERNAME,
                articleid: 'Article' + this.state.articleid,
                timeonpage: timeonpage / 1000
            }
        }

        TagManager.initialize(tagManagerArgs)

        this.setState({ open: false });
    };

    render() {
        var Title = this.state.data.year + "年 " + this.state.data.name;
        var Content = this.state.data.total_views + "人數觀看 總共" + this.state.data.total_eps + "集";

        return (
            <div style={styles.Element}>
                <div style={{ height: '280px', overflow: 'hidden' }}>
                    <img style={styles.Image} src={this.state.vertical_poster} alt={this.state.name}
                        onClick={() => this.handleClick(this.state.data)} />
                </div>
                <div style={styles.Name}>{this.state.name}</div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{Title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {Content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" target="_blank"
                            href={this.state.data.src} autoFocus>
                            Play!
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default MovieElement;

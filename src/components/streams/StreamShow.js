import React from 'react';
import flv from 'flv.js'
import { connect } from 'react-redux';

import { getStream } from '../../actions';

class StreamShow extends React.Component {

    constructor(props) {
        super(pros);
        this.videoRef = React.createRef();
    }
    componentDidMount () {
        this.props.getStream(this.props.match.params.id);
    }

    render() {
        
        if(!this.props.stream) {
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.stream;

        return (
            <div>
                <video ref={this.videRef} style={{ width: '100%'}} controls/>
                <h1>{ title }</h1>
                <h5>{ description }</h5>
            </div>
        );
    }
    
};


const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { getStream }
)(StreamShow);
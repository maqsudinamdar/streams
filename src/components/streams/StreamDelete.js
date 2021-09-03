import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Modal from '../Modal';

import history from '../../history';

import { getStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {


    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    renderAction() {
        const id = this.props.match.params.id;

        return (
            <React.Fragment>
                <button 
                    onClick={ () => this.props.deleteStream(id) } 
                    className="ui button negative">Delete</button>
                <Link 
                    to='/'
                    className="ui button"
                >Cancel</Link>
            </React.Fragment>
        );
    };


    renderContent() {
        if(!this.props.stream) {
            return "Are you sure you want to delete?";
        }
        return `Are you sure you want to delete stream with title: ${this.props.stream.title}`
    }

    render () {
        
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={ () => history.push('/') }
            />    
        );
    }

};

const mapStateToProps = (state, ownProps ) => {
    return { stream : state.streams[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { getStream, deleteStream }
)(StreamDelete);
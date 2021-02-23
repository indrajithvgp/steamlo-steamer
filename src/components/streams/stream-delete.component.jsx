import React from 'react'
import Modal from '../modal'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream, deleteStream} from '../../actions'
import {Link} from 'react-router-dom'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderContent(){
        if(!this.props.stream){
            return 'Are You Sure you want to delete the stream'
        }
        return `Are You Sure you want to delete ${this.props.stream.title}`
    }

    renderActions(){
        const {id} = this.props.match.params
        return(
            
            <React.Fragment>
                <button onClick={()=>this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </React.Fragment>
        )
        
    }
    render() {
    
        return (
            
            <Modal onDismiss={()=>history.push('/')} title="Delete Stream" content={this.renderContent()} actions={this.renderActions()}/>

        )
    }
    
}

const mapStateToProps = (state, ownProps)=>{
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)

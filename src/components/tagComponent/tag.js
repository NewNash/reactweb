import React from "react";
import {connect} from 'react-redux'
import './tagContainer.scss'

class TagComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: 'getTagsAsync'})
    }

    render() {
        return (
            <div className='tagContainer'>
                <h3>热门标签</h3>
                    <ul>
                        {this.props.tags.map(((tag, index) => (
                        <li key={index}>
                            <a href="/">
                                {tag}
                            </a>
                        </li>
                        )))}
                    </ul>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    tags: state.tags
})
TagComponent = connect(mapStateToProps)(TagComponent)
export default TagComponent
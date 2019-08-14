import React from "react";
import {connect} from 'react-redux'
import './tagContainer.scss'
import { Button } from 'antd';

class TagComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: 'getTagsAsync'})
    }

    render() {
        const tags = this.props.tags
        return (
            <div className='tagContainer'>
                <h3>热门标签</h3>
                    <ul>
                        {tags.map((tag,index) => (
                        <li key={index}>
                            <Button>{tag}</Button>
                        </li>
                        ))}
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
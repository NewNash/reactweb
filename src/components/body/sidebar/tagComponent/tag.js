import React from "react";
import {connect} from 'react-redux'
import './tagContainer.scss'
import { Button } from 'antd';
import {Link} from 'react-router-dom'

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
                            <Link to={"/tag/"+tag}><Button>{tag}</Button></Link>
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
import React from "react";
import {connect} from "react-redux";
import './main.scss'
class Main extends React.Component{
    componentDidMount() {
        this.props.fetchArticleAsync()
    }

    render() {
        const contents = this.props.articles.content
        console.log(contents)
        // const allArticleLen = this.props.articles.contentLength
        return (
            <div className="artilceContainer">
                {contents.map((content)=>(
                    <div key={content._id} className="articleItemBox">
                        <img src={content.imgSrc} alt="" className="articleImg"/>
                        <div className="articleBody">
                            <h3 className="articleTitle"> {content.title}</h3>
                            <p className="articleContent" dangerouslySetInnerHTML={{__html:content.content}}/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    articles:state.articles
})
const mapDispatchToProps=(dispatch)=>({
    fetchArticleAsync:()=>(dispatch({type:'getArticleAsync'})),
})

Main = connect(mapStateToProps,mapDispatchToProps)(Main)
export default Main
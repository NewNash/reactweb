import React from "react";
import {connect} from "react-redux";
import './main.scss'
import {Link} from "react-router-dom";

class Main extends React.Component{
    componentDidMount() {
        this.props.fetchArticleAsync()
    }
    static handleContent(content){
        return content.replace(/<\/?[^>]*>/g, '').replace(/[&npsp][&nbsp]/ig, '').substring(0,250)
    }
    render() {
        const contents = this.props.articles.content
        return (
            <div className="artilceContainer">
                {contents.map((content)=>(
                    <div key={content._id} className="articleItemBox">
                        <img src={content.imgSrc} alt="" className="articleImg"/>
                        <div className="articleBody">
                            <Link to={"/article/"+content._id}><h3 className="articleTitle"> {content.title}</h3> </Link>
                            <p className="articleContent" >
                                {Main.handleContent(content.content)}
                            </p>
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
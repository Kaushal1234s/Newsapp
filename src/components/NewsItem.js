import React, { Component } from 'react'
import img from './th.jpg'


export default class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;    //these title,description,imageUrl are props which can be accessed by this.props
    return (
      <div className="my-3">
        <div className="card" >  
        <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
        }}>
            <span className="badge rounded-pill bg-danger">{source}

            </span>
            </div>   
        {/* idhar width ko js mein likh diya */}
  <img src={!imageUrl?img:imageUrl} alt='' className="card-img-top"/>
  {/* agar imageUrl none hua toh img(matlab th.jpg) use hogi */}
  <div className="card-body">
    <h5 className="card-title">{title}...  </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small> </p>
    <a href={newsUrl}  rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>  
    {/* target='_blank' or "_blank" ka matlab ki jab read more pe click karenge toh news new tab mein khul jayegi */}
    {/* rel="noreferrer" ye use karne ke liye vs code ne kaha tha */}
  </div>
</div>
      </div>
    )
  }
}
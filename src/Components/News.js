import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor(){
    super();
    console.log(" Hello I am constructer from News Component");
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  
  async componentDidMount(){
    // console.log("cdm")

    let url  ="https://newsapi.org/v2/top-headlines?country=in&apiKey=c87380c362db480b90f2cabfa0da508a";
     
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);

    this.setState(
      {
        articles:parsedData.articles,
        totalResults:parsedData.totalResults
      }
    )
 
  }

  handleNextButton = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
      // Check if there are more pages to fetch
      return;
    }
  
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c87380c362db480b90f2cabfa0da508&page=${this.state.page + 1}&pageSize=10`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
  
    console.log(parsedData);
  
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      // totalResults: parsedData.totalResults // Update totalResults
    });
  }
  
  handlePrevButton=async ()=>{

    console.log("Previous");
    let url  =`https://newsapi.org/v2/top-headlines?country=in&apiKey=c87380c362db480b90f2cabfa0da508&page=${this.state.page-1}&pageSize=10`;
     
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);

    
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
      });

  }

  render() {
    console.log("render")
    return (
      <div className='container my-5'>
        <h1>InfoToday - Top Headlines</h1>
        
        <div className='row'>
        {this.state.articles && this.state.articles.map((element)=>{
          //return the card of newsItem here
          return <div className='col-md-4' key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,40)+"...":"..."} description={element.description?element.description.slice(0,100)+"...":"..."} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
          
        </div>
         <div className='container d-flex justify-content-between'>
         <button type="button" disabled={this.state.page<=1} className="btn btn-outline-primary" onClick={this.handlePrevButton}>&larr; Previous</button>

         <button type="button"  className="btn btn-outline-primary" onClick={this.handleNextButton}>Next &rarr;</button>

         </div>
      </div>
    )
  }
}

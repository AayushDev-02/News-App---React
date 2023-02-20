import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 15,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  articles = [
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": null,
      "title": "Entire team handshake snub one player",
      "description": "Scotland&rsquo;s cricketers refused to shake hands with rape-accused Nepal star Sandeep Lamichhane following a match between the two nations in Kirtipur on Friday.",
      "url": "https://www.news.com.au/sport/cricket/scotlands-entire-team-handshake-snub-rape-accused-rival/news-story/52689c2b1020fe06fa78b8c2abe41934",
      "urlToImage": "https://content.api.news/v3/images/bin/f2c753fc78083124e6765654e7b3b240",
      "publishedAt": "2023-02-18T09:49:00Z",
      "content": "Scotland’s cricketers refused to shake hands with rape-accused Nepal star Sandeep Lamichhane following a match between the two nations in Kirtipur on Friday.\r\nLamichhane is accused of raping a 17-yea… [+2434 chars]"
    },
    {
      "source": {
        "id": "google-news-au",
        "name": "Google News (Australia)"
      },
      "author": "Courtney Gould",
      "title": "PM talks cricket, trade with Indian minister",
      "description": "<p>Anthony Albanese has talked up Australia&rsquo;s relationship with India ahead of his upcoming trip to the subcontinent. </p>",
      "url": "https://www.news.com.au/world/asia/anthony-albanese-meets-with-indias-external-affairs-minister/news-story/335703dc2708e48003a303b420a6cf0f",
      "urlToImage": "https://content.api.news/v3/images/bin/24191c4c0f5214f735ef1f3b3b6db5ca",
      "publishedAt": "2023-02-18T02:01:45+00:00",
      "content": "<p>Anthony Albanese has talked up Australia&rsquo;s relationship with India ahead of his upcoming trip to the subcontinent. </p>"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Anthea Moodie",
      "title": "Blind and vision-impaired cricketers in Canberra can now play the game they love thanks to the National Cricket Inclusion Championships",
      "description": "Blind and vision-impaired cricketers in Canberra now have a team in the National Cricket Inclusion Championships, taking in players from Tasmania to make up numbers.",
      "url": "http://www.abc.net.au/news/2023-02-18/act-vision-impaired-cricketers-team-up-with-tasmanian-players/101992392",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/81abeadb84827185e84b7e7a2731c6e3?impolicy=wcms_crop_resize&cropH=694&cropW=1233&xPos=0&yPos=26&width=862&height=485",
      "publishedAt": "2023-02-17T21:14:12Z",
      "content": "When Clifton Plummer donned his cricket kit and took the field last week, it was the first time he'd played in five years.\r\nNot because he didn't want to, but because there wasn't a team for him to j… [+4138 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor() {
    super()
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
      
    }
  }

  async updateNews() {
    console.log(this.setState.page)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09b1caca8c0a47978deb5d0e9773c0d0&page=${this.state.page}&pageSize=${this.props.pageSize}`

    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    })
  }


  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09b1caca8c0a47978deb5d0e9773c0d0&page=1&pageSize=${this.props.pageSize}`

    this.updateNews()
  }


  getTitle(title) {
    if (title === null) {
      return "No Title";
    }
    if (title.length > 40) {
      return title.substring(0, 40) + "..."
    } else {
      return title
    }
  }

  handleNextClick = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09b1caca8c0a47978deb5d0e9773c0d0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

    // //loading
    // this.setState({ loading: true })

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   loading:false,
    // })

    // this.setState({
    //   page: this.state.page + 1,
    // })

    console.log(this.state.page);
    this.setState({
      page: this.state.page + 1,
    })

    this.updateNews();

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }



  handlePrevClick = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09b1caca8c0a47978deb5d0e9773c0d0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`

    // this.setState({ loading: true })

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   loading:false,
    // })

    // this.setState({
    //   page: this.state.page - 1,
    // })
    // console.log(this.state.page);

    this.setState({
      page: this.state.page - 1,
    })

    await this.updateNews()

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }


  render() {
    return (
      <div className='mx-10' >
        {this.state.loading && <Spinner />}
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-10 mt-20 gap-x-10 gap-y-10 px-16 md:px-20 lg:px-40  h-fit'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='' key={element.url}>

              <NewsItem title={this.getTitle(element.title)} description={element.description ? element.description.slice(0, 95) : "No Description"} newsUrl={element.url ? element.url : "/"} imageUrl={element.urlToImage ? element.urlToImage : 'https://i.insider.com/63ef547db66c280019d78597?width=1200&format=jpeg'} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? new Date(element.publishedAt).toGMTString() : "Unknown Date"} source={element.source.name} />
            </div>

          })}
        </div>

        <div className='flex items-center justify-between mx-40 py-10'>

          <button type="button" className="w-28 disabled:invisible text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr; Previous</button>
          {console.log(Math.ceil(this.state.totalArticles / this.state.pageSize))}          
          <button type="button" className="w-24 disabled:invisible text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles /  this.props.pageSize)}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}



export default News

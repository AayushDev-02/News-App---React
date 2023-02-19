import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  [
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": null,
      "title": "Entire team handshake snub one player",
      "description": "<p>Scotland&rsquo;s cricketers refused to shake hands with rape-accused Nepal star Sandeep Lamichhane following a match between the two nations in Kirtipur on Friday.</p>",
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
  
  constructor(){
    super()
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='mx-auto mt-20 space-y-10 w-fit  '>
        <div className='flex space-x-10 '>
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
        </div>
        <div className='flex space-x-10'>
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
        </div>
        <div className='flex space-x-10'>
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
        </div>
        <div className='flex space-x-10'>
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
        </div>
        <div className='flex space-x-10'>
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          <NewsItem title="Title 1" description="akwn akwu ndawukd nawkd unakw dn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
        </div>

      </div>
    )
  }
}

export default News

import { Divider } from 'antd'
import React from 'react'
import '../styles.css'
import NewsItem from './NewsItem'

interface INewsItem {
  imageSrc: string
  title: string
  excerpt: string
  // Add other properties as needed
}
// Define the type of the newsData prop
interface NewsListProps {
  newsData: INewsItem[]
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => (
  <div className="information-container-right">
    {newsData.map((news, index) => (
      <React.Fragment key={index}>
        <NewsItem {...news} />
        {index !== newsData.length - 1 && (
          <Divider orientationMargin="0" style={{ borderColor: '#fe9322' }} />
        )}
      </React.Fragment>
    ))}
  </div>
)

export default NewsList

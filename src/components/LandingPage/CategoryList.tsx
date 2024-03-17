import { List } from 'antd'
import React from 'react'

interface ICategoryItem {
  href: string
  title: string
  imageSrc: string
  content: string
}

// Define the type of the newsData prop
interface CategoryListProps {
  data: ICategoryItem[]
}

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  const align = 'center'

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
          align,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.title} extra={<img width={272} alt="logo" src={item.imageSrc} />}>
            <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
            {item.content.substring(0, 300)} ...
          </List.Item>
        )}
      />
    </>
  )
}
export default CategoryList

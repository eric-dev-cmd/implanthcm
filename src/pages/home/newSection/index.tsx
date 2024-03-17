import CategoryList from '@/components/LandingPage/CategoryList'
import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import { createStyles } from 'antd-style'
import React from 'react'

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i} `,
  imageSrc: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help pe. We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help peWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help pe',
}))

const useStyles = createStyles(() => {
  return {
    title: {
      display: 'flex',
      justifyContent: 'center',
      fontWeight: 'bold',
      padding: '20px 0px',
    },
  }
})

const NewSection: React.FC = () => {
  const { styles } = useStyles()

  return (
    <>
      <Topmenu />
      <main style={{ padding: '0.5% 15%' }}>
        <h3 className={styles.title}>TIN TỨC</h3>
        <CategoryList data={data} />
      </main>
      <Footer />
    </>
  )
}
export default NewSection

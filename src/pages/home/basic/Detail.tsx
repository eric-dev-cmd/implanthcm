import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import { getDataBlogByID } from '@/services/swagger/getDetails'
import { createStyles } from 'antd-style'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
moment().locale('vi')

const useStyles = createStyles(() => {
  return {
    categoryName: {
      color: '#dd9933',
      textDecoration: 'none',
      fontSize: '1em',
      fontWeight: '700',
    },
    content: {
      width: '100%',
      whiteSpace: 'pre-wrap',
    },
    divider: {
      display: 'block',
      margin: '1em 0',
      backgroundColor: 'rgba(0, 0, 0, .1)',
      border: 'none',
    },
    dividerTop: {
      width: '10%',
      height: '3px',
    },
    uploadInfo: {
      padding: '10px 0px',
      borderTop: '1px solid rgba(0, 0, 0, .1)',
      borderBottom: '2px solid rgba(0, 0, 0, .1)',
    },
  }
})

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [htmlContent, setHtmlContent] = useState('')
  const [data, setData] = useState({ Title: '', CreateDate: '', CreateBy: '' })
  const { styles } = useStyles()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataBlogByID({ blogId: id })
        if (result.Result === 0) {
          setHtmlContent(result.Data[0]?.Content)
          setData(result.Data[0])
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Topmenu />
      <main
        style={{
          padding: '30px 0px',
          maxWidth: '1250px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}>
        <a href="#" className={styles.categoryName}>
          TIN TỨC
        </a>
        <h1 style={{ marginTop: '10px' }}>{data.Title}</h1>
        <hr className={`${styles.divider} ${styles.dividerTop}`} />
        <p>
          Đăng ngày{' '}
          <span className={styles.categoryName}>{moment(data.CreateDate).format('LL')}</span> bởi{' '}
          <a href="#" className={styles.categoryName}>
            {data.CreateBy}
          </a>
        </p>
        <pre className={styles.content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <p className={styles.uploadInfo}>
          {' '}
          Đã được đăng trong{' '}
          <a href="#" className={styles.categoryName}>
            Tin tức
          </a>
          . Xem{' '}
          <a href="#" className={styles.categoryName}>
            liên kết
          </a>
        </p>
      </main>
      <Footer />
    </>
  )
}

export default Detail

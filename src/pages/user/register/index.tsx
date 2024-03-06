import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { history, Link, useRequest } from '@umijs/max'
import { Button, Form, Input, message, Tabs } from 'antd'
import type { Store } from 'antd/es/form/interface'
import type { FC } from 'react'
import { useEffect } from 'react'
import type { StateType } from './service'
import { fakeRegister } from './service'
import useStyles from './style.style'
const FormItem = Form.Item

const Register: FC = () => {
  const { styles } = useStyles()
  const confirmDirty = false
  let interval: number | undefined

  const [form] = Form.useForm()
  useEffect(
    () => () => {
      clearInterval(interval)
    },
    [interval],
  )

  const { loading: submitting, run: register } = useRequest<{
    data: StateType
  }>(fakeRegister, {
    manual: true,
    onSuccess: (data, params) => {
      if (data.status === 'ok') {
        message.success('注册成功！')
        history.push({
          pathname: `/user/register-result?account=${params[0].email}`,
        })
      }
    },
  })

  const onFinish = (values: Store) => {
    register(values)
  }

  const checkConfirm = (_: any, value: string) => {
    const promise = Promise
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('Mật khẩu không khớp!')
    }
    return promise.resolve()
  }

  const checkPassword = (_: any, value: string) => {
    const promise = Promise
    if (!value) {
      return promise.reject('Hãy nhập mật khẩu!')
    }
    if (value.length < 6) {
      return promise.reject('')
    }
    if (value && confirmDirty) {
      form.validateFields(['confirm'])
    }
    return promise.resolve()
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Form form={form} name="UserRegister" onFinish={onFinish}>
          <Tabs
            // activeKey={type}
            // onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: 'Đăng ký',
              },
            ]}
          />
          <FormItem
            name="username"
            rules={[
              {
                required: true,
                message: 'Hãy nhập username!',
              },
            ]}>
            <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
          </FormItem>

          <FormItem
            name="password"
            className={
              form.getFieldValue('password') &&
              form.getFieldValue('password').length > 0 &&
              styles.password
            }
            rules={[
              {
                validator: checkPassword,
              },
            ]}>
            <Input
              size="large"
              type="password"
              prefix={<LockOutlined />}
              placeholder="Mật khẩu tối thiểu 6 kí tự"
            />
          </FormItem>
          <FormItem
            name="confirm"
            rules={[
              {
                required: true,
                message: 'Hãy nhập lại mật khẩu',
              },
              {
                validator: checkConfirm,
              },
            ]}>
            <Input
              size="large"
              type="password"
              prefix={<LockOutlined />}
              placeholder="Nhập lại mật khẩu"
            />
          </FormItem>
          <FormItem
            name="email"
            rules={[
              {
                required: true,
                message: 'Hãy nhập email!',
              },
              {
                type: 'email',
                message: 'Email không hợp lệ!',
              },
            ]}>
            <Input size="large" prefix={<MailOutlined />} placeholder="Email" />
          </FormItem>
          <FormItem>
            <div className={styles.footer}>
              <Button
                size="large"
                loading={submitting}
                className={styles.submit}
                type="primary"
                htmlType="submit">
                <span>Đăng ký</span>
              </Button>
            </div>
          </FormItem>
          <div
            style={{
              marginTop: 50,
              textAlign: 'center',
            }}>
            <div style={{ fontSize: 14 }}>Hoặc</div>
            <Link to="/user/login">
              <Button
                size="large"
                // loading={submitting}
                // className={styles.submit}
                type="text"
                htmlType="submit"
                style={{ marginTop: 10, fontWeight: 'bold' }}>
                <span>Đăng nhập</span>
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register

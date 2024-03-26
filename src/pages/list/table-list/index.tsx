import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components'
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components'
import { Button, Drawer, message } from 'antd'
import React, { useRef, useState } from 'react'
import type { FormValueType } from './components/UpdateForm'
import UpdateForm from './components/UpdateForm'
import type { TableListItem, TableListPagination } from './data'
import { addRule, removeRule, rule, updateRule } from './service'
/**
 * 添加节点
 *
 * @param fields
 */

const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('Thêm')

  try {
    await addRule({ ...fields })
    hide()
    message.success('Thêm thành công')
    return true
  } catch (error) {
    hide()
    message.error('Không thêm được, vui lòng thử lại!')
    return false
  }
}
/**
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
  const hide = message.loading('Cấu hình')

  try {
    await updateRule({
      ...currentRow,
      ...fields,
    })
    hide()
    message.success('Cấu hình thành công')
    return true
  } catch (error) {
    hide()
    message.error('Cấu hình không thành công, vui lòng thử lại!')
    return false
  }
}
/**
 * Xóa
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows: TableListItem[]) => {
  const hide = message.loading('Xóa')
  if (!selectedRows) return true

  try {
    await removeRule({
      key: selectedRows.map(row => row.key),
    })
    hide()
    message.success('Xóa thành công')
    return true
  } catch (error) {
    hide()
    message.error('Xóa không thành công, vui lòng thử lại!')
    return false
  }
}

const TableList: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false)
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false)
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const actionRef = useRef<ActionType>()
  const [currentRow, setCurrentRow] = useState<TableListItem>()
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([])

  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      hideInSearch: true,
      colSize:1,
      width: 50,
    },
    {
      title: 'Tên',
      dataIndex: 'name1',
      sorter: true,
      valueType: 'textarea',
      hideInSearch: true,
      width: '50%',
      renderText: (val: string) => `${val}`,
    },
    {
      title: 'Tên',
      dataIndex: 'name2',
      sorter: true,
      valueType: 'textarea',
      hideInSearch: true,
      width: '50%',
      renderText: (val: string) => `${val}`,
    },
    {
      title: '',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button
          key="add"
          onClick={() => {
            handleUpdateModalVisible(true)
            setCurrentRow(record)
          }}>
          <EyeOutlined />
        </Button>,
        <Button
          key="edit"
          type="primary"
          onClick={() => {
            handleUpdateModalVisible(true)
            setCurrentRow(record)
          }}>
          <EditOutlined /> 
        </Button>,
        <Button
          key="delete"
          type="primary"
          danger
          onClick={() => {
            handleUpdateModalVisible(true)
            setCurrentRow(record)
          }}>
          <DeleteOutlined /> 
        </Button>,
      ],
    },
  ]

  return (
    <PageContainer>
      <ProTable<TableListItem, TableListPagination>
        headerTitle="Bảng"
        actionRef={actionRef}
        rowKey="key"
        scroll={{
          x: 960,
        }}
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true)
            }}>
            <PlusOutlined /> Thêm mới
          </Button>,
        ]}
        request={rule}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows)
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              Đã chọn{' '}
              <a
                style={{
                  fontWeight: 600,
                }}>
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
              </span>
            </div>
          }>
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState)
              setSelectedRows([])
              actionRef.current?.reloadAndRest?.()
            }}>
            Xóa hết
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title="Thêm mới"
        width="400px"
        open={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async value => {
          const success = await handleAdd(value as TableListItem)
          if (success) {
            handleModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload()
            }
          }
        }}>
        <ProFormText
          rules={[
            {
              required: true,
              message: 'Bắt buộc nhập',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
      <UpdateForm
        onSubmit={async value => {
          const success = await handleUpdate(value, currentRow)

          if (success) {
            handleUpdateModalVisible(false)
            setCurrentRow(undefined)

            if (actionRef.current) {
              actionRef.current.reload()
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false)
          setCurrentRow(undefined)
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined)
          setShowDetail(false)
        }}
        closable={false}>
        {currentRow?.name && (
          <ProDescriptions<TableListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<TableListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  )
}

export default TableList

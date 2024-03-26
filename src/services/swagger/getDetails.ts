import { request } from '@umijs/max'

export async function getDataBlogByID(
  params: any,
  options?: { [key: string]: any },
) {
  const { blogId: param0, ...queryParams } = params
  return request<any>(`/api/M01/GetDataBlogByID?id=${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  })
}

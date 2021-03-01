// 第3方接口
export const getTime = () => {
    return fetch('tpApi/taobao/rest/api3.do?api=mtop.common.getTimestamp')
}
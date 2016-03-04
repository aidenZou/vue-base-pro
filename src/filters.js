import utils from './libs/utils'

/**
 * 格式化时间
 * @param  {[string]} time    [需要格式化的时间]
 * @param  {[bool]} friendly  [是否是fromNow]
 * @return {[type]}           [description]
 */
exports.getLastTimeStr = (time, friendly) => {
  if (friendly) {
    return utils.MillisecondToDate(new Date() - new Date(time))
  } else {
    return utils.fmtDate(new Date(time), 'yyyy-MM-dd hh:mm')
  }
}

/**
 * 获取title文字
 * @type {[string]} tab Tab分类
 */
exports.getTitleStr = (tab) => {
  let str = ''
  switch (tab) {
    case 'share':
      str = '分享'
      break
    case 'ask':
      str = '问答'
      break
    case 'job':
      str = '招聘'
      break
    case 'good':
      str = '精华'
      break
    default:
      str = '全部'
      break
  }
  return str
}

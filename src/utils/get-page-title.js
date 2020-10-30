import defaultSettings from '@/settings'

const title = defaultSettings.title || '内推直通车'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

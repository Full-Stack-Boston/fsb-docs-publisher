import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

const PUBLIC_HOSTS: Record<string, string> = {
  'docs.bonaloop.com': '/bonaloop/',
  'docs.components-usa.com': '/components-usa/',
  'docs.portfolio-website.jonaldoalix.com': '/portfolio-website/',
  'docs.sprucer.fullstackboston.com': '/sprucer/',
  'docs.ams.fullstackboston.com': '/ams/',
  'docs.mail-janitor.fullstackboston.com': '/mail-janitor/',
  'docs.fsb-vanilla.fullstackboston.com': '/fsb-vanilla/',
  'docs.fsb-splash.fullstackboston.com': '/fsb-splash/',
  'docs.yankeeswap.fullstackboston.com': '/yankeeswap/',
  'docs.secret-santa.fullstackboston.com': '/secret-santa/',
  'docs.parker-fund-vanilla.fullstackboston.com': '/parker-fund-vanilla/',
}

const PRIVATE_HOSTS: Record<string, string> = {
  'docs.nathan.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/Nathan',
  'docs.fsb.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/FSB',
  'docs.fsb-cli.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/FSB-CLI',
  'docs.gamespotter.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/Gamespotter',
  'docs.folio.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/Folio',
  'docs.ficha.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/Ficha',
  'docs.rustdesk.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/Rustdesk',
  'docs.vaultwarden.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/Vaultwarden',
  'docs.parker-fund.fullstackboston.com': 'https://wiki.fullstackboston.com/en/Products/Parker-Fund',
}

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      const host = location.hostname
      if (PRIVATE_HOSTS[host]) {
        location.replace(PRIVATE_HOSTS[host])
        return
      }
      const path = PUBLIC_HOSTS[host]
      if (path && (location.pathname === '/' || location.pathname === '')) {
        location.replace(path)
      }
    })
  },
}

import React from 'react'

import Nav from './nav'
import GlobalError from './global-error'
import Footer from '../footer/footer'
import LoginModal from '../auth/login-modal'
import { useTheme } from '../theme/theme'
import UpdateBanner from '../update/update-banner'

export default ({ children }) => {
  const theme = useTheme()

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
      <div id="content">
        <Nav />
        {children}
        <UpdateBanner />
        <Footer />
        <LoginModal />
        <GlobalError />
      </div>
    </div>

  )
}

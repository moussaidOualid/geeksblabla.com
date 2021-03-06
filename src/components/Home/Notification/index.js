// import { Link } from "gatsby"
// import NotifIcon from "assets/notif.svg"
import React from "react"
import { useTheme } from "../../Theme/ThemeContext"
import Notif from "assets/notification.svg"
import NotifLight from "assets/notification_light.svg"
import Facebook from "assets/facebook.svg"
import Youtube from "assets/youtube.svg"
import Rss from "assets/rss.svg"

import "./index.scss"

export default () => {
  const { dark } = useTheme()

  return (
    <div className="notification">
      {dark ? <Notif className="notif" /> : <NotifLight className="notif" />}
      <div className="content">
        <h1> Get Notified </h1>
        <p>
          To get live streams notifications subscribe to our Youtube Channel and
          Facebook Page (Make sure to enable notifications 😉)
        </p>

        <div className="icons">
          <a
            href="http://facebook.com/geeksblabla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook height={35} alt="Geeksblabla Facebook Page " />
          </a>
          <a
            href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0px 20px" }}
          >
            <Youtube height={50} alt="GeeksBlabla youtube Channel " />
          </a>
          <a
            href="http://geeksblabla.com/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Rss height={30} alt="GeeksBlabla RSS Feed " />
          </a>
        </div>
        <p>
          Or you can subscribe to our{" "}
          <a
            href="https://tinyletter.com/geeksBlabla"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mailing List
          </a>{" "}
          to get updates about GeeksBlaBla and DevC Events
        </p>
      </div>
    </div>
  )
}

import React, { Component } from "react";
import { Dribbble, Facebook, Instagram, Twitter, Youtube } from "react-feather";
type SocialType = {
    dark?: boolean
}
export default class SocialIcons extends Component<SocialType> {
  render() {
    const {dark} = this.props
    return (
      <>
        <div className="socialContainer hstack gap-3">
          <Twitter className="socialIcon" color={`${dark?"#fff": "#5DAED5"}`} />
          <Facebook className="socialIcon" color= {`${dark?"#fff": "#4470CF"}`} />
          <Dribbble className="socialIcon" color= {`${dark?"#fff": "#E95297"}`} />
          <Instagram className="socialIcon" color={`${dark?"#fff": "#D53581"}`} />
          <Youtube className="socialIcon" color={`${dark?"#fff": "#C8312B"}`} />
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import { Link, Typography, Card, CardMedia } from '@mui/material'

class LinksCard extends Component {
  render() {
    const{title, link, image} = this.props;
    var imagePath = "images/" + image;
    
    return (
      <Link href={link}>
          <Card justify="center" style={{ backgroundColor: "#2b2d42"}} elevation={0}>
            <CardMedia style={{height: "50px", width: "50px", margin:"auto"}} image={imagePath} />
            <Typography color='primary' align="center">
              {title}
            </Typography>
          </Card>
        </Link>
    )
  }
}

export default LinksCard;
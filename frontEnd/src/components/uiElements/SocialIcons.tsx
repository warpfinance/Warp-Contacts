import * as React from "react";

import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const styles = (theme: any) => createStyles({
    hrefText: {
        color: "#FFFFFF", 
        textDecoration: 'none'
    }
});

interface Props extends WithStyles<typeof styles> { }

const imgSrcs = [
    { hover: "twitterHover.svg", unHover: "twitter.svg", href: "https://twitter.com", alt: "Twitter" },
    { hover: "mediumHover.svg", unHover: "medium.svg", href: "https://medium.com", alt: "Medium" },
    { hover: "telegramHover.svg", unHover: "telegram.svg", href: "https://telegram.org", alt: "Telegram" },
    { hover: "discordHover.svg", unHover: "discord.svg", href: "https://discord.com", alt: "Discord" },
]

const DecoratedSocialIconsClass = withStyles(styles)(
    class SocialIconsClass extends React.Component<Props, {}> {
        getIcons = () => {
            let icons: any = [];
            imgSrcs.forEach((imgSrcs, index: number) => {
                icons.push(
                    <Grid item>
                        <a className={this.props.classes.hrefText} href={imgSrcs.href}>
                            <img
                                src={imgSrcs.unHover}
                                alt={imgSrcs.alt}
                                onMouseOver={(event) => this.hover(event, index)}
                                onMouseOut={(event) => this.unHover(event, index)}
                            />
                        </a>
                    </Grid>
                );
            })
            return icons;
        }

        hover = (element: React.MouseEvent<HTMLImageElement, MouseEvent>, index: number) => {
            element.currentTarget.setAttribute('src', imgSrcs[index].hover);
        }

        unHover = (element: React.MouseEvent<HTMLImageElement, MouseEvent>, index: number) => {
            element.currentTarget.setAttribute('src', imgSrcs[index].unHover);
        }

        render() {
            const icons = this.getIcons();

            return (
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={10}
                >
                    {icons}
                </Grid>
            )
        }
    }
)

const SocialIcons = connect(null, null)(DecoratedSocialIconsClass)

export { SocialIcons };
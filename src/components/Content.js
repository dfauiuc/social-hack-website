import React from "react";
import Logo from "./both.png";

const Content = ({ styles }) => {

    const headerStyle = {
        position: "absolute",
        width: "30%",
        height: "auto",
        right: 0,
        top: "50%",
        left: "20%",
        transform: "translate(-50%, -50%)",
    };

    const logoStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%",
    };

    const titleStyle = {
        paddingTop: 30,
        fontFamily: 'GothamBlack',
        fontSize: "4.5vw",
        textAlign: "center",
        color: styles.lightGreen(1)

    };

    const heading1Style = {
        fontFamily: 'GothamMedium',
        fontSize: "2vw",
        textAlign: "center",
        color: styles.lightYellow(1)

    };

    const heading2Style = {
        fontFamily: 'GothamMedium',
        fontSize: "2vw",
        textAlign: "center",
        color: styles.darkYellow(1),

    };

    const heading2aStyle = {
        position: "relative",
        paddingTop: 15,
        fontSize: "2vw",
        fontFamily: 'GothamBlack',
        color: styles.dustyRose(1)
    };

    const heading3Style = {
        position: "relative",
        paddingTop: 15,
        fontSize: "2vw",
        color: styles.lightGreen(1),
    };

    const heading4Style = {
        position: "relative",
        paddingTop: 15,
        fontFamily: 'GothamMedium',
        color: styles.lightYellow(1),
        fontSize: "1.5vw",
    };

    const bodyParagraphStyle = {
        position: "absolute",
        top: "50%",
        marginLeft: "70%",
        transform: "translate(-50%, -50%)",
        fontFamily: 'GothamMedium',
        width: "50%"
    };

    const redColor = {
        color: styles.darkYellow(1),
    };

    return [
        <div style = {headerStyle}>
            <img style = {logoStyle} src={Logo} alt="website logo" />

            <div style = {titleStyle}>
                Social Hack
            </div>

            <p style = {heading1Style}>
                designing with, not for the community
            </p>

            <div style = {heading2Style}>
                March 2020
            </div>
        </div>,

        <div style = {bodyParagraphStyle}>
            <div style = {heading2aStyle}>
                Led by students, for students.
            </div>
            <div style = {heading3Style}>
                <span style = {redColor}> Social Hack </span> is a conference at the
                <span style = {redColor}> University of Illinois at Urbana-Champaign </span>
                that focuses on how we can approach
                <span style = {redColor}> climate change </span> and
                <span style = {redColor}> sustainability </span> from a
                <span style = {redColor}> human centered </span> perspective.
            </div>

            <div style = {heading4Style}>
                By the end of the conference, student teams will have presented their ideas to judges,
                ranging from professors on campus to Chicago based design firms,
                out their ideas after the conference with guidance from Design for America
                mentors and campus/community partners.
            </div>
        </div>,
    ]
};

export default Content;
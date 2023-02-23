import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";


class Activity extends Component {
    render() {

        const img = "images/profilepic.jpg";
        return (
            <section id="activity">
                <Fade duration={1000}>
                    <div className="row">
                        <h3 className="text-center">กิจกรรมคริสตจักร</h3>
                        <div className="separator  small center  "></div>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "50%" }}>
                                <h4>โปรแกรมคริสตจักร</h4>
                                <div className="uk-container uk-padding">
                                    <div className="uk-timeline">
                                        <div className="uk-timeline-item">
                                            <div className="uk-timeline-content">
                                                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                                                    <div className="uk-card-header">
                                                        <div className="uk-grid-small uk-flex-middle" >
                                                            <h3 className="uk-card-title"><time>วันอาทิตย์</time></h3>
                                                            <span className="uk-label uk-label-success uk-margin-auto-left">เวลา 08.00-12.00 น.</span>
                                                        </div>
                                                    </div>
                                                    <div className="uk-card-body">
                                                        <p className="uk-text-success">
                                                            นมัสการวันอาทิตย์
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-timeline-item">
                                            <div className="uk-timeline-content">
                                                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                                                    <div className="uk-card-header">
                                                        <div className="uk-grid-small uk-flex-middle" >
                                                            <h3 className="uk-card-title"><time>ประกาศ</time></h3>
                                                            <span className="uk-label uk-label-success uk-margin-auto-left">เวลา 10.00-12.00 น.</span>
                                                        </div>
                                                    </div>
                                                    <div className="uk-card-body">
                                                        <p className="uk-text-success">
                                                            นมัสการวันอาทิตย์
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "50%" }}>
                                <h4>รูป กิจกรรมคริสตจักร</h4>
                                <div className="row">
                                    <div className="twelve columns collapsed">
                                        <div

                                            className="bgrid-quarters s-bgrid-thirds cf"
                                        >
                                            <div className="columns ">
                                                <div className="item-wrap">
                                                    <Zmage alt="" src={img} />

                                                </div>
                                            </div>
                                            <div className="columns ">
                                                <div className="item-wrap">
                                                    <Zmage alt="" src={img} />

                                                </div>
                                            </div>
                                            <div className="columns ">
                                                <div className="item-wrap">
                                                    <Zmage alt="" src={img} />

                                                </div>
                                            </div>
                                            <div className="columns ">
                                                <div className="item-wrap">
                                                    <Zmage alt="" src={img} />

                                                </div>
                                            </div>
                                            <div className="columns ">
                                                <div className="item-wrap">
                                                    <Zmage alt="" src={img} />

                                                </div>
                                            </div>
                                            <div className="columns ">
                                                <div className="item-wrap">
                                                    <Zmage alt="" src={img} />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </Fade>
            </section>
        );
    }
}

export default Activity;
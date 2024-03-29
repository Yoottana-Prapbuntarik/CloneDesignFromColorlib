import React, { Component } from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
class Cardcontent extends Component {
    render() {
        let {title , sTitle , imgSrc} = this.props;

        return (

            <div className="col-lg-4 col-12">
                <div className="wrap-card-img my-5" >
                    <div className="shadows">
                        <Card>
                            <NavLink className="wrapper-card-img " to={`PortfolioDetail/idDetail`}>
                                <CardImg className="card-img-top text-center" src={imgSrc} alt="Card image cap" />
                            </NavLink>
                            <CardBody className="text-center" style={{ height: '25vh' }}>
                                <CardTitle className="text-center">
                                    <h2>
                                        {title}
                                    </h2>
                                </CardTitle>
                                <hr />
                                <CardSubtitle className="my-3">
                                    {sTitle}
                                </CardSubtitle>
                            </CardBody>
                            <div className="buttonCard" style={{ marginTop: '80px', marginBottom: '80px', marginLeft: '100px', marginRight: '100px' }}>
                                <Link className=" btn btn-primary text-center w-100" to={`PortfolioDetail/idDetail`}>
                                    อ่านต่อ
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cardcontent
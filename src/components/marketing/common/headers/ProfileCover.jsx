import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import LevelIconWithTooltip from 'components/marketing/common/miscellaneous/LevelIconWithTooltip';

// import media files
import CheckedMark from 'assets/images/svg/checked-mark.svg';
import ProfileBackground from 'assets/images/background/profile-bg.jpg';

const ProfileCover = ({ dashboardData }) => {
    const [utezCommunity, setUtezCommunity] = useState('');

    useEffect(() => {
        // Obtén el valor de localStorage al montar el componente
        const community = localStorage.getItem('utez_community');
        setUtezCommunity(community);
    }, []);

    const showDashboardMenu = utezCommunity === 'administrativo' || utezCommunity === 'profesor';

    return (
        <Row className="align-items-center">
            <Col xl={12} lg={12} md={12} sm={12}>
                <div
                    className="pt-16 rounded-top-md"
                    style={{
                        background: `url(${ProfileBackground})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    {' '}
                </div>
                <Card className="px-4 pt-2 pb-4 rounded-0 rounded-bottom shadow-sm">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                                <Image
                                    src={dashboardData.avatar}
                                    className="avatar-xl rounded-circle border border-4 border-white position-relative"
                                    alt=""
                                />
                                {dashboardData.verified && (
                                    <Link
                                        to="#"
                                        className="position-absolute top-0 end-0"
                                        data-bs-toggle="tooltip"
                                        data-placement="top"
                                        title="Verified"
                                    >
                                        <Image src={CheckedMark} alt="" height="30" width="30" />
                                    </Link>
                                )}
                            </div>
                            <div className="lh-1">
                                <h2 className="mb-0">
                                    {dashboardData.name}{' '}
                                    <LevelIconWithTooltip level={dashboardData.level} />
                                </h2>
                                <p className="mb-0 d-block">{dashboardData.username}</p>
                            </div>
                        </div>

                        {showDashboardMenu && (
                            <Row>
                                <Col>
                                    <Link to="/" className="btn btn-secondary me-2">
                                        Principal
                                    </Link>
                                    <Link to={dashboardData.link} className="btn btn-primary">
                                        {dashboardData.linkname}
                                    </Link>
                                </Col>
                            </Row>
                        )}
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default ProfileCover;

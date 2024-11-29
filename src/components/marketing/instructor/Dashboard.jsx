// import node module libraries
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Table, Image } from 'react-bootstrap';

// import custom components
import StatRightBadge from 'components/marketing/common/stats/StatRightBadge';
 
// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

const Dashboard = () => {
	const [studentCount, setStudentCount] = useState(0);
	const [courseCount, setCourseCount] = useState(0);
	const [bestSellingCourses, setBestSellingCourses] = useState([]);
	const [enrolledStudents, setStudents] = useState([]); 

	useEffect(() => {
		const fetchEnrolledStudents = async () => {
			const response = await fetch('http://localhost:3001/api/estudiantes-inscritos', {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
			});
			if (response.ok) {
				const data = await response.json();
				setStudents(data); 
				console.log(data);

			} else {
				console.error("Error fetching enrolled students");
			}
		};



		const fetchStudentCount = async () => {
			const response = await fetch('http://localhost:3001/student-count', {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
			});
			const data = await response.json();
			setStudentCount(data.studentCount);
		};
	
		const fetchCourseCount = async () => {
			const response = await fetch('http://localhost:3001/course-count', {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
			});
			const data = await response.json();
			setCourseCount(data.courseCount);
		};
	
		const fetchBestSellingCourses = async () => {
			const response = await fetch('http://localhost:3001/best-selling-courses', {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
			});
			const data = await response.json();
			setBestSellingCourses(data);
		};
	
		fetchStudentCount();
		fetchCourseCount();
		fetchBestSellingCourses();
		fetchEnrolledStudents();
	}, []);

	

	return (
		<ProfileLayout>
			{/* Page Content section */}
			<Row>
				<Col lg={6} md={12} sm={12} className="mb-4 mb-lg-0">
					<StatRightBadge
						title="Estudiantes"
                        value={enrolledStudents.length.toString()} 
					/>
				</Col>
				<Col lg={6} md={12} sm={12} className="mb-4 mb-lg-0">
					<StatRightBadge
						title="Número de cursos"
						value={courseCount.toString()} 
					/>
				</Col>
			</Row>

			<Card className="mt-4">
				<Card.Header>
					<h3 className="mb-0 h4">Cursos más vendidos</h3>
				</Card.Header>
				<Card.Body className="p-0">
					<Table hover responsive className="mb-0 text-nowrap table-centered">
						<thead className="table-light">
							<tr>
								<th scope="col" className="border-0">CURSOS</th>
								<th scope="col" className="border-0">VENTAS</th>
								<th scope="col" className="border-0">PRECIO</th>
								
							</tr>
						</thead>
						<tbody>
							{bestSellingCourses.map((item, index) => (
								<tr key={index}>
									<td className="align-middle border-top-0">
										<Link to="#">
											<div className="d-lg-flex align-items-center">
												{
													<Image src={item.image} alt="" className="rounded img-4by3-lg" />}
												<h5 className="mb-0 ms-lg-3 mt-lg-0 mt-2 text-primary-hover">
													{item.title}
												</h5>
											</div>
										</Link>
									</td>
									<td className="align-middle border-top-0">{item.sales}</td>
									<td className="align-middle border-top-0">${item.amount}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default Dashboard;

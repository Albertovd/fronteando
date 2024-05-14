// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, ListGroup, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

// import custom components
import InstructorReviewCard from 'components/marketing/common/cards/InstructorReviewCard';
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

// Import required data files
import { InstructorReviewsData } from 'data/marketing/InstructorReviewsData';

const Reviews = () => {
	const courselist = [
		{ value: '1', label: 'Hola' },
		{ value: '2', label: 'Prueba' }
	];
	const ratinglist = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' }
	];
	const sortby = [
		{ value: 'Reciente', label: 'Reciente' },
		{ value: 'Antiguo', label: 'Antiguo' }
	];

	const alert = () => {
		Swal.fire({
			title: "¿Estas seguro de realizar esta acción?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Accept"
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire({
				title: "Descargando...",
				text: "Tuarchivo se esta descargando. Por favor espera...",
				icon: "success"
			  });
			}
		  });
	};

	return (
		<ProfileLayout>
			<Card className="border-0">
				<Card.Header className="d-lg-flex align-items-center justify-content-between">
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Reseñas</h3>
						
					</div>
					<div>
						<Link to="#" className="btn btn-outline-primary btn-sm" onClick={alert}>
							Exportar como CSV...
						</Link>
					</div>
				</Card.Header>
				<Card.Body>
					{/* Form */}
					<Form className="mb-4">
						<Row>
							<Col xl={6} lg={6} md={4} sm={12} className="mb-2 mb-lg-0">
								<FormSelect options={courselist} placeholder="Todas" />
							</Col>
							<Col xl={3} lg={3} md={4} sm={12} className="mb-2 mb-lg-0">
								<FormSelect options={ratinglist} placeholder="Calificación" />
							</Col>
							<Col xl={3} lg={3} md={4} sm={12} className="mb-2 mb-lg-0">
								<FormSelect options={sortby} placeholder="Orden" />
							</Col>
						</Row>
					</Form>

					{/* List group */}
					<ListGroup variant="flush" className="border-top">
						{InstructorReviewsData.filter(function (datasource) {
							return datasource;
						}).map((item, index) => (
							<ListGroup.Item key={index} className="px-0 py-4">
								<InstructorReviewCard item={item} />
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default Reviews;

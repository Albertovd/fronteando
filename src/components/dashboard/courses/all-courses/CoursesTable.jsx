import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, Dropdown, Modal, Form } from 'react-bootstrap';
import { XCircle, MoreVertical } from 'react-feather';
import DotBadge from 'components/elements/bootstrap/DotBadge';
import TanstackTable from 'components/elements/advance-table/TanstackTable';
import axios from 'axios'; // Asegúrate de tener axios instalado
import Swal from 'sweetalert2';
import Icon from '@mdi/react';
import { Trash, Edit } from 'react-feather';

const CoursesTable = ({ courses_data }) => {

    const [courses, setCourses] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [currentCourseId, setCurrentCourseId] = useState(null);
    const [precio, setPrecio] = useState('');
    const [editCourse, setEditCourse] = useState(null);


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3001/courses');
                setCourses(response.data);
                console.log(response.data); // Añade esto para inspeccionar los datos
            } catch (error) {
                console.error('Error al cargar los cursos:', error);
            }
        };

        fetchCourses();
    }, []);

    // Función para cambiar el estado del curso
    const changeCourseStatus = async (courseId, newStatus) => {
        // Aquí se asume que tu backend está configurado para recibir el ID del curso y el nuevo estado
        // y actualizar el estado del curso en la base de datos.
        try {
            await axios.post('http://localhost:3001/update-course-status', {
                id: courseId,
                status: newStatus,
            });
            const updatedCourses = courses.map(course =>
                course.id === courseId ? { ...course, status: newStatus } : course
            );
            setCourses(updatedCourses);
        } catch (error) {
            console.error('Error al cambiar el estado del curso:', error);
        }
    };

    const handleDelete = async (courseId) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas eliminar este curso?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        });
    
        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3001/delete-course/${courseId}`);
                // Actualizar el estado para remover el curso eliminado
                const updatedCourses = courses.filter(course => course.id !== courseId);
                setCourses(updatedCourses);
                Swal.fire({
                    icon: 'success',
                    title: 'Curso eliminado',
                    showConfirmButton: false,
                    timer: 1500
                });
            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al eliminar el curso',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    

    const handleEdit = (course) => {
        setEditCourse(course);
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setEditCourse(null);
    };

    const handleSaveChanges = async () => {
        if (!editCourse) return;
        try {
            await axios.put(`http://localhost:3001/update-course/${editCourse.id}`, editCourse);
            const updatedCourses = courses.map(course =>
                course.id === editCourse.id ? { ...course, ...editCourse } : course
            );
            setCourses(updatedCourses);
            handleCloseModal();
            Swal.fire({
                icon: 'success',
                title: 'Curso actualizado',
                showConfirmButton: true,
                timer: 2000
            });


        } catch (error) {
            console.error('Error al actualizar el curso:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al actualizar el curso',
                showConfirmButton: true,
                timer: 2000
            });
        }
    };


    // Función para cambiar el estado del curso
    const handleApprove = (courseId) => {
        setShowApproveModal(true);
        setCurrentCourseId(courseId);
    };

    const changeCourseStatusWithPrice = async () => {
        if (!precio || !currentCourseId) {
            alert("Por favor, introduce un precio para el curso.");
            return;
        }
        try {
            await axios.post('http://localhost:3001/update-course-status', {
                id: currentCourseId,
                status: 'aprobado',
                precio: precio,
            });
            const updatedCourses = courses.map(course =>
                course.id === currentCourseId ? { ...course, status: 'aprobado', precio: precio } : course
            );
            setCourses(updatedCourses);
            handleCloseApproveModal();
        } catch (error) {
            console.error('Error al cambiar el estado del curso:', error);
        }
    };

    // The forwardRef is important!!
    // Dropdown needs access to the DOM node in order to position the Menu
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Link
            to="#"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="btn-icon btn btn-ghost btn-sm rounded-circle"
        >
            {children}
        </Link>
    ));

    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-secondary" />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                    <Dropdown.Header>Ajustes</Dropdown.Header>
                    <Dropdown.Item eventKey="1">
                        <XCircle size={14} className="me-1" /> Rechazar con comentarios
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    const columns = useMemo(() => [
        {
            header: 'Imagen',
            accessorKey: 'image',
            cell: info => <Image src={info.getValue()} alt="Imagen del curso" className="img-fluid rounded" style={{ width: '100px' }} />
        },
        {
            header: 'Curso',
            accessorKey: 'title',
            cell: info => info.getValue(),
        },
        {
            header: 'Instructor',
            accessorKey: 'instructor_name',
            cell: info => info.getValue(),
        },
        {
            header: 'Estado',
            accessorKey: 'status',
            cell: ({ getValue }) => (
                <Fragment>
                    <DotBadge
                        bg={
                            getValue()?.toLowerCase() === 'pendiente'
                                ? 'warning'
                                : getValue()?.toLowerCase() === 'aprobado'
                                    ? 'success'
                                    : 'danger'
                        }
                    />
                    {getValue()}
                </Fragment>
            )
        },
        {
            header: 'Acciones',
            id: 'actions',
            cell: ({ row }) => {
                const { id, status } = row.original;
    
                if (!status) return null; // Si no hay estado, no mostramos nada
    
                return (
                    <Fragment>
                        {status.toLowerCase() === 'pendiente' && (
                            <Fragment>
                                <Button onClick={() => handleApprove(id)} variant="success" className="me-2 btn-sm">
                                    Aprobar
                                </Button>
                                <Button onClick={() => changeCourseStatus(id, 'rechazado')} variant="danger" className="btn-sm">
                                    Rechazar
                                </Button>
                            </Fragment>
                        )}
                    </Fragment>
                );
            }
        },
        {
            header: 'Opciones',
            id: 'options',
            cell: ({ row }) => (
                <div>
                    <Button variant="outline-primary" size='sm' className="me-2" onClick={() => handleEdit(row.original)}>
                    <Edit size={16} />
                    </Button>
                    <Button variant="outline-danger" size='sm' onClick={() => handleDelete(row.original.id)}>
                        <Trash size={16} />
                    </Button>
                </div>
            )
        }
    ], [courses]);

    const data = useMemo(() => courses, [courses]);


    return (
        <Fragment>
            <TanstackTable
                data={data}
                columns={columns}
                filter={true}
                filterPlaceholder="Buscar Cursos"
                pagination={true} />
            <Modal show={showApproveModal} onHide={() => setShowApproveModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Asignar precio al curso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Introduce el precio del curso"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowApproveModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={changeCourseStatusWithPrice}>
                        Guardar y Aprobar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showEditModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{editCourse ? "Editar Curso" : "Agregar Nuevo Curso"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Introduce el título del curso"
                                value={editCourse?.title || ''}
                                onChange={(e) => setEditCourse({ ...editCourse, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Descripción del curso"
                                value={editCourse?.description || ''}
                                onChange={(e) => setEditCourse({ ...editCourse, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Precio del curso"
                                value={editCourse?.precio || ''}
                                onChange={(e) => setEditCourse({ ...editCourse, precio: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>


        </Fragment>
    );
};

export default CoursesTable;
import React, { useContext } from "react";
import {Container, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid className="jumbotron Home">
		  <Container className="text-center">
			<h1 className="animate__animated animate__fadeInDown">
			  Bienvenido a Recipe Wizard
			</h1>
			<p className="animate__animated animate__fadeInUp">
			  ¡Saludos, viajero del paladar! Soy el poderoso Recipe Wizard y estoy
			  aquí para llevarte a cualquier lugar del mundo a través de las
			  delicias culinarias. Con solo probar su comida, puedo revelarte los
			  secretos y darte los pasos necesarios para crear cualquier receta que
			  desees.
			</p>
			<p className="animate__animated animate__fadeInLeft">
			  Imagina poder despertar tus sentidos con los sabores de España,
			  Venezuela, Italia y Grecia. Desde los desayunos más reconfortantes
			  hasta los almuerzos más exquisitos y las cenas más memorables, estoy
			  listo para guiarte en un viaje culinario inolvidable.
			</p>
			<p className="animate__animated animate__fadeInRight">
			  Prepárate para descubrir la historia y la magia que se esconden detrás
			  de cada plato tradicional. Permíteme compartir contigo los sabores
			  auténticos, los aromas embriagadores y los trucos culinarios que solo
			  un verdadero mago de las recetas puede revelar.
			</p>
			<p className="animate__animated animate__fadeInUp">
			  ¡Así que, aventurero, ponte el delantal, toma tu varita culinaria y
			  prepárate para crear auténticas maravillas en tu propia cocina! Estoy
			  aquí para guiarte en cada paso del camino.
			</p>
			<Button variant="primary" size="lg" block>
			  Empezar
			</Button>
		  </Container>
		</Container>
	  );
};

import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from './Loader';

const Map = ({ coordinate }) => {
	const mapRef = useRef();

	useEffect(() => {
		if (coordinate) {
			mapRef?.current?.flyTo([coordinate?.longitude, coordinate?.latitude], 5, {
				animate: true,
			});
		}
	}, [coordinate]);

	if (!coordinate) {
		return <Loader />;
	}

	return (
		<MapContainer
			ref={mapRef}
			center={[coordinate?.longitude, coordinate?.latitude]}
			zoom={5}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[coordinate?.longitude, coordinate?.latitude]}>
				<Popup>International Space Station Current Location</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;

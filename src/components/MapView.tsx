import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Polyline, DirectionsRenderer } from '@react-google-maps/api';
import type { Monument, Walk, Experience } from '../types';

interface MapViewProps {
  monuments: Monument[];
  walks: Walk[];
  experiences: Experience[];
  selectedPlace: any | null;
  onSelectPlace: (place: any, type: 'monument' | 'walk' | 'experience') => void;
  showMonuments?: boolean;
  showWalks?: boolean;
  showExperiences?: boolean;
  categoryFilter?: string[];
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '480px',
  borderRadius: '12px',
};

// Center of Pune as fallback origin
const defaultCenter = {
  lat: 18.5204,
  lng: 73.8567
};

export const MapView: React.FC<MapViewProps> = ({
  monuments,
  walks,
  experiences,
  selectedPlace,
  onSelectPlace,
  showMonuments = true,
  showWalks = true,
  showExperiences = true,
  categoryFilter = []
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY || ''
  });

  const walkRoutePaths = useMemo(
    () => walks
      .filter((walk) => walk.routeCoordinates && walk.routeCoordinates.length > 1)
      .map((walk) => ({
        id: walk.id,
        path: walk.routeCoordinates.map(([lat, lng]) => ({ lat, lng }))
      })),
    [walks]
  );

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Fetch User Location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.warn('Geolocation failed or denied, using fallback center.', error);
          setUserLocation(defaultCenter);
        },
        { enableHighAccuracy: true }
      );
    } else {
      setUserLocation(defaultCenter);
    }
  }, []);

  // Fetch directions when selectedPlace or userLocation changes
  useEffect(() => {
    const origin = userLocation || defaultCenter;
    
    if (isLoaded && selectedPlace && selectedPlace.latitude && selectedPlace.longitude && window.google && window.google.maps && window.google.maps.DirectionsService) {
      const directionsService = new window.google.maps.DirectionsService();
      
      directionsService.route(
        {
          origin: origin,
          destination: { lat: selectedPlace.latitude, lng: selectedPlace.longitude },
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            console.error(`Error fetching directions ${result}`);
            setDirectionsResponse(null);
          }
        }
      );
      
      if (map) {
        map.panTo({ lat: selectedPlace.latitude, lng: selectedPlace.longitude });
        map.setZoom(16); // Automatically zoom in closely on the selected place
      }
    } else {
      setDirectionsResponse(null);
      if (map && userLocation) {
        map.panTo(userLocation);
        map.setZoom(13);
      }
    }
  }, [selectedPlace, map, userLocation, isLoaded]);

  if (!isLoaded) return <div style={{ color: '#fff', padding: '2rem' }}>Loading Google Maps with Routing...</div>;

  const currentCenter = selectedPlace 
    ? { lat: selectedPlace.latitude, lng: selectedPlace.longitude } 
    : (userLocation || defaultCenter);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '480px',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(194, 139, 91, 0.25)'
    }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={currentCenter}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        {directionsResponse && (
          <DirectionsRenderer
            options={{
              directions: directionsResponse,
              polylineOptions: { strokeColor: '#d9884e', strokeWeight: 4, strokeOpacity: 0.8 },
              suppressMarkers: false
            }}
          />
        )}
        
        {/* User Location Marker (Blue Dot) */}
        {userLocation && (
          <Marker
            position={userLocation}
            title="Your Location"
            icon={window.google ? {
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: '#4285F4',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2,
              scale: 8
            } : undefined}
            zIndex={999}
          />
        )}

        {showMonuments && monuments.map((m) => {
          if (categoryFilter.length > 0 && !categoryFilter.includes(m.category)) return null;
          return (
            <Marker
              key={m.id}
              position={{ lat: m.latitude, lng: m.longitude }}
              onClick={() => onSelectPlace(m, 'monument')}
              icon={window.google ? {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: '#d9884e',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2,
                scale: selectedPlace?.id === m.id ? 18 : 12
              } : undefined}
            />
          );
        })}

        {showWalks && walks.map((w) => {
          return w.stops.map((stop, index) => (
            <Marker
              key={`${w.id}-${index}`}
              position={{ lat: stop.latitude, lng: stop.longitude }}
              onClick={() => onSelectPlace(w, 'walk')}
              icon={window.google ? {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: '#5fa874',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2,
                scale: selectedPlace?.id === w.id ? 10 : 6
              } : undefined}
            />
          ));
        })}

        {showWalks && walkRoutePaths.map(({ id, path }) => (
          <Polyline
            key={`route-${id}`}
            path={path}
            options={{
              strokeColor: '#5fa874',
              strokeWeight: 4,
              strokeOpacity: 0.8
            }}
          />
        ))}

        {showExperiences && experiences.map((e) => (
          <Marker
            key={e.id}
            position={{ lat: e.latitude, lng: e.longitude }}
            onClick={() => onSelectPlace(e, 'experience')}
            icon={window.google ? {
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: '#5694c9',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2,
              scale: selectedPlace?.id === e.id ? 12 : 8
            } : undefined}
          />
        ))}

      </GoogleMap>
    </div>
  );
};

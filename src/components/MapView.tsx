import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Initialize Leaflet map centered on Old Pune
      const map = L.map(mapContainerRef.current, {
        center: [18.5204, 73.8567],
        zoom: 13,
        zoomControl: true,
        attributionControl: false
      });

      // CartoDB Dark Matter / Warm dark tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersLayerRef.current = markersGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers and polylines whenever data or filters change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    // Custom SVG Marker Generators
    const createCustomIcon = (color: string, label: string, isSelected: boolean) => {
      return L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="
            position: relative;
            width: ${isSelected ? '36px' : '30px'};
            height: ${isSelected ? '36px' : '30px'};
            border-radius: 50%;
            background-color: ${color};
            border: 2px solid #ffffff;
            box-shadow: 0 0 ${isSelected ? '16px' : '8px'} ${color};
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: ${isSelected ? '14px' : '11px'};
            font-weight: 800;
            transform: translate(-50%, -50%);
            transition: all 0.2s ease;
          ">
            <span>${label}</span>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
    };

    // 1. Add Heritage Place Markers (🟠 Orange Bronze)
    if (showMonuments) {
      monuments.forEach((m) => {
        if (categoryFilter.length > 0 && !categoryFilter.includes(m.category)) {
          return;
        }

        const isSelected = selectedPlace?.id === m.id;
        const icon = createCustomIcon('#d9884e', '🏛️', isSelected);

        const marker = L.marker([m.latitude, m.longitude], { icon });

        marker.on('click', () => {
          onSelectPlace(m, 'monument');
          map.panTo([m.latitude, m.longitude], { animate: true });
        });

        markersGroup.addLayer(marker);
      });
    }

    // 2. Add Walk Routes and Stops (🟢 Sage Green)
    if (showWalks) {
      walks.forEach((w) => {
        // Draw polyline route
        if (w.routeCoordinates && w.routeCoordinates.length > 1) {
          const polyline = L.polyline(w.routeCoordinates, {
            color: '#5fa874',
            weight: 4,
            opacity: 0.8,
            dashArray: '6, 8'
          });
          markersGroup.addLayer(polyline);
        }

        // Add stop markers
        w.stops.forEach((stop, index) => {
          const isSelected = selectedPlace?.id === w.id;
          const icon = createCustomIcon('#5fa874', `${index + 1}`, isSelected);

          const marker = L.marker([stop.latitude, stop.longitude], { icon });

          marker.on('click', () => {
            onSelectPlace(w, 'walk');
            map.panTo([stop.latitude, stop.longitude], { animate: true });
          });

          markersGroup.addLayer(marker);
        });
      });
    }

    // 3. Add Experience Markers (🔵 Blue)
    if (showExperiences) {
      experiences.forEach((e) => {
        const isSelected = selectedPlace?.id === e.id;
        const icon = createCustomIcon('#5694c9', '✨', isSelected);

        const marker = L.marker([e.latitude, e.longitude], { icon });

        marker.on('click', () => {
          onSelectPlace(e, 'experience');
          map.panTo([e.latitude, e.longitude], { animate: true });
        });

        markersGroup.addLayer(marker);
      });
    }

    // If a place is selected, pan map to it
    if (selectedPlace?.latitude && selectedPlace?.longitude) {
      map.panTo([selectedPlace.latitude, selectedPlace.longitude], { animate: true });
    }
  }, [
    monuments,
    walks,
    experiences,
    selectedPlace,
    showMonuments,
    showWalks,
    showExperiences,
    categoryFilter
  ]);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '480px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(194, 139, 91, 0.25)'
      }}
    />
  );
};

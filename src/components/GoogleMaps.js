import { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 43.44495, lng: -80.48592 }), [])

  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName='map-container'>
      <MarkerF position={center} />
      {/* SHow street View on Map */}
      {/* <StreetViewPanorama position={center} /> */}
    </GoogleMap>
  )
}

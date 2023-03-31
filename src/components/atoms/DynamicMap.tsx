import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { MapContainer } = ReactLeaflet;

const Map = ({ children, ...rest }: any) => {
useEffect(() => {
(async function init() {
Leaflet.Icon.Default.mergeOptions({
iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
iconUrl: "leaflet/images/marker-icon.png",
shadowUrl: "leaflet/images/marker-shadow.png",
});
})();
}, []);

return (
<MapContainer className={"h-[100%] w-[100%]"} {...rest}>
{children(ReactLeaflet, Leaflet)}
</MapContainer>
);
};

export default Map;













2
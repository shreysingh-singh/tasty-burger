import Layout from "../../coponents/Layouts/layout";
import Section1 from "./Section1";
import "../../styles/HomeStyle.css"
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";


export default function Home(){
    return (
        <>
        <Layout>
            {/*  Home Section 1 */}
            <Section1 />
            {/* Home Section 2  */}
            <Section2 />
            {/* Home Section 3  */}
            <Section3 />
            {/* Home Section 4  */}
            <Section4 />
            {/* Home Section 5  */}
            <Section5 />
        </Layout>
        </>
    )
}
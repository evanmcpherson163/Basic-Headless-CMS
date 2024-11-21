// import Layout
import Layout from '../../components/layout';
import { getAllIds, getData} from "../../library/data";
// any file name enclosed in [] expects to see both getStaticProps() and getStaticPaths() named exactly as shown
// define a getStaticProps() function to have next.js retreive data to use for the dynamic page - this name is defined by next.js
export async function getStaticProps( { params } ){
    const itemData = await getData(params.id);
    return {
        props: {
            itemData
        }
    };
}
// define a getStaticPaths() function to tell next.js all valid URLs- this name is defined by next.js
export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
        paths,
        fallback: false
    };
}
// export our dynamically routed page component Entry
// in JSX "class" must be changed to "className"
export default function Entry( { itemData } ) {
    return(
        <Layout>
            <article className="card col-6"> 
                <div className="card-body">
                    <h5 className="card-title">{itemData.name}</h5>
                    <p className="card-text">{itemData.hair}</p>
                    <p className="card-text">{itemData.grade}</p>
                </div>
            </article>  
        </Layout>
    );
}
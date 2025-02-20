import NavCard from '../../components/NavCard'
import withAuth from '../Auth/withAuth';
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import("../../components/NavBar"), { ssr: false }) //<- set SSr to false

const patient = () => {

    const List = [
        {
            id: 1,
            title: 'Prise en charge',
            subtitle: 'Ajouter un patient',
            image: '../home-images/catalogue.jpg',
            btn: 'Continuer',
            link: 'routes/subroutes/addPatient',
            target: '_blank'
        },
        {
            id: 2,
            title: 'Liste des patients',
            subtitle: 'Lister et gérer les patients',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/getPatients',
            target: '_self'
        }
    ]
    return ( <> 
    <Navbar />
        <h1 className="text-center text-5xl font-bold text-green-500 mt-10">Patients</h1>
            <div className="grid gap-2 grid-cols-1 mt-10 mx-auto lg:w-4/5 md:grid-cols-1 lg:grid-cols-2">
            {List.map((item) => (
					<NavCard title={item.title} subtitle={item.subtitle} image={item.image} btn={item.btn} id={item.id} key={item.id} link={item.link} target={item.target}/>
				))}
            </div>
    </> );
}
 
export default withAuth(patient);
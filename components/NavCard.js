import Button from './Button'
import Link from 'next/link'

const NavCard = ({ title, subtitle, image, btn, id, link ,target}) => {
    if(target==undefined)target='_self'
    
    return (
      <>
        <div className="card shadow-sm border border-green-600 rounded-md relative" key={id}>
        <img src={image} width="100px" height="100px" className="mx-auto mt-5"/>
        <div className="absolute inset-x-0 bottom-4 p-5">
            <h1 className="text-xl font-bold mx-4">{title}</h1>
            <p className="text-sm mt-2 mx-4">{subtitle}</p>
            <Link href={`/${link}`}><a  target={`${target}`}><Button name={btn} classnames="bg-green-500 mt-8 text-white font-light"/></a></Link>
        </div>
    </div>
      </>
    );
  };
  
  export default NavCard;